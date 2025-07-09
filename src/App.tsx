import { Route, Routes } from "react-router";
import "./App.css";
import GuestLayout from "./layouts/GuestLayout";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

function App() {
    return (
        <>
            <Routes>
                <Route element={<GuestLayout />}>
                    <Route path="/" element={<HomePage />} />
                </Route>
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </>
    );
}

export default App;
