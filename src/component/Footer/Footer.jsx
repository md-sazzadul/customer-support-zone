import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10">
          {/* Logo + Description */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h2 className="text-white font-bold text-xl mb-4 tracking-tight">
              CS — Ticket System
            </h2>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              We help support teams stay on top of customer issues — from the
              first report to full resolution. Fast, organised, and built for
              real workflows.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5">Company</h3>
            <ul className="space-y-3 text-sm">
              {["About Us", "Our Mission", "Contact Sales"].map((item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5">Services</h3>
            <ul className="space-y-3 text-sm">
              {["Products & Services", "Customer Stories", "Download Apps"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5">
              Information
            </h3>
            <ul className="space-y-3 text-sm">
              {["Privacy Policy", "Terms & Conditions", "Join Us"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5">
              Social Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-700 text-white text-xs shrink-0">
                  <FaXTwitter />
                </span>
                @CS_Tickets
              </li>
              <li className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-700 text-white text-xs shrink-0">
                  <FaLinkedin />
                </span>
                CS Ticket System
              </li>
              <li className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs shrink-0">
                  <FaFacebook />
                </span>
                CS Ticket System
              </li>
              <li className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-600 text-white text-xs shrink-0">
                  <FaEnvelope />
                </span>
                support@cst.com
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          © 2025 CS — Ticket System. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
