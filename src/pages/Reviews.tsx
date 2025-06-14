
const reviews = [
  {
    name: "Sarah L.",
    quote: "Absolutely mind-blowing chicken. The spicy one has a real kick but is so flavorful. Will be back every week!",
  },
  {
    name: "Tom H.",
    quote: "Came for a pint, stayed for the food. Best pub kitchen takeover I've ever experienced. 10/10.",
  },
  {
    name: "Chloe D.",
    quote: "The vibes are immaculate and the food is even better. That watermelon salad is a game-changer.",
  },
];

const Reviews = () => {
  return (
    <div className="container mx-auto px-6 py-20 md:py-32">
      <h1 className="text-5xl md:text-7xl text-center">What People Say</h1>
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {reviews.map(review => (
          <div key={review.name} className="bg-brand-pink/10 border border-brand-pink/20 p-8 rounded-lg">
            <p className="text-lg text-brand-lightBlue italic">"{review.quote}"</p>
            <p className="mt-4 font-bold text-brand-green text-right">- {review.name}</p>
          </div>
        ))}
      </div>
      <p className="mt-16 text-center text-xl text-brand-lightBlue">Review submission form coming soon!</p>
    </div>
  );
};

export default Reviews;
