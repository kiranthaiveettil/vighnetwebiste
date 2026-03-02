import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

/**
 * Header Component
 * Design Philosophy: Coastal Minimalism
 * - Clean navigation with professional typography
 * - Responsive mobile menu
 * - Subtle hover effects on links
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 no-underline">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-blue to-accent-teal flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary-blue m-0">Vighnet</h1>
              <p className="text-xs text-text-light m-0">Seafood Safe Food</p>
            </div>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="text-text-dark hover:text-accent-teal transition-colors duration-200 font-medium no-underline">
                {link.label}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <a className="btn-primary no-underline">Get in Touch</a>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-bg-light rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-text-dark" />
          ) : (
            <Menu className="w-6 h-6 text-text-dark" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-border">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className="text-text-dark hover:text-accent-teal transition-colors py-2 no-underline block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <a className="btn-primary inline-block text-center no-underline mt-2" onClick={() => setIsMenuOpen(false)}>
                Get in Touch
              </a>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
