import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { API_URL } from "../config/api";

const API = `${API_URL}/wedding-cards`;


export default function WeddingCardsAdmin() {
  const [cards, setCards] = useState([]);

  const fetchCards = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setCards(data));
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const deleteCard = async (id) => {
    if (!window.confirm("Delete this card?")) return;

    const res = await fetch(`${API}/${id}`, { method: "DELETE" });
    if (res.ok) fetchCards();
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
        <h2 className="text-xl font-bold">Wedding Cards</h2>

        <Link
          to="/admin/wedding-cards/add"
          className="bg-green-600 text-white px-3 py-2 rounded text-center"
        >
          + Add Card
        </Link>
      </div>

      <div className="space-y-3">
        {cards.map((card) => (
          <div
            key={card._id}
            className="bg-white p-4 rounded shadow
            flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3"
          >
            <span className="font-medium">{card.title}</span>

            <div className="flex gap-2 justify-end">
              <Link
                to={`/admin/wedding-cards/edit/${card._id}`}
                className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
              >
                Edit
              </Link>

              <button
                onClick={() => deleteCard(card._id)}
                className="bg-red-600 text-white px-3 py-1 rounded text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
