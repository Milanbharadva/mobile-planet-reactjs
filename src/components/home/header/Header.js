import { FaSyncAlt, FaTruck } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
const Header = () => {
  return (
    <div className=" mt-16 bg-[#f5f5f5] flex md:flex-row flex-col ml-5 sm:ml-10 space-y-3 md:ml-0 md:space-y-0 justify-around py-20 mb-16">
      <div className="flex gap-4 items-center ">
        <div className="border-2 p-4 rounded-[50%] border-dotted border-[#F28123]">
          <FaTruck className="fill-[#F28123] text-3xl" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Free Shipping</h3>
          <p>When order over 5,00,000₹</p>
        </div>
      </div>
      <div className="flex gap-4 items-center ">
        <div className="border-2 p-4 rounded-[50%] border-dotted border-[#F28123]">
          <BsFillTelephoneFill className="fill-[#F28123] text-3xl" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">24/7 Support</h3>
          <p>Get support all day</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="border-2 p-4 rounded-[50%] border-dotted border-[#F28123]">
          <FaSyncAlt className="fill-[#F28123] text-3xl" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Refund</h3>
          <p>Get refund within 3 days</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
