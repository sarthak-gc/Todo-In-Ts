import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface UserMenuProps {
  handleDeleteAllTodos: () => Promise<void>;
}
const UserMenu: React.FC<UserMenuProps> = ({ handleDeleteAllTodos }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="  flex flex-col items-center space-y-1 w-12 h-12 bg-black border-gray-700 border-2 p-4  rounded-lg z-20"
      >
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>

      {menuOpen && (
        <div className="fixed right-4 top-16 sm:top-20 bg-gray-800 text-white p-4 rounded-lg shadow-lg z-10">
          <ul>
            <li>
              <button
                onClick={handleLogout}
                className="block w-full text-start py-2 px-4 hover:bg-gray-700 rounded-md"
              >
                Logout
              </button>
            </li>
            <li>
              <button
                onClick={handleDeleteAllTodos}
                className="block py-2 px-4 hover:bg-gray-700 rounded-md"
              >
                Delete All Todos
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
