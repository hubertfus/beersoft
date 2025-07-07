import { DynamicIcon } from "lucide-react/dynamic";
import type { IconName } from "lucide-react/dynamic";

const features: { icon: IconName; title: string; description: string }[] = [
    {
        icon: "bar-chart-3",
        title: "Production Analytics",
        description:
            "Real-time monitoring of brewing processes, batch tracking, and quality control metrics",
    },
    {
        icon: "package",
        title: "Inventory Management",
        description:
            "Track raw materials, finished goods, and supplies with automated reorder points",
    },
    {
        icon: "users",
        title: "Staff Management",
        description:
            "Schedule shifts, track hours, and manage brewing certifications and training",
    },
    {
        icon: "trending-up",
        title: "Sales & Distribution",
        description:
            "Manage orders, track deliveries, and analyze sales performance across channels",
    },
    {
        icon: "shield",
        title: "Compliance & Safety",
        description:
            "Ensure regulatory compliance with TTB, FDA, and local brewing regulations",
    },
    {
        icon: "clock",
        title: "Recipe Management",
        description:
            "Store, version, and scale brewing recipes with precise ingredient calculations",
    },
];

const Features = () => {
    return (
        <section id="features" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Everything You Need to Run Your Brewery
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our comprehensive ERP solution is built specifically for
                        breweries, with features that understand the unique
                        challenges of brewing operations.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                            <div className="bg-amber-100 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
                                <DynamicIcon
                                    name={feature.icon}
                                    color="#d97706"
                                    size={24}
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
