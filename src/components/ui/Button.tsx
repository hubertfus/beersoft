import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline";
}

const Button = ({ className, variant = "default", ...props }: ButtonProps) => {
    return (
        <button
            className={cn(
                "rounded-lg px-8 py-3",
                variant === "default"
                    ? "bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors flex items-center justify-center"
                    : "border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors",
                className
            )}
            {...props}
        />
    );
};

export default Button;
