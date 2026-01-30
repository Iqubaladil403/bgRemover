import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";

import BgRemove from "./component/BgRemove";
import Contact from "./component/Contact";
import Gallery from "./component/Gallery";
import Home from "./component/Home";
import Pricing from "./component/Pricing";
import WeddingCards from "./component/WeddingCards";
import Navbar from "./Navbar";
import Services from "./Services";

/* 🔐 Admin Imports */
import AddEditWeddingCard from "./admin/AddEditWeddingCard";
import AdminLayout from "./admin/AdminLayout";
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import WeddingCardsAdmin from "./admin/WeddingCardsAdmin";
import ProtectedRoute from "./auth/ProtecttedRoute";

/* 🔹 Wrapper to use location */
function AppLayout() {
  const location = useLocation();

  // ✅ Check if admin route
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen bg-base-200">
      {/* ✅ Navbar ONLY for USER */}
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* ================= USER ROUTES ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/BgRemover" element={<BgRemove />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/wedding-cards" element={<WeddingCards />} />

        {/* ================= ADMIN ROUTES ================= */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="wedding-cards" element={<WeddingCardsAdmin />} />
          <Route path="wedding-cards/add" element={<AddEditWeddingCard />} />
          <Route
            path="wedding-cards/edit/:id"
            element={<AddEditWeddingCard />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
