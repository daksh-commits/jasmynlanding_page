import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Play, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import recordingFile from "@assets/recording.wav";

interface AudioModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AudioModal({ isOpen, onClose }: AudioModalProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (!isOpen) {
            setIsPlaying(false);
            setProgress(0);
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        }
    }, [isOpen]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const current = audioRef.current.currentTime;
            const duration = audioRef.current.duration || 1;
            setProgress((current / duration) * 100);

            if (current >= duration) {
                setIsPlaying(false);
                setProgress(0);
            }
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="w-[90vw] max-w-[400px] bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 outline-none">

                <div className="flex flex-col items-center justify-center space-y-6 py-4">
                    <div className="text-center space-y-2">
                        <h3 className="heading-3 text-2xl">Hear Jasmyn in Action</h3>
                        <p className="text-gray-500 text-sm">Listen to a real call negotiation.</p>
                    </div>

                    {/* Audio Visualization / Player UI */}
                    <div className="w-full bg-gray-50 rounded-2xl p-6 flex flex-col items-center gap-6 border border-gray-100 relative overflow-hidden">

                        {/* Animated Sound Wave Graphic (Decorative) */}
                        <div className="flex items-center justify-center gap-1 h-12">
                            {[1, 2, 3, 4, 5, 4, 3, 2, 1].map((bar, i) => (
                                <motion.div
                                    key={i}
                                    className="w-1.5 bg-primary rounded-full"
                                    animate={{
                                        height: isPlaying ? [10, bar * 8, 10] : 10,
                                        opacity: isPlaying ? 1 : 0.5
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                        delay: i * 0.1,
                                        ease: "easeInOut"
                                    }}
                                    style={{ height: 10 }}
                                />
                            ))}
                        </div>

                        <button
                            onClick={togglePlay}
                            className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform active:scale-95"
                            style={{ background: 'linear-gradient(180deg, rgba(219, 108, 241, 1) 30%, rgba(234, 115, 218, 1) 100%)' }}
                        >
                            {isPlaying ? <Pause fill="currentColor" size={24} /> : <Play fill="currentColor" className="ml-1" size={24} />}
                        </button>

                        {/* Progress Bar */}
                        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-primary"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>

                    <audio
                        ref={audioRef}
                        src={recordingFile}
                        onTimeUpdate={handleTimeUpdate}
                        onEnded={() => setIsPlaying(false)}
                    />

                </div>
            </DialogContent>
        </Dialog>
    );
}
