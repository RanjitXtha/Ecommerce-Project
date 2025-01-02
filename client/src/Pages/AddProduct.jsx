import React, { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    tags: [],
    sizes: "",
    colors: "",
    trending: false,
    discount: "",
    stock: "",
    information: {
      additionalDetails: "",
      materials: "",
      fitType: "",
      brand: "",
    },
  });

  const [images, setImages] = useState([]);
  const [newTag, setNewTag] = useState("");

  const categories = ["Men", "Women", "Accessories"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNestedChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      information: { ...prev.information, [name]: value },
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 4) {
      alert("You can upload up to 4 images only.");
    } else {
      setImages(files);
    }
  };

  const handleAddTag = () => {
    if (newTag.trim() !== "" && !formData.tags.includes(newTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }));
    }
    setNewTag("");
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("category", formData.category);
    data.append("tags", JSON.stringify(formData.tags));
    data.append("sizes", formData.sizes.split(","));
    data.append("colors", formData.colors.split(","));
    data.append("trending", formData.trending);
    data.append("discount", formData.discount);
    data.append("stock", formData.stock);
    data.append("information", JSON.stringify(formData.information));

    images.forEach((image) => {
      data.append("images", image);
    });

    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      if (response.ok) {
        alert("Product added successfully!");
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error uploading product:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="font-medium">Title</label>
          <input
            type="text"
            name="title"
            className="border rounded-md p-2"
            placeholder="Product Title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium">Description</label>
          <textarea
            name="description"
            className="border rounded-md p-2"
            placeholder="Product Description"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="font-medium">Price</label>
            <input
              type="number"
              name="price"
              className="border rounded-md p-2"
              placeholder="Price"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Category</label>
            <select
              name="category"
              className="border rounded-md p-2"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="font-medium">Tags</label>
          <div className="flex space-x-2">
            <input
              type="text"
              className="border rounded-md p-2 flex-grow"
              placeholder="Add a tag"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap mt-2">
            {formData.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2 flex items-center"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="ml-2 text-red-500"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <label className="font-medium">Images (Max 4)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="border rounded-md p-2"
          />
        </div>
        <fieldset className="border rounded-md p-4">
          <legend className="font-medium">Additional Information</legend>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="additionalDetails"
              className="border rounded-md p-2"
              placeholder="Additional Details"
              value={formData.information.additionalDetails}
              onChange={handleNestedChange}
            />
            <input
              type="text"
              name="materials"
              className="border rounded-md p-2"
              placeholder="Materials"
              value={formData.information.materials}
              onChange={handleNestedChange}
            />
            <input
              type="text"
              name="fitType"
              className="border rounded-md p-2"
              placeholder="Fit Type"
              value={formData.information.fitType}
              onChange={handleNestedChange}
            />
            <input
              type="text"
              name="brand"
              className="border rounded-md p-2"
              placeholder="Brand"
              value={formData.information.brand}
              onChange={handleNestedChange}
            />
          </div>
        </fieldset>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
