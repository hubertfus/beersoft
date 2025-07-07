import { Outlet } from "react-router";
import Header from "../components/ui/Header";

const GuestLayout = () => {
    return (
        <>
            <div className="min-h-screen ">
                <Header />
                <Outlet />
            </div>
        </>
    );
};

export default GuestLayout;
