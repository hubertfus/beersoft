import { Outlet } from "react-router";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

const GuestLayout = () => {
    return (
        <>
            <div className="min-h-screen ">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    );
};

export default GuestLayout;
