
const Diabetes = () => {
    const pic =  {
        url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
      }
  
    return (
      <section className="px-6 mb-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center">
              <div className="relative">
                <img
                  src={pic.url}
                  alt=""
                  className="w-full rounded-lg shadow-lg"
                />
                
              </div>
            </div>
            <div>
              <h1 className="text-5xl font-bold">HEALTHY CONSCIOUS LIVING</h1>
              <p className=" mt-4 text-lg">
              Healthy Conscious Living includes conscious business practices to ensure our impact on our world and communities is a positive one. At the foundation of ORGANIC INDIA’s products, company, and sourcing is regenerative agriculture that not only sustains but replenishes the earth; fair trade practices that support and honour farmer partners with equitable wages, health care, and ongoing organic agricultural training; and a LEED Platinum certified production facility that is a marvel of top-tier sustainable design, construction, and operations. This all culminates in the creation of Organic, Non-GMO herbal teas and supplements that support the health of the population, the vibrancy of the planet, and the livelihood of communities in India.</p>
              
                <button className="bg-Lime text-white w-32 h-12 text-lg rounded-lg cursor-pointer">Shop now</button>
              
            </div>
            
          </div>
        </div>
      </section>
    );
  };
  
  export default Diabetes;
  