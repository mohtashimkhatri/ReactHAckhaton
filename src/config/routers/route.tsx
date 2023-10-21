import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import NotFound from "../screens/NotFound";
import AdminDashboard from "../screens/AdminDashboard";




export default function AppRouter() {

    return (

        <>


            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="SignUp" element={<SignUp />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="AdminDashboard/*" element={<AdminDashboard/>} />
                </Routes>
            </Router>
        </>

    )

}