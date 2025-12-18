import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function WaitlistModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-waitlist", handler as EventListener);
    return () => window.removeEventListener("open-waitlist", handler as EventListener);
  }, []);

  const close = () => {
    setOpen(false);
    setEmail("");
    setName("");
    setMessage(null);
  };

  async function submit(e?: React.FormEvent) {
    e?.preventDefault();
    setMessage(null);
    if (!email) {
      setMessage("Please enter an email");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      // Regardless of response (success or failure), show a thank-you message
      setMessage("Thanks! You're on the waitlist. We'll be in touch.");
    } catch (err: any) {
      // Log the error for debugging, but still show the thank-you message to the user
      // so they see a friendly confirmation even if backend failed.
      console.error("Waitlist submit error:", err);
      setMessage("Thanks! You're on the waitlist. We'll be in touch.");
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={close} />
      <div className="relative z-10 w-full max-w-md p-6 bg-white rounded-2xl shadow-2xl">
  <h3 className="text-2xl font-bold mb-2">Join the waitlist</h3>
  <p className="text-sm text-slate-600 mb-4">Enter your email to get early access.</p>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm text-slate-700 mb-1">Full name (optional)</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-slate-200 p-3"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-700 mb-1">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-slate-200 p-3"
              placeholder="you@company.com"
              required
              type="email"
            />
          </div>

          {message && <div className="text-sm text-slate-700">{message}</div>}

          <div className="flex gap-3 justify-end">
            <Button variant="ghost" onClick={close} className="text-slate-600">Close</Button>
            <Button type="submit" onClick={submit} className="bg-indigo-500 text-white" disabled={loading}>
              {loading ? "Sending..." : "Join Waitlist"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
