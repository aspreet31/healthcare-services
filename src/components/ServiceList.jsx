import ServiceItem from "./ServiceItem";
import { useService } from "../context/ServiceContext";
const ServiceList = () => {
  const { services } = useService();

  if (services.length == 0)
    return (
      <h2 className="text-center text-xl font-semibold text-gray-700 mt-10">
        No Services Available
      </h2>
    );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceItem service={service} />
      ))}
    </div>
  );
};

export default ServiceList;
