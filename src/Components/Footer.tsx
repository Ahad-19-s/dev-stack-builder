import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-20 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-gray-200">
      
      {/* Top Footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Brand */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img
              src={Logo}
              alt="Dev Stack Logo"
              className="h-10 w-24 object-contain"
            />

            
          </div>

          <p className="mb-5 text-sm leading-7 text-white-400">
            Build modern applications with the best technologies.
            Discover tools, create your stack, and grow as a developer.
          </p>

          <div className="flex gap-4 text-xl">
            <a
              href="#"
              className="transition hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Product
          </h3>

          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-white">
                Technologies
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white">
                Roadmaps
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white">
                Resources
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white">
                Tutorials
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Company
          </h3>

          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Legal
          </h3>

          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white">
                Cookies Policy
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white">
                License
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-sm text-white-500 md:flex-row">
          
          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              Privacy
            </a>

            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;