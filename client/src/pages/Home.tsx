import { Link } from 'wouter';
import { ArrowRight, CheckCircle, Waves } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Home Page Component
 * Design Philosophy: Coastal Minimalism
 * - Asymmetric hero section with product imagery
 * - Clear value proposition
 * - Featured products section
 * - Call-to-action sections
 */
export default function Home() {
  const features = [
    {
      title: 'Premium Quality',
      description: 'Carefully selected and processed seafood products',
    },
    {
      title: 'Safe & Fresh',
      description: 'Stringent quality control and safe handling practices',
    },
    {
      title: 'Reliable Supply',
      description: 'Consistent delivery of fresh products to your door',
    },
    {
      title: 'Expert Team',
      description: 'Years of experience in seafood industry',
    },
  ];

  const products = [
    {
      name: 'Premium Cuttle Fish',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663396004884/iTUK64Na2PjudvT3hXX5q8/hero-fresh-seafood-P6v7ysR744p2j5PaCcjif5.webp',
      description: 'Fresh, high-quality cuttle fish sourced directly from local fishermen',
    },
    {
      name: 'Fish Fillets',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663396004884/iTUK64Na2PjudvT3hXX5q8/product-showcase-seafood-kji5L2myVxtjb488jsycvt.webp',
      description: 'Boneless fish fillets, perfectly portioned for your convenience',
    },
    {
      name: 'Fresh Fish',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663396004884/iTUK64Na2PjudvT3hXX5q8/hero-fresh-seafood-P6v7ysR744p2j5PaCcjif5.webp',
      description: 'Whole fresh fish delivered daily with guaranteed freshness',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-bg-light">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-20 lg:py-24 flex-1">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 rounded-full bg-secondary text-primary-blue text-sm font-semibold">
                  Premium Seafood Supplier
                </span>
              </div>
              <h1 className="mb-6 text-text-dark">
                Fresh Seafood,{' '}
                <span className="text-accent-teal">Delivered Daily</span>
              </h1>
              <p className="text-lg text-text-light mb-8 max-w-lg">
                Vighneshwara Enterprise brings you the finest quality seafood products from the waters of Kerala. 
                With decades of experience and a commitment to safety and freshness, we're your trusted partner 
                for premium seafood.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <a className="btn-primary inline-flex items-center justify-center gap-2 no-underline">
                    Explore Products
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="btn-secondary inline-flex items-center justify-center gap-2 no-underline">
                    Get in Touch
                  </a>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663396004884/iTUK64Na2PjudvT3hXX5q8/hero-fresh-seafood-P6v7ysR744p2j5PaCcjif5.webp"
                alt="Fresh seafood products"
                className="w-full rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-teal rounded-2xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-text-dark">Why Choose Vighnet?</h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              We combine traditional fishing expertise with modern quality standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-product p-6 text-center"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CheckCircle className="w-12 h-12 text-accent-teal mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-text-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-light text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-text-dark">Our Featured Products</h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Discover our range of premium seafood products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {products.map((product, index) => (
              <div key={index} className="card-product overflow-hidden">
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text-dark mb-2">
                    {product.name}
                  </h3>
                  <p className="text-text-light mb-4">
                    {product.description}
                  </p>
                  <Link href="/products">
                    <a className="inline-flex items-center gap-2 text-accent-teal hover:text-primary-blue transition-colors font-semibold no-underline">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <a className="btn-primary inline-flex items-center gap-2 no-underline">
                View All Products
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-blue to-accent-teal text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-white">Ready to Experience Premium Seafood?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to place your order or inquire about wholesale opportunities
          </p>
          <Link href="/contact">
            <a className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold bg-white text-primary-blue hover:bg-blue-50 transition-colors no-underline">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
