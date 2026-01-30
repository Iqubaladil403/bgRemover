import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { API_URL } from "../config/api";

const API = `${API_URL}/wedding-cards`;


export default function Dashboard() {
  const [total, setTotal] = useState(0);
  const [discounted, setDiscounted] = useState(0);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setTotal(data.length);
        setDiscounted(data.filter((c) => c.discount > 0).length);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded shadow">
          <p className="text-sm text-slate-500">Total Wedding Cards</p>
          <p className="text-3xl font-bold">{total}</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <p className="text-sm text-slate-500">Cards with Discount</p>
          <p className="text-3xl font-bold text-pink-600">{discounted}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/admin/wedding-cards/add"
            className="bg-green-600 text-white px-4 py-2 rounded text-center"
          >
            + Add New Card
          </Link>

          <Link
            to="/admin/wedding-cards"
            className="bg-blue-600 text-white px-4 py-2 rounded text-center"
          >
            Manage Cards
          </Link>
        </div>
      </div>
    </div>
  );
}
