import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL, BASE_URL } from "../config/api";

const API = `${API_URL}/wedding-cards`;

export default function AddEditWeddingCard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    price: "",
    discount: "",
    size: "",
    paper: "",
  });

  const [existingImages, setExistingImages] = useState([]);
  const [imagesFiles, setImagesFiles] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔹 PREFILL (EDIT MODE)

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError("");

    fetch(`${API}/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch card");
        }
        return res.json();
      })
      .then((data) => {
        setForm({
          title: data.title || "",
          price: data.price || "",
          discount: data.discount || "",
          size: data.size || "",
          paper: data.paper || "",
        });
        setExistingImages(data.images || []);
      })
      .catch(() => {
        setError("❌ Unable to load card data");
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImagesFiles(files);
    setImagesPreview(files.map((f) => URL.createObjectURL(f)));
  };

  // cleanup preview URLs
  useEffect(() => {
    return () => {
      imagesPreview.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [imagesPreview]);

  const handleSave = async () => {
    setError("");

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("price", Number(form.price));
    formData.append("discount", Number(form.discount));
    formData.append("size", form.size);
    formData.append("paper", form.paper);
    imagesFiles.forEach((f) => formData.append("images", f));

    try {
      const res = await fetch(id ? `${API}/${id}` : API, {
        method: id ? "PUT" : "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Save failed");
      }

      alert(id ? "✅ Card Updated" : "✅ Card Added");
      navigate("/admin/wedding-cards");
    } catch {
      setError("❌ Failed to save card");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-4 sm:p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">
        {id ? "Edit Wedding Card" : "Add Wedding Card"}
      </h2>

      {loading && <p className="text-sm text-slate-500 mb-2">Loading...</p>}
      {error && <p className="text-sm text-red-600 mb-2">{error}</p>}

      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
        placeholder="Title"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Price"
        />

        <input
          name="discount"
          value={form.discount}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Discount %"
        />
      </div>

      <input
        name="size"
        value={form.size}
        onChange={handleChange}
        className="w-full border p-2 my-3 rounded"
        placeholder="Size"
      />

      <input
        name="paper"
        value={form.paper}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
        placeholder="Paper Type"
      />

      {/* Existing images */}
      {existingImages.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {existingImages.map((img, i) => (
            <img
              key={i}
              src={`${BASE_URL}${img}`}
              className="w-20 h-20 object-cover rounded"
            />
          ))}
        </div>
      )}

      <input
        type="file"
        multiple
        onChange={handleImageUpload}
        className="mb-3 w-full"
      />

      <div className="flex flex-wrap gap-2 mb-4">
        {imagesPreview.map((img, i) => (
          <img key={i} src={img} className="w-20 h-20 object-cover rounded" />
        ))}
      </div>

      <button
        onClick={handleSave}
        className="w-full sm:w-auto bg-blue-600 text-white px-5 py-2 rounded"
      >
        {id ? "Update Card" : "Save Card"}
      </button>
    </div>
  );
}
