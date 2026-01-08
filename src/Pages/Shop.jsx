import React, { useState } from "react";
import Header from "../Components/Header";

const Shop = () => {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    name: "",
    desc: "",
    price: "",
    img: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setForm({ ...form, img: imageUrl });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.nameError = "Product Name is required";
    if (form.price === "" || Number(form.price) <= 0)
      newErrors.priceError = "Enter a valid price";
    if (!form.desc.trim()) newErrors.descError = "Description is required";
    if (!form.img) newErrors.imgError = "Product image is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setProducts([
      ...products,
      {
        ...form,
        price: Number(form.price),
      },
    ]);

    setForm({
      name: "",
      desc: "",
      price: "",
      img: null,
    });

    setErrors({});
    setShowForm(false);
  };

  return (
    <div className="min-h-screen text-gray-900">
      <Header />

      <div className="pt-[87px]">
        <button
          onClick={() => setShowForm(!showForm)}
          className="ml-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
        >
          {showForm ? "Close" : "Add product"}
        </button>

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="glass-nav w-full sm:w-[500px] max-w-md mx-auto my-6 p-6 sm:p-10"
          >
            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <label>Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="border-b pl-4 border-black bg-transparent focus:outline-none"
                />
                <span className="text-red-600">{errors.nameError}</span>
              </div>

              <div className="flex flex-col">
                <label>Product Price</label>
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  className="border-b pl-4 border-black bg-transparent focus:outline-none"
                />
                <span className="text-red-600">{errors.priceError}</span>
              </div>

              <div className="flex flex-col">
                <label>Product Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <span className="text-red-600">{errors.imgError}</span>
              </div>

              <div className="flex flex-col">
                <label>Description</label>
                <textarea
                  name="desc"
                  value={form.desc}
                  onChange={handleChange}
                  className="border pl-4 border-black bg-transparent focus:outline-none"
                />
                <span className="text-red-600">{errors.descError}</span>
              </div>

              <div className="flex justify-center gap-10">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
                >
                  ADD
                </button>
              </div>
            </div>
          </form>
        )}

        {products.length > 0 ? (
          <div className="flex flex-wrap px-3">
            {products.map((product, index) => (
              <div
                key={index}
                className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] glass-nav mx-2 my-3 p-3 rounded-md"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-[200px] object-cover rounded-md"
                />
                <div className="p-4">
                  <h2 className="font-bold text-lg">{product.name}</h2>
                  <p className="text-sm">{product.desc}</p>
                  <p className="font-semibold mt-2">₦{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-5 text-center font-bold text-2xl glass-nav p-6 mx-4">
            Oops, Your Cart Is Empty
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
