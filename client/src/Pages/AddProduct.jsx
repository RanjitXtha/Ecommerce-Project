import React, { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    discount: "",
    category: "",
    tags: [],
    sizes: [],
    colors: [],
    trending: false,
    stock: "",
    information: {
      additionalDetails: "",
      materials: "",
      fitType: "",
      brand: "",
    },
  });

  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + images.length > 4) {
      alert("You can upload a maximum of 4 images.");
      return;
    }

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews([...previews, ...newPreviews]);
    setImages([...images, ...files]);
  };

  const removeImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    const updatedPreviews = previews.filter((_, i) => i !== index);

    setImages(updatedImages);
    setPreviews(updatedPreviews);
  };
  const [newTag, setNewTag] = useState("");

  const categories = ["Men", "Women", "Accessories"];
  const availableSizes = ["S", "M", "L", "XL"];
  const availableColors = ["Red", "Blue", "Green", "Yellow", "Pink", "Black", "White", "Beige", "Brown", "Navy", "Gray", "Cream"];
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

  const handleSizeToggle = (size) => {
    setFormData((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size],
    }));
  };

  const handleColorToggle = (color) => {
    setFormData((prev) => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter((c) => c !== color)
        : [...prev.colors, color],
    }));
  };

  const handleTrendingToggle = () => {
    setFormData((prev) => ({ ...prev, trending: !prev.trending }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Images:", images);
    const token = localStorage.getItem("adminToken")

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("category", formData.category);
    data.append("tags", formData.tags); // Convert array to JSON string
    data.append("sizes", formData.sizes); // Convert array to JSON string
    data.append("colors",formData.colors);
    data.append("trending", formData.trending);
    data.append("discount", formData.discount);
    data.append("stock", formData.stock);
    data.append("information", formData.information);

   
    

    images.forEach((image) => {
      data.append("images", image);
    });

    Object.entries(data).forEach(([key, value]) => {
      console.log(`Key: ${key}, Value: ${value}`);
    });
    
    try {
      const response = await fetch("http://localhost:5000/api/admin/add-product", {
        method: "POST",
        headers:{
          Authorization: token,
        },
        body: data,
      });
      const result = await response.json();
      if (result.success) {
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
        {/* Title and Description */}
        <div>
          <label className="font-medium">Title</label>
          <input
            type="text"
            name="title"
            className="border rounded-md p-2 w-full"
            placeholder="Product Title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label className="font-medium">Description</label>
          <textarea
            name="description"
            className="border rounded-md p-2 w-full"
            placeholder="Product Description"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        {/* Price and Discount */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-medium">Price</label>
            <input
              type="number"
              name="price"
              className="border rounded-md p-2 w-full"
              placeholder="Product Price"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="font-medium">Discount (%)</label>
            <input
              type="number"
              name="discount"
              className="border rounded-md p-2 w-full"
              placeholder="Discount"
              value={formData.discount}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Stock */}
        <div>
          <label className="font-medium">Stock</label>
          <input
            type="number"
            name="stock"
            className="border rounded-md p-2 w-full"
            placeholder="Stock Quantity"
            value={formData.stock}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Additional Information */}
        <div className="flex flex-col">
          <label className="font-medium">Additional Details</label>
          <textarea
            name="additionalDetails"
            className="border rounded-md p-2"
            placeholder="Additional Details"
            value={formData.information.additionalDetails}
            onChange={handleNestedChange}
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="font-medium">Materials</label>
          <input
            type="text"
            name="materials"
            className="border rounded-md p-2"
            placeholder="Materials"
            value={formData.information.materials}
            onChange={handleNestedChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium">Fit Type</label>
          <input
            type="text"
            name="fitType"
            className="border rounded-md p-2"
            placeholder="Fit Type"
            value={formData.information.fitType}
            onChange={handleNestedChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium">Brand</label>
          <input
            type="text"
            name="brand"
            className="border rounded-md p-2"
            placeholder="Brand"
            value={formData.information.brand}
            onChange={handleNestedChange}
          />
        </div>

         {/* Category */}
      <div className="mb-4">
        <label htmlFor="category" className="block font-medium mb-1">
          Category
        </label>
        <select
          id="category"
          name="category"
          className="border rounded-md p-2 w-full"
          value={formData.category}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>


        {/* Tags */}
        <div>
          <label className="font-medium">Tags</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={newTag}
              className="border rounded-md p-2 flex-grow"
              placeholder="Add a tag"
              onChange={(e) => setNewTag(e.target.value)}
            />
            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              onClick={handleAddTag}
            >
              Add
            </button>
          </div>
          <div className="flex gap-2 mt-2 flex-wrap">
            {formData.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full flex items-center gap-2"
              >
                {tag}
                <button
                  type="button"
                  className="text-red-500"
                  onClick={() => handleRemoveTag(tag)}
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Trending */}
        <div className="flex items-center gap-2">
          <label className="font-medium">Trending</label>
          <input
            type="checkbox"
            checked={formData.trending}
            onChange={handleTrendingToggle}
          />
        </div>

        {/* Sizes */}
        <div>
          <label className="font-medium">Sizes</label>
          <div className="flex gap-2 flex-wrap">
            {availableSizes.map((size) => (
              <button
                type="button"
                key={size}
                className={`w-10 h-10 rounded-full border ${
                  formData.sizes.includes(size)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => handleSizeToggle(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div>
          <label className="font-medium">Colors</label>
          <div className="flex gap-2 flex-wrap">
            {availableColors.map((color) => (
              <button
                type="button"
                key={color}
                className={`w-10 h-10 rounded-full border ${
                  formData.colors.includes(color)
                    ? "ring-2 ring-blue-500"
                    : "ring-0"
                }`}
                style={{ backgroundColor: color.toLowerCase() }}
                onClick={() => handleColorToggle(color)}
              ></button>
            ))}
          </div>
        </div>

        {/* Images */}
        <div>
        <label htmlFor="images" className="block mb-2">
          Upload Images (Max 4):
        </label>
        <input
          type="file"
          id="images"
          name="images"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          disabled={images.length >= 4}
          className="border p-2"
        />
      </div>

      <div className="flex flex-wrap gap-4">
        {previews.map((preview, index) => (
          <div key={index} className="relative">
            <img
              src={preview}
              alt={`Preview ${index + 1}`}
              className="w-24 h-24 object-cover rounded"
            />
            <button
              type="button"
              onClick={() => removeImage(index)}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6"
            >
              X
            </button>
          </div>
        ))}
      </div>

        {/* Submit Button */}
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
