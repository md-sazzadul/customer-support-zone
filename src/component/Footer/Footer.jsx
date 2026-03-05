import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-6 gap-10">
          {/* Logo + Description */}
          <div className="md:col-span-2">
            <h2 className="text-white font-semibold text-lg mb-4">
              CS — Ticket System
            </h2>

            <p className="text-sm leading-relaxed max-w-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>

            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Our Mission</li>
              <li className="hover:text-white cursor-pointer">Contact Sales</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>

            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">
                Products & Services
              </li>
              <li className="hover:text-white cursor-pointer">
                Customer Stories
              </li>
              <li className="hover:text-white cursor-pointer">Download Apps</li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white font-semibold mb-4">Information</h3>

            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-white cursor-pointer">Join Us</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="">
            <h3 className="text-white font-semibold mb-4">Social Links</h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 hover:text-white">
                <FaXTwitter />
                @CS — Ticket System
              </li>

              <li className="flex items-center gap-3 hover:text-white">
                <FaLinkedin />
                @CS — Ticket System
              </li>

              <li className="flex items-center gap-3 hover:text-white">
                <FaFacebook />
                @CS — Ticket System
              </li>

              <li className="flex items-center gap-3 hover:text-white">
                <FaEnvelope />
                support@cst.com
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          © 2025 CS — Ticket System. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
