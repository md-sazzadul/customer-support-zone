import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a className="text-lg font-bold text-gray-900 tracking-tight cursor-pointer shrink-0">
            CS — Ticket System
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="px-3 py-2 text-sm text-gray-500 hover:text-gray-900 rounded-md transition-colors"
                >
                  {item}
                </a>
              ),
            )}
            <button className="ml-3 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition-opacity cursor-pointer">
              + New Ticket
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4 pt-2 flex flex-col gap-1">
          {["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ),
          )}
          <button className="mt-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition-opacity cursor-pointer text-center">
            + New Ticket
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
