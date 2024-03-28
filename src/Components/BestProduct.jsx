import {AiOutlineUser} from 'react-icons/ai'

const BestProduct = ({ image, title, sold, price }) => {
  return (
    
    <div className="p-2 gap-8shadow-lg min-w-[15rem] bg-white rounded-md">
      <img
        src={image}
        alt="img"
        className="w-full h-[40vh] sm:h-full rounded-none bg-center bg-cover"
      />
      <div className="text-lg mt-2 font-bold">{title}</div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-white p-1 rounded-full">
            <AiOutlineUser className="text-Lime" />
          </div>
          <div className="text-md font-bold">{sold} sold</div>
        </div>
        <div className="text-md font-bold">₹{price}</div>
      </div>
      <div className="items-center">
        <button className="w-1/3 h-8 text-md items-ceter rounded-lg border cursor-pointer bg-Lime text-white">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default BestProduct;
