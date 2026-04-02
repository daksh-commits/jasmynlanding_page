import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                onClose();
                setEmail("");
                setName("");
            }, 2000);
        }, 1500);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="w-[90vw] max-w-[425px] sm:w-full bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-purple-50/50 -z-10" />

                <div className="p-8">
                    <DialogHeader className="mb-6">
                        <DialogTitle className="heading-3 text-3xl text-center text-gray-900">
                            Join the Waitlist
                        </DialogTitle>
                        <p className="text-center text-gray-500 mt-2 text-sm">
                            Be the first to experience Jasmyn.
                        </p>
                    </DialogHeader>

                    {isSuccess ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="py-12 text-center"
                        >
                            <div className="w-16 h-16 bg-green-100/50 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                                ✨
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-2">You're on the list!</h3>
                            <p className="text-gray-500">We'll be in touch soon.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700 ml-1">
                                    Name
                                </label>
                                <Input
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your name"
                                    required
                                    className="rounded-xl border-gray-200 focus:border-pink-500 focus:ring-pink-200 bg-white/50 transition-all font-light"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700 ml-1">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@company.com"
                                    required
                                    className="rounded-xl border-gray-200 focus:border-pink-500 focus:ring-pink-200 bg-white/50 transition-all font-light"
                                />
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full h-12 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300"
                                    style={{
                                        background: 'linear-gradient(180deg, rgba(219, 108, 241, 1) 30%, rgba(234, 115, 218, 1) 100%)',
                                        borderColor: 'rgba(230, 230, 230, 1)'
                                    }}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>Joining...</span>
                                        </div>
                                    ) : (
                                        "Join Waitlist"
                                    )}
                                </Button>
                            </motion.div>
                        </form>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
