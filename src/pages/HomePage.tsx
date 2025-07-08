import Features from "../components/partials/homepage/Features";
import Hero from "../components/partials/homepage/Hero";
import Pricing from "../components/partials/homepage/Pricing";
import Testimonials from "../components/partials/homepage/Testimonials";

const HomePage = () => {
    return (
        <>
            <Hero />
            <Features />
            <Testimonials />
            <Pricing />
        </>
    );
};

export default HomePage;
