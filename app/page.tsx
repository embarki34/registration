import Hero from '../components/Hero';
import Registration from '../components/Registration';
import { Toaster } from 'sonner';




export default function Home() {

  return (
    <main className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="w-full lg:w-1/2">
          <Hero />
        </div>
        <div className="w-full lg:w-1/2">
          <Registration />
        </div>
      </div>
      <Toaster position="bottom-center" />
    </main>
  );
}
