import { Route, Routes } from "react-router";
import "./App.css";
import GuestLayout from "./layouts/GuestLayout";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <>
            <Routes>
                <Route element={<GuestLayout />}>
                    <Route path="/" element={<HomePage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
