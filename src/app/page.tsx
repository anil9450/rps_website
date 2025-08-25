import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import Header from "../../components/Header";
import Marquee from "../../components/Marq";
import ImageSlider from "../../components/Slider";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between p-4 bg-cyan-100">
        <div className="flex space-x-2">
          <Link
            href="#"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-600"
          >
            <FaWhatsapp />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600"
          >
            <FaFacebookSquare />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-600"
          >
            <FaYoutube />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-pink-500"
          >
            <FaInstagram />
          </Link>
        </div>

        <div className="space-x-2">
          <Link
            href=""
            className="border border-red-100 rounded-full p-2 bg-white font-bold"
          >
            Student's Login
          </Link>
          <Link
            href=""
            className="border border-red-100 rounded-full p-2 bg-white font-bold"
          >
            College Login
          </Link>
        </div>
      </div>

      <div className="flex justify-between items-center p-4 bg-gray-100">
        <h1 className="text-xl font-bold">Logo</h1>

        <div className="flex items-center space-x-2">
          <MdEmail className="text-xl" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Email Us</span>
            <span className="text-sm">kanil9128@gmail.com</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <IoIosCall className="text-xl" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Phone Number</span>
            <span className="text-sm">+91 9839451865</span>
          </div>
        </div>
      </div>

      <Header />
      <ImageSlider />
      <Marquee
        text="🇮🇳 Reshami Public School wishes everyone a very Happy Independence Day! Jai Hind! "
        duration={12}
      />
    </div>
  );
}
