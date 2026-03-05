const Navbar = () => {
  return (
    <div className="flex items-center px-6 py-3 bg-white border-b border-gray-100 shadow-sm">
      <div className="flex-1">
        <a className="text-lg font-bold text-gray-900 tracking-tight cursor-pointer">
          CS — Ticket System
        </a>
      </div>
      <div className="flex items-center gap-1">
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
    </div>
  );
};

export default Navbar;
