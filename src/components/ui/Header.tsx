const Header = () => {
    return (
        <header className="flex justify-center bg-white">
            <div className="flex flex-1 flex-row items-center justify-between max-w-7xl h-16 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <span className="hidden md:flex text-5xl">🍻</span>
                    <h1 className="text-xl md:text-4xl font-extrabold text-gray-700">
                        BeerSoft
                    </h1>
                </div>
                <nav className="hidden md:flex md:flex-1 md:justify-center gap-8">
                    <a
                        href="#features"
                        className="text-gray-700 hover:text-amber-600 transition-colors"
                    >
                        Features
                    </a>
                    <a
                        href="#testimonials"
                        className="text-gray-700 hover:text-amber-600 transition-colors"
                    >
                        Testimonials
                    </a>
                    <a
                        href="#pricing"
                        className="text-gray-700 hover:text-amber-600 transition-colors"
                    >
                        Pricing
                    </a>
                    <a
                        href="#contact"
                        className="text-gray-700 hover:text-amber-600 transition-colors"
                    >
                        Contact
                    </a>
                </nav>
                <div className="flex items-center space-x-4">
                    <button className="text-gray-700 hover:text-amber-600 transition-colors">
                        Sign In
                    </button>
                    <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors">
                        Start Free Trial
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
