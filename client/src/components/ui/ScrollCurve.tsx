import { motion } from "framer-motion";

interface ScrollCurveProps {
    fill?: string;
    className?: string;
}

export function ScrollCurve({ fill = "fill-gray-50", className = "" }: ScrollCurveProps) {
    return (
        <div className={`absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%] z-10 pointer-events-none ${className}`}>
            <svg
                className="relative block w-[calc(110%+1.3px)] h-[120px] md:h-[200px] -left-[5%]"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
                <motion.path
                    d="M0,120 L0,120 Q600,0 1200,120 V120 z"
                    initial={{ d: "M0,120 L0,120 Q600,120 1200,120 V120 z" }}
                    whileInView={{ d: "M0,120 L0,120 Q600,0 1200,120 V120 z" }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, amount: 0.2 }}
                    className={fill}
                />
            </svg>
        </div>
    );
}
