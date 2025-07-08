import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter,
} from "lucide-react";

const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center mb-4">
                            <span className="hidden md:flex text-5xl">🍻</span>
                            <h1 className="text-xl md:text-4xl font-extrabold">
                                BeerSoft
                            </h1>
                        </div>
                        <p className="text-gray-400 mb-4">
                            The complete ERP solution designed specifically for
                            modern breweries.
                        </p>
                        <div className="flex space-x-4">
                            <Facebook
                                className="text-gray-400 hover:text-white cursor-pointer"
                                size={24}
                            />
                            <Twitter
                                className="text-gray-400 hover:text-white cursor-pointer"
                                size={24}
                            />
                            <Linkedin
                                className="text-gray-400 hover:text-white cursor-pointer"
                                size={24}
                            />
                            <Instagram
                                className="text-gray-400 hover:text-white cursor-pointer"
                                size={24}
                            />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Product</h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                >
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                >
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                >
                                    Press
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <Phone
                                    className="text-amber-600 mr-2"
                                    size={16}
                                />
                                <span className="text-gray-400">
                                    +1 (555) 123-4567
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Mail
                                    className="text-amber-600 mr-2"
                                    size={16}
                                />
                                <span className="text-gray-400">
                                    hello@beersoft.com
                                </span>
                            </li>
                            <li className="flex items-center">
                                <MapPin
                                    className="text-amber-600 mr-2"
                                    size={16}
                                />
                                <span className="text-gray-400">
                                    San Francisco, CA
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p className="text-gray-400">
                        © 2025 BeerSoft. All rights reserved. | Privacy Policy |
                        Terms of Service
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
