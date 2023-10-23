import Breadcrumb from "../breadcrumb/Breadcrumb";
import { BsFillMapFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaAddressBook, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import { useFetch } from "../../hook/usefetch";
const Contact = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [datastatus, setDatastatus] = useState(false);
  const url =
    "https://ecommerce-project-d04f8-default-rtdb.firebaseio.com/contact.json";

  const { data, error, isPending } = useFetch(url);
  const validate = (e) => {
    e.preventDefault();
    console.log(formdata);
    fetch(url, {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => (data.name ? setDatastatus(true) : ""));
  };
  const handler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormdata((prevformdata) => ({ ...prevformdata, [name]: value }));
  };

  return (
    <section>
      <Breadcrumb paragraph="GET 24/7 SUPPORT" heading="Contact us" />
      <div className="md:mx-16 mx-10 flex lg:flex-row flex-col space-y-4 lg:mx-20 mt-32 mb-32">
        <div className="lg:w-[60%]">
          <div>
            <div>
              <h2 className="text-2xl font-bold mb-5 ">
                Have you any question?
              </h2>
              <p>
                If you have any question then you can ask that question to us
                below. Please submit your question and fill up below form we
                will reply you on gmail as soon as we can.
              </p>
            </div>
            <div className="mt-6">
              <form action="" onSubmit={validate}>
                <div className="w-full mb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="h-12 w-full mb-5 md:mb-0 md:w-[48%] mr-4 p-4 "
                    onChange={handler}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="h-12 w-full md:w-[48%] p-4"
                    name="email"
                    onChange={handler}
                  />
                </div>
                <div className="w-full mb-4">
                  <input
                    type="number"
                    placeholder="Phone"
                    className="h-12 w-full md:w-[48%] mr-4 p-4 mb-5 md:mb-0"
                    name="phone"
                    onChange={handler}
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="h-12 w-full md:w-[48%] p-4"
                    name="subject"
                    onChange={handler}
                  />
                </div>
                <textarea
                  className="border border-black w-full p-4 h-32 resize-none"
                  placeholder="Message"
                  name="message"
                  onChange={handler}
                ></textarea>
                <button className="buttons">Submit</button>
              </form>
              {datastatus && (
                <h2 className="text-lg text-green-700 mt-2">
                  Your data is submitted successfully.
                </h2>
              )}
            </div>
          </div>
        </div>
        <div className=" lg:w-[40%] md:ml-10 sm:ml-6 ml-3 lg:ml-16">
          <div className="mb-5 mt-10">
            <div className="flex gap-2 mb-3">
              <BsFillMapFill className="text-2xl fill-[#F28123]" />
              <p className="text-xl font-bold">Shop Address</p>
            </div>
            <div className="ml-8">
              <p>
                2-jasraj nagar,behind radhe hotel
                <br /> Rajkot, Gujarat.
                <br />
                India
              </p>
            </div>
          </div>
          <div className="mb-5">
            <div className="flex gap-2 mb-3">
              <AiOutlineClockCircle className="text-2xl fill-[#F28123]" />
              <p className="text-xl font-bold">Shop Hours</p>
            </div>
            <div className="ml-8">
              <p>
                MON - FRIDAY: 8 to 9 PM
                <br /> SAT - SUN: 10 to 8 PM
              </p>
            </div>
          </div>
          <div>
            <div className="flex gap-2 mb-3">
              <FaAddressBook className="text-2xl fill-[#F28123]" />

              <p className="text-xl font-bold">Contact</p>
            </div>
            <div className="ml-8">
              <p>
                Phone: +91 79908 92778
                <br /> Email: support@mobileplanet.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 mt-10 py-20 bg-[#162133] flex justify-center items-center text-white">
        <p className="flex text-xl  sm:text-3xl items-center">
          <FaMapMarkerAlt className="fill-[#F28123]" /> Find our location
        </p>
      </div>
      <div className=" embed-responsive embed-responsive-21by9">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1846.2534419614776!2d70.78406620092875!3d22.25878099837955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDE1JzMxLjYiTiA3MMKwNDcnMDUuMyJF!5e0!3m2!1sen!2sin!4v1689948682744!5m2!1sen!2sin"
          width="100%"
          height="450"
          frameBorder="0"
          allowFullScreen=""
          className="embed-responsive-item"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
