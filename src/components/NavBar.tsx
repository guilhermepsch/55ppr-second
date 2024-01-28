import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-black p-4">
      <ul className="flex space-x-6 justify-center">
        <li>
          <Link to="/" className="text-white hover:text-red-500 transition duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/adapter" className="text-white hover:text-red-500 transition duration-300">
            Adapter
          </Link>
        </li>
        <li>
          <Link to="/state" className="text-white hover:text-red-500 transition duration-300">
            State
          </Link>
        </li>
        <li>
          <Link to="/composite" className="text-white hover:text-red-500 transition duration-300">
            Composite
          </Link>
        </li>
        <li>
          <Link to="/visitor" className="text-white hover:text-red-500 transition duration-300">
            Visitor
          </Link>
        </li>
        <li>
          <Link to="/decorator" className="text-white hover:text-red-500 transition duration-300">
            Decorator
          </Link>
        </li>
      </ul>
    </nav>
  );
}
