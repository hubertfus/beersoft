import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import Button from "../components/ui/Button";
import IconInput from "../components/ui/IconInput";
import useApi from "../hooks/useApi";

interface LoginForm {
    email: string;
    password: string;
}

interface FormErrors {
    [key: string]: string;
}

interface User {
    id: number;
    email: string;
}

type LoginResponse = {
    message: string;
    user: User;
};

type ValidationError = {
    messages: {
        path: string;
        message: string;
        type: string;
    }[];
};

const LoginPage = () => {
    const { data, loading, error, request } = useApi<
        LoginResponse,
        ValidationError
    >();

    const [formData, setFormData] = useState<LoginForm>({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = "Invalid email";
        if (!formData.password) newErrors.password = "Password is required";
        return newErrors;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        await request("auth/login", {
            method: "POST",
            data: {
                email: formData.email,
                password: formData.password,
            },
        });
    };

    useEffect(() => {
        if (data) {
            console.log("Logged in:", data.user);
        }
    }, [data]);

    useEffect(() => {
        if (error?.messages) {
            const apiErrors: FormErrors = {};
            error.messages.forEach((msg) => {
                apiErrors[msg.path] = msg.message;
            });
            setErrors(apiErrors);
        }
    }, [error]);

    return (
        <>
            {loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
                    <div className="bg-white rounded-xl shadow-xl p-8 max-w-sm w-full text-center">
                        <p className="text-lg font-semibold text-gray-900">
                            Logging in...
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            Please wait
                        </p>
                    </div>
                </div>
            )}

            <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex">
                <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
                    <div>
                        <div className="text-center mb-8">
                            <div className="flex items-center justify-center mb-6">
                                <div className="bg-amber-600 rounded-2xl p-3 shadow-lg text-4xl">
                                    🍻
                                </div>
                            </div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                Sign in to BrewERP
                            </h1>
                            <p className="text-gray-600">
                                Manage your brewery with ease
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
                            <form
                                className="flex flex-col gap-4"
                                onSubmit={handleSubmit}
                            >
                                <IconInput
                                    icon="mail"
                                    id="email"
                                    label="Email"
                                    placeholder="you@brewery.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    errorMessage={errors.email}
                                />
                                <IconInput
                                    type="password"
                                    icon="lock"
                                    id="password"
                                    label="Password"
                                    placeholder="Your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    errorMessage={errors.password}
                                />
                                <Button
                                    className="flex flex-row gap-2"
                                    type="submit"
                                >
                                    <span>Log in</span>
                                    <ArrowRight size={20} />
                                </Button>
                            </form>

                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-600">
                                    Don’t have an account?{" "}
                                    <a
                                        href="/register"
                                        className="text-amber-600 hover:text-amber-700 font-medium"
                                    >
                                        Create one →
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
