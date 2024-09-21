import { Link } from "react-router-dom"; // Adjust this if you're using Next.js Link

const Button = ({ to, onClick, className, children }) => {
  return (
    <Link to={to}>
      <button onClick={onClick} className={className}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
