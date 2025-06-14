import WaveDivider from "@/components/WaveDivider";

const menuSections = [
  {
    category: "Sides",
    items: [
      { name: "Skinny Fries", description: "Cajun/seaweed crack/salted", price: "5.00" },
      { name: "Seaweed Crack Tenders", description: "Moist Chicken tenders sparkled with are house seaweed,pepper,salt, dry mix chose a house sauce", price: "7.50" },
      { name: "Prawn Tempura (v)", description: "Spring onions,pickled chilli,Nahim Jim dip", price: "6.50" },
      { name: "Kung pao Popping chicken", description: "Sweet,sticky sauce,sesame,spring onions,pickled chilli", price: "6.50" },
      { name: "Smashed cucumber (vg)", description: "Cucumber mixed with a tangy house sauce.", price: "5" },
      { name: "Watermelon salad (v)", description: "A refreshing tangy Watermelon,pickled chilli,spring onions,Nahim jim,roasted nuts", price: "5" },
    ],
  },
  {
    category: "Smash Burgers & Chips",
    items: [
      { name: "Royale with cheese", description: "100% Irish beef patties,cheese,onions,tomato lettuce,burger sauce,onion rings", price: "13.50" },
      { name: "All Eyes On Beef", description: "100% Irish beef patties,ketchup, Mustard,pickle,cheese", price: "12.00" },
      { name: "Vegan Burger", description: "Vegan style chicken patty,green slaw,ginger miso mayo,seaweed crack,kimchi,gochujang mayo,", price: "12.50" },
      { name: "Bang Bang Chicken", description: "Crispy succulent chicken thigh, Asian slaw,lettuce,kewpie mayo,cheese", price: "10.00" },
      { name: "The Classic", description: "Crispy Chicken thigh creamy cheddar cheese on crunchy lettuce Kewpie mayo,tomato,cheese", price: "9.00" },
    ],
  },
  {
      category: "Wings",
      items: [
        { name: "Wings", description: "Size 6/9/12", price: "8/£10/£12" },
        { name: "Naked wings tossed in are house seaweed crack", description: "", price: "" },
        { name: "Hot Wings tossed in are house hot sauce", description: "", price: "" },
        { name: "Kung-Pao Wings", description: "Tossed in kung pao sauce sprinkled with spring onions,pickled chillies,dried chilli,peanuts", price: "" },
        { name: "Korean wings", description: "Tossed in seaweed crack layered with korean sauce,sriracha sour cream,chives", price: "" },
      ]
  },
  {
    category: "Kids meals",
    items: [
      { name: "Any wings x6 or burger with chips", description: "", price: "6.50" },
    ]
  },
  {
    category: "Specials",
    items: [
      { name: "Specials available please ask a team member what we have on.", description: "", price: "" },
    ]
  }
];

const Menu = () => {
  return (
    <div className="w-full">
      <div className="bg-brand-pink text-brand-background pt-32 pb-40 relative">
          <div className="absolute top-0 left-0 w-full">
              <WaveDivider color="#0A192F" direction="up" />
          </div>
          <div className="container mx-auto px-6 text-center">
              <h1 className="text-6xl md:text-8xl font-black text-brand-background">THE MENU</h1>
          </div>
           <div className="absolute bottom-0 left-0 w-full">
              <WaveDivider color="#0A192F" />
          </div>
      </div>
      
      <div className="py-20">
          <div className="container mx-auto px-6">
              {menuSections.map(section => (
                  <div key={section.category} className="mb-16">
                      <h2 className="text-4xl text-brand-green mb-8 tracking-widest">{section.category}</h2>
                      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                          {section.items.map(item => (
                              <div key={item.name}>
                                  <div className="flex justify-between items-baseline">
                                      <h3 className="text-xl font-bold">{item.name}</h3>
                                      {item.price && <p className="text-xl font-bold text-brand-white">£{item.price}</p>}
                                  </div>
                                  <p className="text-brand-lightBlue">{item.description}</p>
                              </div>
                          ))}
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default Menu;
