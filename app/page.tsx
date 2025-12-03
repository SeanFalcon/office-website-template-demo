import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { Cases } from '@/components/cases';
import { Team } from '@/components/team';
import { FAQ } from '@/components/faq';
import { ContactForm } from '@/components/contact-form';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Cases />
        <Team />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}