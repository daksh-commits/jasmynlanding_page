import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

const WAITLIST_FILE = path.join(process.cwd(), "server", "waitlist.json");

async function appendToWaitlist(payload: { email: string; name?: string }) {
  try {
    const exists = fs.existsSync(WAITLIST_FILE);
    if (!exists) {
      await fs.promises.writeFile(WAITLIST_FILE, JSON.stringify([payload], null, 2));
      return;
    }

    const content = await fs.promises.readFile(WAITLIST_FILE, "utf-8");
    const arr = JSON.parse(content || "[]");
    arr.push(payload);
    await fs.promises.writeFile(WAITLIST_FILE, JSON.stringify(arr, null, 2));
  } catch (err) {
    console.error("Failed to append to waitlist file", err);
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // POST /api/waitlist - accept email and optional name
  app.post("/api/waitlist", async (req: Request, res: Response) => {
    try {
      const { email, name } = req.body as { email?: string; name?: string };
      if (!email || typeof email !== "string") {
        return res.status(400).json({ message: "Email is required" });
      }

      // basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email" });
      }

      // persist to simple file storage
      await appendToWaitlist({ email, name });

      // attempt to send mail using sendmail transport (local sendmail) - no external creds required
      let mailSent = false;
      let mailError: string | null = null;

      try {
        const transporter = nodemailer.createTransport({ sendmail: true });
        const info = await transporter.sendMail({
          from: "Jasmyn <noreply@jasmyn.ai>",
          to: "daksh@jasmyn.ai",
          subject: "New waitlist signup",
          text: `New waitlist signup:\n\nEmail: ${email}\nName: ${name || "-"}`,
        });
        mailSent = !!info;
      } catch (err: any) {
        mailError = String(err?.message || err);
        console.warn("Mail send failed (sendmail) - saved to waitlist file instead", mailError);
      }

      return res.json({ ok: true, stored: true, mailSent, mailError });
    } catch (err: any) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
