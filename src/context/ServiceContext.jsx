import { createContext, useContext, useState, useEffect } from "react";

const ServiceContext = createContext();

export const useService = () => {
  return useContext(ServiceContext);
};

export const ServiceProvider = ({ children }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [services, setServices] = useState(() => {
    // Load services from local storage on initial render
    const savedServices = localStorage.getItem("services");
    return savedServices ? JSON.parse(savedServices) : [];
  });
  const [serviceToEdit, setServiceToEdit] = useState(null);

  useEffect(() => {
    // Save services to local storage whenever the services state changes
    localStorage.setItem("services", JSON.stringify(services));
  }, [services]);

  const addOrUpdateService = (service) => {
    if (serviceToEdit) {
      setServices((prev) =>
        prev.map((s) => (s.id === serviceToEdit.id ? service : s))
      );
      setServiceToEdit(null);
    } else {
      setServices((prev) => [...prev, { ...service, id: Date.now() }]);
    }
  };

  const deleteService = (id) => {
    setServices((prev) => prev.filter((service) => service.id !== id));
  };

  const editService = (service) => {
    setServiceToEdit(service);
  };

  const handleClick = () => {
    setIsSubmitted((s) => !s);
  };

  return (
    <ServiceContext.Provider
      value={{
        services,
        addOrUpdateService,
        deleteService,
        editService,
        serviceToEdit,
        isSubmitted,
        handleClick,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
