import type { Metadata } from 'next';
import Hero from '@/components/hero';
import Specifications from '@/components/specifications';
import Gallery from '@/components/gallery';
import PropertyMap from '@/components/property-map';
import EligibilityFilter from '@/components/eligibility-filter';
import Faq from '@/components/faq';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import content from '@/content.json';
import Image from 'next/image';

export const metadata: Metadata = {
  title: content.site.title,
  description: content.site.tagline,
};

// #0e3b700d




export default function Home() {
  return (
    <main className="relative min-h-screen ">
      {/* <div
        className="absolute inset-0 bg-cover bg-center opacity-[8%] -z-10"
        style={{ backgroundImage: "url('/Rectangle.svg')" }}
      ></div> */}
      <div className='absolute inset-0 opacity-15 bg-cover bg-gradient-to-bl from-blue-300 via-blue-100 to-blue-300 -z-10'></div>
      
      <Navbar whatsapp={content.site.whatsapp} />
      <Hero
        title={content.site.title}
        tagline={content.site.tagline}
        whatsapp={content.site.whatsapp}
      />
      <Specifications details={content.property.details} />
      <Gallery images={content.property.images} videoTourUrl={content.property.videoTourUrl} />
      <PropertyMap location={content.property.location} />
      <EligibilityFilter
        groups={content.eligibility.groups}
        minDownPayment={content.eligibility.minDownPayment}
        restrictions={content.eligibility.restrictions}
      />
      <Faq faqs={content.faqs} />
      <Footer
        price={content.property.price}
        paymentInfo={content.property.paymentInfo}
        whatsapp={content.site.whatsapp}
      />
    </main>
  );
}
