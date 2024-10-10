import Hero from '../components/Hero';





export default function Home() {

  return (
    <main className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="w-full ">
          <Hero />
        </div>
      </div>
      
    </main>
  );
}
