import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useService } from "../context/ServiceContext";
const ServiceForm = () => {
  const { addOrUpdateService, serviceToEdit, handleClick } = useService();

  const navigate = useNavigate();
  const [service, setService] = useState({
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    if (serviceToEdit) {
      setService(serviceToEdit);
    }
  }, [serviceToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!service.name || !service.description || !service.price) {
      alert("Please fill in all fields");
      return;
    }
    addOrUpdateService(service);
    setService({ name: "", description: "", price: "" });
    handleClick();
    navigate("/");
  };

  return (
    <div className="mb-10 bg-[#D4EDDA] rounded-xl shadow-md p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700">Service Name</label>
          <input
            type="text"
            name="name"
            value={service.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={service.description}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={service.price}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition"
        >
          {serviceToEdit ? "Update Service" : "Add Service"}
        </button>
      </form>
    </div>
  );
};

export default ServiceForm;
