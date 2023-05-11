import logo from "../../../assets/images/more/logo1.png";
import { SiFacebook } from "react-icons/si";
import { BsFillTelephoneFill, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
const Footer = () => {
  return (
    <div
      className="mt-28 pt-10"
      style={{ backgroundImage: "url(https://i.postimg.cc/B6jZpN2x/13.jpg)" }}
    >
      <div className="my-container flex items-center gap-32">
        {/* about the company */}
        <div className="w-4/6">
          <div className="mb-7">
            <img className="w-16 h-20 mb-5" src={logo} alt="" />
            <h2 className="mb-7 text-[#331A15] font-[Rancho] text-4xl ">
              Espresso Emporium
            </h2>
            <p className="text-rose-950">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
          </div>

          {/* social medias */}
          <div className="text-[#331A15] flex gap-4 items-center mb-7">
            <SiFacebook className="text-2xl" />
            <FaTwitter className="text-2xl" />
            <BsInstagram className="text-2xl" />
            <BsLinkedin className="text-2xl" />
          </div>

          {/* Get in Touch */}
          <div className="text-[#331A15]">
            <h2 className="mb-7 text-[#331A15] font-[Rancho] text-4xl ">
              Get in Touch
            </h2>
            <div className="flex gap-4 mb-3 items-center">
              <BsFillTelephoneFill />
              <p>+88 01533 333 333</p>
            </div>
            <div className="flex gap-4 mb-3 items-center">
              <MdEmail />
              <p>info@gmail.com</p>
            </div>
            <div className="flex gap-4 mb-3 items-center">
              <MdLocationOn />
              <p>72, Wall street, King Road, Dhaka</p>
            </div>
          </div>
        </div>
        {/* Connect with Us */}
        <div className="w-2/6">
          <h2 className="mb-7 text-[#331A15] font-[Rancho] text-4xl ">
            Connect with Us
          </h2>
          <form>
            <div className="form-control mb-4">
              <input
                type="text"
                required
                name="name"
                placeholder="Name"
                className="hover:drop-shadow-2xl  p-4"
              />
            </div>
            <div className="form-control mb-4">
              <input
                type="email"
                required
                name="Email"
                placeholder="Email"
                className=" hover:drop-shadow-2xl p-4"
              />
            </div>

            <div className="form-control mb-4">
              <textarea
                required
                name="message"
                placeholder="Message"
                className="hover:drop-shadow-2xl p-4"
              ></textarea>
            </div>

            <div className="form-control mt-8">
              <input
                type="submit"
                value="Send Message"
                className="input input-bordered hover:drop-shadow-2xl rounded-full hover:bg-transparent border-[#331A15] bg-[#D2B48C] font-[Rancho] hover:border-2 text-xl font-medium"
              />
            </div>
          </form>
        </div>
      </div>

      <div
        style={{ backgroundImage: "url(https://i.postimg.cc/595TGLpv/24.jpg)" }}
        className="text-white font-[Rancho] text-lg  text-center"
      >
        <h2 className="py-3">
          Copyright Espresso Emporium ! All Rights Reserved
        </h2>
      </div>
    </div>
  );
};

export default Footer;
