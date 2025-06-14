import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import WaveDivider from '@/components/WaveDivider';

const Index = () => {
  const instaImages = [
    '/lovable-uploads/7b0de67f-afbd-4150-91b2-1c11efc879e4.png',
    '/lovable-uploads/6643d70e-eec1-48b8-89ce-6ffc86b4390b.png',
    '/lovable-uploads/e01565bc-d92e-4bf4-9b7e-2585e53d6921.png',
    '/lovable-uploads/b71f636d-6cf0-4447-ba17-6316e003c498.png',
    // Repeating first and third images to fill the 6-item grid
    '/lovable-uploads/7b0de67f-afbd-4150-91b2-1c11efc879e4.png',
    '/lovable-uploads/e01565bc-d92e-4bf4-9b7e-2585e53d6921.png',
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img src="https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=2073&auto=format&fit=crop" alt="Fried chicken dish" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 container mx-auto px-6">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter animate-fade-in" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>
            Bold Flavours
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-sans animate-fade-in" style={{ animationDelay: '0.2s', textShadow: '1px 1px 5px rgba(0,0,0,0.5)' }}>
            Chef Alex Perez's signature fried chicken & more.
          </p>
          <div className="mt-8 flex justify-center space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="bg-brand-pink hover:bg-brand-pink/80 text-brand-white font-bold rounded-sm text-lg px-8 py-6">
              <Link to="/booking">Book a Table</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-brand-green text-brand-green hover:bg-brand-green hover:text-brand-background font-bold rounded-sm text-lg px-8 py-6">
              <Link to="/menu">View Menu</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-20">
          <WaveDivider color="#0A192F" />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="md:pr-12">
            <h2 className="text-4xl md:text-5xl">Our Chicken Has a Story</h2>
            <p className="mt-4 text-lg text-brand-lightBlue">
              We don't just fry chicken. We funk it up. Our birds are free-range, double-fried, sour-pickled, and sauce-drenched. Always served with a twist. Think street food with attitude and bar vibes in every bite.
            </p>
            <Button asChild className="mt-8 bg-brand-green hover:bg-brand-green/80 text-brand-background font-bold rounded-sm">
              <Link to="/about">Read Our Story</Link>
            </Button>
          </div>
          <div>
            <img src="/lovable-uploads/e70d026e-6513-4b59-99e3-5b287bfdfce5.png" alt="A spread of delicious chicken dishes and sides" className="rounded-lg shadow-2xl w-full h-auto" />
          </div>
        </div>
      </section>
      
      {/* Pink Section */}
      <section className="bg-brand-pink text-brand-background relative">
        <div className="absolute top-0 left-0 w-full">
            <WaveDivider color="#0A192F" direction="up" />
        </div>
        <div className="container mx-auto px-6 py-20 md:py-32 text-center">
          <h2 className="text-4xl md:text-6xl text-brand-background">Got Cravings?</h2>
          <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto">We've got the kitchen firing all day. Come find us in Kilburn or get it delivered to your door.</p>
           <div className="mt-8 flex justify-center space-x-4">
            <Button asChild size="lg" className="bg-brand-background hover:bg-gray-800 text-brand-white font-bold rounded-sm text-lg px-8 py-6">
                <Link to="/location">Find Us</Link>
            </Button>
            <Button asChild size="lg" className="bg-brand-background hover:bg-gray-800 text-brand-white font-bold rounded-sm text-lg px-8 py-6">
                <a href="https://deliveroo.co.uk/menu/london/brondesbury/chicknsours-at-brondes-age?srsltid=AfmBOoo0robcMapLGQTLlkIjw03jvqZ5iBreK3Rb8TnVJDfdRZ10t3kW" target="_blank" rel="noopener noreferrer">Order on Deliveroo</a>
            </Button>
           </div>
        </div>
         <div className="absolute bottom-0 left-0 w-full">
            <WaveDivider color="#0A192F" />
        </div>
      </section>

      {/* Insta Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl">INSTA @ALEXPEREZCHEF</h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instaImages.map((src, i) => (
              <div key={i} className="aspect-square bg-gray-700 rounded-lg overflow-hidden">
                <img src={src} alt={`Instagram post of food from Alex Perez Chef ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
