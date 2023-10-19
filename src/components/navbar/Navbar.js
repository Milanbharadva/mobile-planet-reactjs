import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
  const handleclick = () => {
    setClick(!click);
  };

  const [click, setClick] = useState(false);
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0  text-white transition">
        <ul className="text-center text-xl p-10 mt-5  bg-[#0c1923]">
          <NavLink
            spy={true}
            smooth={true}
            to="/"
            onClick={() => {
              setClick(false);
            }}
          >
            <li className="my-4 py-4   hover:rounded">HOME</li>
          </NavLink>
          <NavLink
            spy={true}
            smooth={true}
            to="/about"
            onClick={() => {
              setClick(false);
            }}
          >
            <li className="my-4 py-4  [#F28123] hover:rounded">ABOUT</li>
          </NavLink>
          <NavLink
            spy={true}
            smooth={true}
            to="/contact"
            onClick={() => {
              setClick(false);
            }}
          >
            <li className="my-4 py-4   hover:rounded">CONTACT</li>
          </NavLink>
          <NavLink
            spy={true}
            smooth={true}
            to="/shop"
            onClick={() => {
              setClick(false);
            }}
          >
            <li className="my-4 py-4   hover:rounded">SHOP</li>
          </NavLink>
          <NavLink
            spy={true}
            smooth={true}
            to="/product"
            onClick={() => {
              setClick(false);
            }}
          >
            <li className="my-4 py-4   hover:rounded">PRODUCT</li>
          </NavLink>
          <NavLink
            spy={true}
            smooth={true}
            to="/signin"
            onClick={() => {
              setClick(false);
            }}
          >
            <li className="my-4 py-4   hover:rounded">SIGN IN</li>
          </NavLink>
          <NavLink
            spy={true}
            smooth={true}
            to="/cart"
            className="inline-block"
            onClick={() => {
              setClick(false);
            }}
          >
            <li className="my-4 py-4  hover:rounded">
              <AiOutlineShoppingCart className="text-2xl" />
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );
  return (
    <nav className="flex z-10 mb-2  sticky top-0 pr-10 bg-[#051922] text-white">
      <div className="h-10vh flex z-50  lg:py-5 px-10 py-4 flex-1">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">
            <img
              src={`${window.location.origin}/assets/logo.png`}
              width="150px "
              height="70px"
              alt=""
            />
          </span>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[17px] ">
              <NavLink spy={true} smooth={true} to="/">
                <li className="hover:text-[#F28123] transition  cursor-pointer">
                  HOME
                </li>
              </NavLink>
              <NavLink spy={true} smooth={true} to="/about">
                <li className="hover:text-[#F28123] transition [#F28123] cursor-pointer">
                  ABOUT
                </li>
              </NavLink>
              <NavLink spy={true} smooth={true} to="/contact">
                <li className="hover:text-[#F28123] transition [#F28123] cursor-pointer">
                  CONTACT
                </li>
              </NavLink>
              <NavLink spy={true} smooth={true} to="/shop">
                <li className="hover:text-[#F28123] transition [#F28123] cursor-pointer">
                  SHOP
                </li>
              </NavLink>
              <NavLink spy={true} smooth={true} to="/product">
                <li className="hover:text-[#F28123] transition [#F28123] cursor-pointer">
                  PRODUCT
                </li>
              </NavLink>
              <NavLink spy={true} smooth={true} to="/signin">
                <li className="hover:text-[#F28123] transition [#F28123] cursor-pointer">
                  SIGN IN
                </li>
              </NavLink>
              <NavLink spy={true} smooth={true} to="/cart">
                <li>
                  <AiOutlineShoppingCart className="text-2xl hover:fill-[#F28123]" />
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
      </div>
      <button className="block md:hidden transition p-2 " onClick={handleclick}>
        {click ? (
          <FaTimes className="fill-[#F28123]" />
        ) : (
          <AiOutlineMenu className="fill-[#F28123]" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
