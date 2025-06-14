
import WaveDivider from "@/components/WaveDivider";

const Location = () => {
  return (
    <div className="w-full">
      <div className="bg-brand-green text-brand-background pt-32 pb-40 relative">
        <div className="absolute top-0 left-0 w-full">
          <WaveDivider color="#0A192F" direction="up" />
        </div>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-brand-background">FIND US</h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <WaveDivider color="#0A192F" />
        </div>
      </div>

      <div className="py-20 md:py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl">The Brondesage</h2>
            <p className="mt-4 text-xl text-brand-lightBlue">158A Kilburn High Rd, London NW6 4JD</p>
            <div className="mt-8">
              <h3 className="text-2xl text-brand-green">Kitchen Hours</h3>
              <ul className="mt-2 text-lg list-disc list-inside text-brand-lightBlue">
                <li>Wednesday - Friday: 5pm - 10pm</li>
                <li>Saturday: 12pm - 10pm</li>
                <li>Sunday: 12pm - 8pm</li>
              </ul>
            </div>
          </div>
          <div className="w-full h-80 bg-gray-700 rounded-lg overflow-hidden">
             <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                loading="lazy" 
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.58330559648!2d-0.2059345236906231!3d51.5367610091703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761011503a45c7%3A0x6b72a6b47c03738!2sThe%20Brondesage!5e0!3m2!1sen!2suk!4v1684333056789!5m2!1sen!2suk">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
