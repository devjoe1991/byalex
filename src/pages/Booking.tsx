
import { Button } from "@/components/ui/button";

const Booking = () => {
  return (
    <div className="container mx-auto px-6 py-20 md:py-32 text-center">
      <h1 className="text-5xl md:text-7xl">Book a Table</h1>
      <p className="mt-4 text-xl max-w-2xl mx-auto text-brand-lightBlue">
        We're serving at The Brondesage pub in Kilburn. For parties of 6 or more, please give the pub a call. For smaller groups, feel free to walk in!
      </p>
      <div className="mt-8">
        <Button size="lg" asChild className="bg-brand-pink hover:bg-brand-pink/80 text-brand-white font-bold rounded-sm text-lg px-8 py-6">
          <a href="tel:+442076241935">Call to Book: 020 7624 1935</a>
        </Button>
      </div>
      <p className="mt-8 text-brand-lightBlue">Online booking system coming soon!</p>
    </div>
  );
};

export default Booking;
