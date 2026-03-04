const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl font-black">CS — Ticket System</a>
      </div>
      <div className="flex-none items-center">
        <ul className="menu menu-horizontal px-1">
          {["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"].map(
            (item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ),
          )}
        </ul>
        <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
          + New Ticket
        </button>
      </div>
    </div>
  );
};

export default Navbar;
