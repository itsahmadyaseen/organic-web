
const Diabetes = () => {
  const pic =  {
    url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
  }

  return (
    <section className="px-6 py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold">Get Set To Beat Diabetes!</h1>
            <p className=" mt-4 text-lg">
            At ORGANIC INDIA we celebrate the healing power of Mother Nature to nourish and restore us to our best health. Explore our curated range of certified organic, whole herb supplements, teas, and infusions to help you control your blood sugar the natural way. Because let’s face it, nature knows best!
            </p>
            
              <button className="bg-Lime text-white w-32 h-12 text-lg rounded-lg cursor-pointer">Shop now</button>
            
          </div>
          <div className="text-center">
            <div className="relative">
              <img
                src={pic.url}
                alt=""
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-opacity-40 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diabetes;
