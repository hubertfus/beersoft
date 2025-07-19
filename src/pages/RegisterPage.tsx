import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, BarChart3, Check, Shield, Users } from "lucide-react";
import Button from "../components/ui/Button";
import IconInput from "../components/ui/IconInput";
import useApi from "../hooks/useApi";
import { Link } from "react-router";

const features = [
    {
        icon: BarChart3,
        title: "Complete Production Control",
        description:
            "Monitor every aspect of your brewing process from grain to glass",
    },
    {
        icon: Shield,
        title: "Enterprise-Grade Security",
        description:
            "Your data is protected with military-grade encryption and compliance",
    },
    {
        icon: Users,
        title: "Seamless Team Management",
        description:
            "Coordinate your entire brewery team with role-based access controls",
    },
];

const benefits = [
    "30-day free trial with full access",
    "No setup fees or hidden costs",
    "24/7 customer support included",
    "Easy data migration assistance",
    "Cancel anytime, no questions asked",
];

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    agreeToTerms: boolean;
    subscribeNewsletter: boolean;
}

interface FormErrors {
    [key: string]: string;
}

interface User {
    id: number;
    email: string;
}

type RegisterResponse = {
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

const RegisterPage = () => {
    const { data, loading, error, request } = useApi<
        RegisterResponse,
        ValidationError
    >();

    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
        subscribeNewsletter: false,
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: type === "checkbox" ? checked : value,
        }));
    };

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!formData.firstName.trim())
            newErrors.firstName = "First name is required";
        if (!formData.lastName.trim())
            newErrors.lastName = "Last name is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = "Invalid email";
        if (!formData.password) newErrors.password = "Password is required";
        if (formData.password.length < 6)
            newErrors.password = "Password must be at least 6 characters";
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";
        if (!formData.agreeToTerms)
            newErrors.agreeToTerms = "You must agree to the terms";
        return newErrors;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const payload = {
            email: formData.email,
            password: formData.password,
            phone: formData.phone,
            firstName: formData.firstName,
            lastName: formData.lastName,
        };

        await request("auth/register", { method: "POST", data: payload });
    };

    useEffect(() => {
        if (data) {
            console.log(data.user);
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
                            Creating account...
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            Please wait
                        </p>
                    </div>
                </div>
            )}

            {data && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
                    <div className="bg-white rounded-xl shadow-xl p-8 max-w-sm w-full text-center">
                        <p className="text-lg font-semibold text-green-600">
                            Success!
                        </p>
                        <p className="text-sm text-gray-700 mt-2">
                            Account for <b>{data.user.email}</b> has been
                            created.
                        </p>
                        <Button className="mt-6 rounded-md inline-flex items-center justify-center bg-amber-600 px-6 py-2 text-white font-semibold hover:bg-amber-700 transition">
                            <Link
                                to={"/login"}
                                className="inline-flex items-center justify-center gap-2"
                            >
                                Login
                                <ArrowRight size={18} />
                            </Link>
                        </Button>
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
                                Start Your Free Trial
                            </h1>
                            <p className="text-gray-600">
                                Join 500+ breweries using BrewERP
                            </p>
                        </div>
                        <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
                            <form
                                className="flex flex-col gap-4"
                                onSubmit={handleSubmit}
                            >
                                <div className="flex flex-row flex-wrap gap-4">
                                    <IconInput
                                        icon="user"
                                        id="firstName"
                                        label="First Name"
                                        placeholder="John"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        errorMessage={errors.firstName}
                                    />
                                    <IconInput
                                        icon="user"
                                        id="lastName"
                                        label="Last Name"
                                        placeholder="Doe"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        errorMessage={errors.lastName}
                                    />
                                </div>
                                <IconInput
                                    icon="mail"
                                    id="email"
                                    label="Work Email"
                                    placeholder="John@brewery.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    errorMessage={errors.email}
                                />
                                <IconInput
                                    icon="phone"
                                    id="phone"
                                    label="Phone"
                                    placeholder="+1 (555) 123-4567"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    errorMessage={errors.phone}
                                />
                                <IconInput
                                    type="password"
                                    icon="lock"
                                    id="password"
                                    label="Password"
                                    placeholder="Create strong password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    errorMessage={errors.password}
                                />
                                <IconInput
                                    type="password"
                                    icon="lock"
                                    id="confirmPassword"
                                    label="Confirm Password"
                                    placeholder="Confirm your password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    errorMessage={errors.confirmPassword}
                                />
                                <div className="flex flex-1 flex-row items-center">
                                    <input
                                        id="agreeToTerms"
                                        type="checkbox"
                                        className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded mt-1"
                                        checked={formData.agreeToTerms}
                                        onChange={handleChange}
                                    />
                                    <label
                                        htmlFor="agreeToTerms"
                                        className="ml-3 block text-sm text-gray-700 leading-5"
                                    >
                                        I agree to the{" "}
                                        <a
                                            href="#"
                                            className="text-amber-600 hover:text-amber-700 font-medium"
                                        >
                                            Terms of Service
                                        </a>{" "}
                                        and{" "}
                                        <a
                                            href="#"
                                            className="text-amber-600 hover:text-amber-700 font-medium"
                                        >
                                            Privacy Policy
                                        </a>
                                    </label>
                                </div>
                                <div className="flex flex-1 flex-row items-center">
                                    <input
                                        id="subscribeNewsletter"
                                        type="checkbox"
                                        className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded mt-1"
                                        checked={formData.subscribeNewsletter}
                                        onChange={handleChange}
                                    />
                                    <label
                                        htmlFor="subscribeNewsletter"
                                        className="ml-3 block text-sm text-gray-700 leading-5"
                                    >
                                        Send me brewing industry insights and
                                        product updates
                                    </label>
                                </div>

                                <Button
                                    className="flex flex-row gap-2"
                                    type="submit"
                                >
                                    <span>Create Account</span>
                                    <ArrowRight size={20} />
                                </Button>
                            </form>
                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">
                                            Already have an account?
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <a
                                    href="#"
                                    className="text-amber-600 hover:text-amber-700 font-medium"
                                >
                                    Sign in instead →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex lg:flex-1 bg-amber-600  relative overflow-hidden">
                    <div className="relative z-10 flex flex-col justify-center px-12 py-16 text-white">
                        <div className="mb-12">
                            <div className="flex items-center mb-6">
                                <div className="text-4xl">🍻</div>
                                <span className="ml-3 text-4xl font-extrabold">
                                    BeerSoft
                                </span>
                            </div>
                            <h2 className="text-4xl font-bold leading-tight mb-4">
                                Transform Your Brewery Today
                            </h2>
                            <p className="text-xl text-amber-100 leading-relaxed">
                                Start your 30-day free trial and discover why
                                leading breweries choose BrewERP to optimize
                                their operations.
                            </p>
                        </div>

                        <div className="space-y-6 mb-12">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-4"
                                >
                                    <div className="bg-white/20 bg-opacity-20 rounded-lg p-2 flex-shrink-0">
                                        <feature.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-amber-100 text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white/20 bg-opacity-10 rounded-xl p-6 backdrop-blur-sm mb-8">
                            <h3 className="font-semibold text-lg mb-4">
                                What's included in your trial:
                            </h3>
                            <div className="space-y-3">
                                {benefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center"
                                    >
                                        <div className="bg-green-500 rounded-full p-1 mr-3 flex-shrink-0">
                                            <Check className="h-3 w-3 text-white" />
                                        </div>
                                        <span className="text-amber-100 text-sm">
                                            {benefit}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold mb-1">
                                    500+
                                </div>
                                <div className="text-sm text-amber-100">
                                    Happy Customers
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold mb-1">
                                    30%
                                </div>
                                <div className="text-sm text-amber-100">
                                    Average Cost Savings
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold mb-1">
                                    4.9★
                                </div>
                                <div className="text-sm text-amber-100">
                                    Customer Rating
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;
