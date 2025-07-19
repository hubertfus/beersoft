import { Link } from "react-router";
import Button from "./Button";

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
                    <Button variant="outline" className="px-4 py-2">
                        Sign In
                    </Button>
                    <Button className="px-4 py-2">
                        <Link to={"/register"}>Start Free Trial</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
