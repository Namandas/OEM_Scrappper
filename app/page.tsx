import Head from 'next/head';
import HeroSection from '@/components/shared/HeroSection';
import RecentVulnerabilities from '@/components/shared/RecentVulnerabilities';
import Testimonials from '@/components/shared/Testimonials';
import SecurityPartners from '@/components/shared/SecurityPartners';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Vulnerability Alerts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Main content */}
      <Header />
      <main>
        <HeroSection />
        <RecentVulnerabilities />
        <Testimonials />
        {/* Uncomment SecurityPartners when ready */}
        {/* <SecurityPartners /> */}
      </main>
      <Footer />
    </>
  );
}
