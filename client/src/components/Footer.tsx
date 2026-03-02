import { Mail, Phone, MapPin, Facebook } from 'lucide-react';
import { Link } from 'wouter';

/**
 * Footer Component
 * Design Philosophy: Coastal Minimalism
 * - Professional contact information
 * - Social media links
 * - Clean, organized layout
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-blue text-white py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Vighneshwara Enterprise</h3>
            <p className="text-blue-100 mb-4">
              Premium quality seafood supplier dedicated to providing the freshest and safest products.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/vighnet/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-warm-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-blue-100 hover:text-warm-accent transition-colors no-underline">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="text-blue-100 hover:text-warm-accent transition-colors no-underline">
                    Products
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-blue-100 hover:text-warm-accent transition-colors no-underline">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-blue-100 hover:text-warm-accent transition-colors no-underline">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-100">+91 80897 75042</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-100">seafoodsafefood@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-100">Kochi, Kerala, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-blue-100">
          <p>
            &copy; {currentYear} Vighneshwara Enterprise. All rights reserved. | Migrated to modern web platform
          </p>
        </div>
      </div>
    </footer>
  );
}
