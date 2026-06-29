import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import ServiceExtras from '@/components/ServiceExtras';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Training from '@/components/Training';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import './globals.css';

export const metadata: Metadata = {
  title: 'NewCastle Barbershop - Премиальный барбершоп в Кызылорде',
  description: 'Премиальный барбершоп NewCastle в Кызылорде. Качество, точность и безупречный стиль. Запишитесь на стрижку или курс обучения.',
  keywords: 'барбершоп, стрижка, Кызылорда, NewCastle, обучение барбер',
  authors: [{ name: 'NewCastle Barbershop' }],
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Премиальный барбершоп NewCastle в Кызылорде" />
      </head>
      <body className="bg-dark-bg text-light-gray font-sans antialiased">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <ServiceExtras />
        <Gallery />
        <Reviews />
        <Training />
        <Contacts />
        <Footer />
        <FloatingWhatsApp />
        {children}
      </body>
    </html>
  );
}
