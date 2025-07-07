const Hero = () => {
    return (
        <section className="flex justify-center bg-gradient-to-br from-amber-50 to-orange-50 pt-16 pb-20">
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                <div className="mb-8 lg:mb-0">
                    <h2 className="text-gray-900 text-4xl md:text-5xl lg:text-6xl font-bold">
                        The Complete ERP Solution for{" "}
                        <span className="text-amber-600">Modern Breweries</span>
                    </h2>
                    <p className="text-gray-600">
                        Streamline your brewing operations from grain to glass.
                        Manage production, inventory, sales, and compliance all
                        in one powerful platform designed specifically for
                        breweries.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors flex items-center justify-center">
                            Start Free Trial
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                            Watch Demo
                        </button>
                    </div>
                    <div className="mt-8 flex items-center space-x-8">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">
                                500+
                            </div>
                            <div className="text-sm text-gray-600">
                                Breweries Trust Us
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">
                                99.9%
                            </div>
                            <div className="text-sm text-gray-600">
                                Uptime Guarantee
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">
                                24/7
                            </div>
                            <div className="text-sm text-gray-600">
                                Support Available
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="bg-amber-100 rounded-xl p-6 mb-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-gray-900">
                                Today's Production
                            </h3>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-trending-up h-5 w-5 text-green-600"
                            >
                                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                <polyline points="16 7 22 7 22 13"></polyline>
                            </svg>
                        </div>
                        <div className="text-3xl font-bold text-gray-900">
                            2,847
                        </div>
                        <div className="text-sm text-gray-600">
                            Barrels Brewed
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                            <div className="text-lg font-semibold text-gray-900">
                                IPA
                            </div>
                            <div className="text-sm text-gray-600">
                                1,205 barrels
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <div className="text-lg font-semibold text-gray-900">
                                Lager
                            </div>
                            <div className="text-sm text-gray-600">
                                1,642 barrels
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
