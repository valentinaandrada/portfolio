import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4">Page not found</p>
      <Link to="/" className="text-blue-500 hover:underline mt-6 block">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
