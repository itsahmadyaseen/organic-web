
const Products = () => {


    const photo1 = {
        url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
      }
      const photo2 = {
        url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
      }


  return (
    <div className="container mx-auto" id="products">
      <div className="grid sm:grid-cols-3 place-items-center gap-6">
        <div className="pl-5">
            
        <img src={photo2.url} alt="" className="w-full h-[40vh] sm:h-full rounded-none bg-center bg-cover hover:scale-175" />

          <p className="text-lg text-center font-bold leading-7 mb-5">
            Lorem ipsum dolor sit
          </p>
          
        </div>
        <div className="pl-5">
            
        <img src={photo2.url} alt="" className="w-full h-[40vh] sm:h-full rounded-none bg-center bg-cover " />
          <p className="text-lg text-center font-bold leading-7 mb-5">
            Lorem ipsum dolor sit
          </p>
          
        </div>
        <div className="pl-5">
            
        <img src={photo2.url} alt="" className="w-full h-[40vh] sm:h-full rounded-none bg-center bg-cover " />
          <p className="text-lg text-center font-bold leading-7 mb-5">
            Lorem ipsum dolor sit
          </p>
          
        </div>

        
        {/* <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Become our customer
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis debitis dolorum facilis culpa, quidem voluptate suscipit
            deserunt. Magni neque at eos dolore dignissimos fugit repudiandae?
            Aut laudantium asperiores et!
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Shop now
          </button>
        </div> */}
        <div className="p-4 md:w-3/4">
          <img src={photo2} alt="" />
        </div>
      </div>

      <div className="grid sm:grid-cols-3 place-items-center gap-8">
        <div className="pl-5">
            
        <img src={photo1.url} alt="" className="w-full h-[40vh] sm:h-full rounded-none bg-center bg-cover transform transition-transform hover:scale-175" />

          <p className="text-lg text-center font-bold leading-7 mb-5">
            Lorem ipsum dolor sit
          </p>
          
        </div>
        <div className="pl-5 relative overflow-hidden ">
            
        <img src={photo1.url} alt="" className="w-full h-[40vh] sm:h-full rounded-none bg-center bg-cover " />
          <p className="text-lg text-center font-bold leading-7 mb-5">
            Lorem ipsum dolor sit
          </p>
          
        </div>
        <div className="pl-5">
            
        <img src={photo1.url} alt="" className="w-full h-[40vh] sm:h-full rounded-none bg-center bg-cover " />
          <p className="text-lg text-center font-bold leading-7  mb-5">
            Lorem ipsum dolor sit
          </p>
          
        </div>

        
        {/* <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Become our customer
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis debitis dolorum facilis culpa, quidem voluptate suscipit
            deserunt. Magni neque at eos dolore dignissimos fugit repudiandae?
            Aut laudantium asperiores et!
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Shop now
          </button>
        </div> */}
        <div className="p-4 md:w-3/4">
          <img src={photo2} alt="" />
        </div>
      </div>


      {/* <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Frequently <span className="text-Teal">Asked Questions</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto">
       
      </div> */}
    </div>
  );
};

export default Products;