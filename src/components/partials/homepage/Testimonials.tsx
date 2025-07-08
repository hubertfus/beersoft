import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        name: "Michael Chen",
        role: "Head Brewer, Craft Valley Brewery",
        content:
            "This ERP system transformed our operations. We reduced waste by 30% and improved our batch consistency significantly.",
        rating: 5,
    },
    {
        name: "Sarah Rodriguez",
        role: "Operations Manager, Golden Hops Brewing",
        content:
            "The inventory management alone saved us thousands. We never run out of key ingredients anymore.",
        rating: 4,
    },
    {
        name: "James Mitchell",
        role: "Owner, Riverside Brewing Co.",
        content:
            "From production to sales, everything is streamlined. Our team is more efficient than ever.",
        rating: 4,
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Trusted by Breweries Worldwide
                    </h2>
                    <p className="text-xl text-gray-600">
                        See what brewery owners and operators are saying about
                        BrewERP
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-8 shadow-lg"
                        >
                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="h-5 w-5 text-yellow-400 fill-current"
                                    />
                                ))}
                                {[...Array(5 - testimonial.rating)].map(
                                    (_, i) => (
                                        <Star
                                            key={i}
                                            className="h-5 w-5 text-gray-200 fill-current"
                                        />
                                    )
                                )}
                            </div>
                            <Quote className="text-amber-600 mb-4" size={36} />
                            <p className="text-gray-700 mb-6 italic">
                                "{testimonial.content}"
                            </p>
                            <div>
                                <div className="font-semibold text-gray-900">
                                    {testimonial.name}
                                </div>
                                <div className="text-sm text-gray-600">
                                    {testimonial.role}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
