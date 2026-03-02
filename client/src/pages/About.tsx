import { Link } from 'wouter';
import { ArrowLeft, Award, Users, Leaf } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * About Page Component
 * Design Philosophy: Coastal Minimalism
 * - Company story and mission
 * - Values and commitments
 * - Team and expertise
 */
export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in seafood selection, processing, and packaging.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We listen and adapt to your needs.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We support sustainable fishing practices to protect our marine resources.',
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
          <h1 className="text-white">About Vighneshwara Enterprise</h1>
          <p className="text-blue-100 text-lg mt-4">
            Bringing premium seafood from the waters of Kerala to your table
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-text-dark">Our Story</h2>
              <p className="text-lg text-text-light mb-4">
                Vighneshwara Enterprise was founded with a simple mission: to bring the finest quality 
                seafood from the pristine waters of Kerala to customers across India. With roots in the 
                fishing community of Kochi, we understand the value of quality, freshness, and reliability.
              </p>
              <p className="text-lg text-text-light mb-4">
                Over the years, we've built strong relationships with local fishermen, invested in modern 
                processing facilities, and implemented rigorous quality control measures. Today, we're proud 
                to be a trusted name in the seafood industry.
              </p>
              <p className="text-lg text-text-light">
                Our commitment to "Seafood Safe Food" reflects our dedication to delivering products that 
                are not just delicious, but also safe and sustainably sourced.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663396004884/iTUK64Na2PjudvT3hXX5q8/about-fishing-boats-WhpNQW4Es9CnMhee5DQ4Vg.webp"
                alt="Traditional fishing boats at sunset"
                className="w-full rounded-2xl shadow-lg"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-warm-accent rounded-2xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-text-dark">Our Core Values</h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="card-product p-8 text-center">
                  <Icon className="w-16 h-16 text-accent-teal mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-text-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-light">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-text-dark">Why Choose Vighnet?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-primary-blue mb-4">
                Direct from Source
              </h3>
              <p className="text-text-light mb-4">
                We work directly with local fishermen in Kochi, ensuring we get the freshest catch 
                and can maintain fair prices for both suppliers and customers.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-primary-blue mb-4">
                Quality Assurance
              </h3>
              <p className="text-text-light mb-4">
                Every product undergoes rigorous quality checks. We maintain strict hygiene standards 
                and use modern processing techniques to ensure safety and freshness.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-primary-blue mb-4">
                Sustainable Practices
              </h3>
              <p className="text-text-light mb-4">
                We're committed to sustainable fishing practices that protect our marine ecosystem 
                for future generations while ensuring the best products today.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-primary-blue mb-4">
                Customer Service
              </h3>
              <p className="text-text-light mb-4">
                Our team is dedicated to providing excellent service. Whether you're a retail customer 
                or wholesale buyer, we're here to meet your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-blue to-accent-teal text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-white">Experience the Vighnet Difference</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for premium seafood
          </p>
          <Link href="/contact">
            <a className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold bg-white text-primary-blue hover:bg-blue-50 transition-colors no-underline">
              Get in Touch Today
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
