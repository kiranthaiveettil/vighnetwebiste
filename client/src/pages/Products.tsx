import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Products Page Component
 * Design Philosophy: Coastal Minimalism
 * - Grid-based product display
 * - Detailed product information
 * - Professional product cards
 */
export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Premium Cuttle Fish',
      category: 'Seafood',
      description: 'Fresh, high-quality cuttle fish (squid) sourced directly from local fishermen. Perfect for grilling, frying, or traditional preparations.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663396004884/iTUK64Na2PjudvT3hXX5q8/hero-fresh-seafood-P6v7ysR744p2j5PaCcjif5.webp',
      features: ['Fresh daily catch', 'Premium quality', 'Cleaned and ready to cook'],
    },
    {
      id: 2,
      name: 'Fish Fillets',
      category: 'Seafood',
      description: 'Boneless fish fillets, perfectly portioned for your convenience. Available in various sizes for individual or family portions.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663396004884/iTUK64Na2PjudvT3hXX5q8/product-showcase-seafood-kji5L2myVxtjb488jsycvt.webp',
      features: ['Boneless', 'Perfectly portioned', 'Quick cooking'],
    },
    {
      id: 3,
      name: 'Fresh Fish',
      category: 'Seafood',
      description: 'Whole fresh fish delivered daily with guaranteed freshness. Available in multiple varieties sourced from sustainable fishing practices.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663396004884/iTUK64Na2PjudvT3hXX5q8/hero-fresh-seafood-P6v7ysR744p2j5PaCcjif5.webp',
      features: ['Whole fish', 'Daily delivery', 'Sustainable sourcing'],
    },
    {
      id: 4,
      name: 'Shrimp & Prawns',
      category: 'Seafood',
      description: 'Premium quality shrimp and prawns, perfect for curries, grilling, or frying. Hand-selected for size and quality.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663396004884/iTUK64Na2PjudvT3hXX5q8/product-showcase-seafood-kji5L2myVxtjb488jsycvt.webp',
      features: ['Premium quality', 'Hand-selected', 'Versatile cooking'],
    },
    {
      id: 5,
      name: 'Packaged Seafood',
      category: 'Processed',
      description: 'Hygienically packaged seafood products ready for retail or wholesale. Available in various packaging sizes.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663396004884/iTUK64Na2PjudvT3hXX5q8/product-showcase-seafood-kji5L2myVxtjb488jsycvt.webp',
      features: ['Hygienic packaging', 'Retail ready', 'Multiple sizes'],
    },
    {
      id: 6,
      name: 'Specialty Selections',
      category: 'Premium',
      description: 'Curated selection of premium seafood for special occasions and restaurants. Custom orders welcome.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663396004884/iTUK64Na2PjudvT3hXX5q8/hero-fresh-seafood-P6v7ysR744p2j5PaCcjif5.webp',
      features: ['Premium selection', 'Custom orders', 'Restaurant quality'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-bg-light">
      <Header />

      {/* Page Header */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary-blue to-accent-teal text-white">
        <div className="container">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors mb-4 no-underline">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </a>
          </Link>
          <h1 className="text-white">Our Products</h1>
          <p className="text-blue-100 text-lg mt-4">
            Explore our range of premium seafood products
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 flex-1">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="card-product overflow-hidden">
                <div className="relative h-56 overflow-hidden bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent-teal text-white text-xs font-semibold">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text-dark mb-2">
                    {product.name}
                  </h3>
                  <p className="text-text-light mb-4">
                    {product.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-text-dark mb-2">
                      Features:
                    </h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-text-light flex items-start gap-2">
                          <span className="text-accent-teal mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/contact">
                    <a className="inline-block w-full text-center py-2 px-4 rounded-lg bg-primary-blue text-white font-semibold hover:bg-blue-900 transition-colors no-underline">
                      Inquire Now
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white border-t border-border">
        <div className="container text-center">
          <h2 className="mb-6 text-text-dark">Don't See What You're Looking For?</h2>
          <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
            We offer custom orders and wholesale options. Contact us to discuss your specific requirements.
          </p>
          <Link href="/contact">
            <a className="btn-primary inline-block no-underline">
              Contact Us for Custom Orders
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
