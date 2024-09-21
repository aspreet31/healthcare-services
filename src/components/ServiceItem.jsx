import { useNavigate } from "react-router-dom";
import { useService } from "../context/ServiceContext";
export default function ServiceItem({ service }) {
  const { editService, deleteService, handleClick } = useService();
  const navigate = useNavigate();
  const handleEdit = (service) => {
    navigate(`/updateService/${service.id}`);
    handleClick();
    editService(service);
  };
  return (
    <div
      key={service.id}
      className="bg-[#D4EDDA] border border-gray-200 shadow-sm hover:shadow-lg transition-shadow p-6 rounded-lg"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {service.name}
      </h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <p className="text-green-500 font-semibold">
        Price: &#8377;{service.price}
      </p>
      <div className="mt-4 flex space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition"
          onClick={() => handleEdit(service)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition"
          onClick={() => deleteService(service.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
