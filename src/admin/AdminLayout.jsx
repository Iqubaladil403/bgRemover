import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const linkClass = ({ isActive }) =>
    `block px-3 py-2 rounded transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-slate-200 hover:bg-slate-700"
    }`;

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Top bar (mobile) */}
      <div className="md:hidden bg-slate-800 text-white flex justify-between items-center p-4">
        <h2 className="font-bold">Admin Panel</h2>
        <button onClick={() => setOpen(!open)}>☰</button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-slate-800 text-white p-5 flex flex-col
        md:w-64 md:block
        ${open ? "block" : "hidden"} md:flex`}
      >
        <h2 className="text-xl font-bold mb-8 hidden md:block">
          Admin Panel
        </h2>

        <nav className="space-y-2 flex-1">
          <NavLink to="/admin/dashboard" className={linkClass}>
            📊 Dashboard
          </NavLink>

          <NavLink to="/admin/wedding-cards" className={linkClass}>
            💌 Wedding Cards
          </NavLink>
        </nav>

        <button
          onClick={logout}
          className="mt-6 bg-red-500 hover:bg-red-600 px-3 py-2 rounded"
        >
          Logout
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 sm:p-6 bg-slate-100">
        <Outlet />
      </main>
    </div>
  );
}
