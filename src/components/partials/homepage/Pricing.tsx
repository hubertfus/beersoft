import { CheckCircle } from "lucide-react";
import Button from "../../ui/Button";
import { cn } from "../../../lib/utils";

const pricingPlans = [
    {
        name: "Starter",
        price: "$299",
        period: "per month",
        description: "Perfect for small craft breweries",
        features: [
            "Up to 5 users",
            "Basic inventory tracking",
            "Recipe management",
            "Production scheduling",
            "Email support",
        ],
        popular: false,
    },
    {
        name: "Professional",
        price: "$599",
        period: "per month",
        description: "Ideal for growing breweries",
        features: [
            "Up to 15 users",
            "Advanced analytics",
            "Multi-location support",
            "Priority phone support",
            "Custom reports",
        ],
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "pricing",
        description: "For large brewing operations",
        features: [
            "Unlimited users",
            "White-label options",
            "Dedicated account manager",
            "Custom integrations",
            "24/7 support",
            "On-premise deployment",
        ],
        popular: false,
    },
];

const Pricing = () => {
    return (
        <section id="features" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-xl text-gray-600">
                        Choose the plan that fits your brewery's size and needs
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((pricingPlan, index) => (
                        <div
                            className={`rounded-xl p-8 ${
                                pricingPlan.popular
                                    ? "bg-amber-50 border-amber-200 border-2 shadow-xl"
                                    : "bg-white border border-gray-200 shadow-lg"
                            }`}
                            key={index}
                        >
                            {pricingPlan.popular && (
                                <div className="bg-amber-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-gray-900">
                                {pricingPlan.name}
                            </h3>
                            <p className="text-gray-600 mb-6">
                                {pricingPlan.description}
                            </p>
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-gray-900">
                                    {pricingPlan.price}
                                </span>
                                <span className="text-gray-600 ml-2">
                                    {pricingPlan.period}
                                </span>
                            </div>
                            <ul className="mb-8">
                                {pricingPlan.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 mt-2 "
                                    >
                                        <CheckCircle
                                            className="text-green-500"
                                            size={20}
                                        />
                                        <span className="text-gray-700">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                variant={
                                    pricingPlan.popular ? "default" : "outline"
                                }
                                className={cn(
                                    "w-full",
                                    !pricingPlan.popular &&
                                        "bg-gray-300 text-gray-900"
                                )}
                            >
                                {pricingPlan.name === "Enterprise"
                                    ? "Contact Sales"
                                    : "Start Free Trial"}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Pricing;
