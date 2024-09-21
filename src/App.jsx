import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceForm from "./components/ServiceForm";
import ServiceList from "./components/ServiceList";
import { ServiceProvider } from "./context/ServiceContext";
const App = () => {
  return (
    <ServiceProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#E9F7EF] flex flex-col items-center px-4 sm:px-6 lg:px-8">
          <Header />
          <main className="w-full max-w-7xl">
            <Routes>
              <Route path="/" exact element={<ServiceList />} />
              <Route path="/createService" element={<ServiceForm />} />
              <Route path="/updateService/:id" element={<ServiceForm />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ServiceProvider>
  );
};

export default App;
