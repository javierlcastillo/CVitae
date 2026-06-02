import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "@/config/Layout.jsx";
import Home from "../pages/Home.jsx";
import Curriculum from "../pages/Curriculum.jsx";
import Profile from "@/pages/profile/Profile.jsx";
import Contact from "../pages/Contact.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/curriculum/" element={<Curriculum />} />
                <Route path="/profile/" element={<Profile />} />
                <Route path="/contact/" element={<Contact />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;