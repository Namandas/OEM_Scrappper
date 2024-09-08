import { Button } from '@/components/ui/button';

const HeroSection = () => {
    return (
      <section className="text-center py-20 bg-gradient-to-br from-blue-900 to-gray-800 text-white">
        <h1 className="text-5xl font-bold mb-6">Stay Ahead of Security Threats</h1>
        <p className="text-lg font-light mb-8 max-w-2xl mx-auto text-gray-300">
          Get real-time alerts and insights into vulnerabilities across OEM websites. Protect your infrastructure by staying informed.
        </p>
        <button className="bg-red-500 text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-red-600 transition-colors">
          Get Started
        </button>
      </section>
    );
  };
  
  export default HeroSection;
  
  
