import { Link } from "react-router-dom";
import Button from "./Button";
import { useService } from "../context/ServiceContext";

const Header = () => {
  const { isSubmitted, handleClick } = useService();
  return (
    <header className="py-8 text-center flex flex-col gap-4 md:flex-row justify-between items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#2C3E50] mb-4 md:mb-0 text-center md:text-left">
        Healthcare Service Management
      </h1>

      {!isSubmitted ? (
        <Link to="/createForm">
          <Button
            to="/createService"
            onClick={handleClick}
            className="bg-[#007BFF] text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Create Service
          </Button>
        </Link>
      ) : (
        <Button
          to="/"
          onClick={handleClick}
          className="bg-[#28A745] text-white py-2 px-4 rounded hover:bg-[#218838]"
        >
          &larr;Back to Home
        </Button>
      )}
    </header>
  );
};

export default Header;
