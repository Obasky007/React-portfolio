import React, { useState } from "react";
import Header from "../Components/Header";

const Shop = () => {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    desc: "",
    price: "",
    img: null,
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };
  const [errors, setErrors] = useState({});
  const validate = () => {
    const addError = {};
    if (!form.name) {
      addError.nameError = "Product Name is Required";
    }
    if (!form.price) {
      addError.priceError = "Price is Required";
    }
    if (!form.desc) {
      addError.descError = "Add a description";
    }
    if (form.img === null) {
      addError.imgError = "Add a Image";
    }
    return addError;
  };
  const handleImageChange = (e) => {
    const allImages = e.target.files;
    const [one] = allImages;
    const imageDir = URL.createObjectURL(one);
    console.log(imageDir);
    setForm({ ...form, [e.target.name]: imageDir });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const check = validate();

    if (Object.keys(check).length > 0) {
      setErrors(check);
    } else {
      setProducts([...products, form]);
      setForm({
        name: "",
        desc: "",
        price: "",
          img: null,
      });
      setErrors({});
    }
  };
  return (
    <>
      <div className="min-h-screen text-gray-900">
        <Header />
        <div className="pt-[87px]">
          <button
            onClick={() => setShowForm(!showForm)}
            className="ml-4 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
          >
            {showForm ? "Close" : "Add product"}
          </button>
          {showForm && (
            <form
              onSubmit={handleSubmit}
              className="glass-nav w-fit m-auto p-10"
            >
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <label>Product Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="border-b pl-4 border-black bg-transparent focus:outline-none"
                  />
                  <span className="text-red-600 items-center">
                    {errors.nameError}
                  </span>
                </div>
                <div className="flex flex-col">
                  <label>Product Price:</label>
                  <input
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    className="border-b pl-4 border-black bg-transparent focus:outline-none"
                  />
                  <span className="text-red-600 items-center">
                    {errors.priceError}
                  </span>
                </div>
                <div className="flex flex-col">
                  <label>Product Image:</label>
                  <input
                    type="file"
                    name="img"
                    onChange={handleImageChange}
                    className=""
                  />
                  <span className="text-red-600 items-center">
                    {errors.imgError}
                  </span>
                </div>
                <div className="flex flex-col">
                  <label>Description:</label>
                  <textarea
                    name="desc"
                    id="20"
                    value={form.desc}
                    onChange={handleChange}
                    className="border pl-4 border-black bg-transparent focus:outline-none"
                  ></textarea>
                  <span className="text-red-600 items-center">
                    {errors.descError}
                  </span>
                </div>
                <div className="flex justify-center items-center gap-16">
                  <button
                    onClick={() => setShowForm(!showForm)}
                    className="ml-4 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                  >
                    Close
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
                    ADD
                  </button>
                </div>
              </div>
            </form>
          )}
          {products.length > 0 ? (
            <div className="flex flex-row flex-wrap m-auto mb-5 ml-3">
              {products.map((product, id) => (
                <div className="w-[23%] glass-nav mx-3 my-3 p-3 rounded-md">
                  <img
                    src={product.img}
                    className="w-[100%] h-[200px] rounded-t-md hover:skew-x-1 transition-all object-cover"
                  />
                  <div className="p-10">
                    <h2 className="font-bold">{product.name}</h2>
                    <p>{product.desc}</p>
                    <p className="font-semibold">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-5 glass-nav shadow-none font-bold text-4xl w-[500px] m-auto items-center p-10">
              <h1 className="w-full">Oops, Your Cart Is Empty</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
