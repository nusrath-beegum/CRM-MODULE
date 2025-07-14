import { Routes, Route } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Login from "../pages/Login";
import Register from "../pages/RegistrationForm";
import Dashboard from "../pages/Dashboard";
import Deals from "../pages/Deals";
import DealsView from "../pages/DealsView";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/deals/:id" element={<DealsView />} />
      </Route>
    </Routes>
  );
}
