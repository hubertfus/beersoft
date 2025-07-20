import { useState, type InputHTMLAttributes } from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import type { IconName } from "lucide-react/dynamic";
import { Eye, EyeOff } from "lucide-react";

interface Input extends InputHTMLAttributes<HTMLInputElement> {
    icon?: IconName;
    label?: string;
    errorMessage?: string;
}

const IconInput = ({ className, errorMessage, ...props }: Input) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-1 flex-col">
            {props.label && (
                <label
                    htmlFor={props.id}
                    className="block text-sm font-medium text-gray-700 mb-2"
                >
                    {props.label}
                </label>
            )}
            <div className="relative">
                {props.icon && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <DynamicIcon
                            name={props.icon}
                            className="text-gray-400"
                            size={20}
                        />
                    </div>
                )}
                <input
                    className={`block w-full pl-10 ${
                        props.type === "password" ? "pr-10" : "pr-3"
                    } py-3 border rounded-lg focus:ring-2 transition-colors ${
                        errorMessage
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-amber-500 focus:border-amber-500"
                    }`}
                    id={props.id}
                    {...props}
                    type={
                        props.type === "password" && showPassword
                            ? "text"
                            : props.type
                    }
                />
                {props.type === "password" && (
                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword((prev) => !prev)}
                    >
                        {showPassword ? (
                            <EyeOff className="text-gray-400" size={20} />
                        ) : (
                            <Eye className="text-gray-400" size={20} />
                        )}
                    </button>
                )}
            </div>

            {errorMessage && (
                <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
            )}
        </div>
    );
};

export default IconInput;
