import React from "react";
import bgImage from "../assets/1.jpg";
import Image1 from "../assets/2.jpg";
import Image2 from "../assets/3.jpeg";
import Image3 from "../assets/3.jpg";
import Image5 from "../assets/5.jpeg";
import Image6 from "../assets/6.jpeg";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Home = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold max-w-3xl leading-tight">
          //Stylish Furniture For Every Space
        </h1>
        <div className="mt-6 flex flex-col md:flex-row gap-6 text-sm">
          <p className="flex-1 border-t pt-2">
            We Focus On Creating Durable, High-Quality Furniture That Stands The
            Test Of Time.
          </p>
          <p className="flex-1 border-t pt-2">
            Our Pieces Blend Modern Aesthetics With Functional Solutions To
            Enhance Any Space.
          </p>
          <p className="flex-1 border-t pt-2">
            We Use Eco-Friendly Materials To Create Sustainable, Responsible
            Furniture.
          </p>
        </div>
        <button className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition">
          Explore
        </button>
      </div>
      <div className="absolute top-6 left-6 text-white font-semibold text-lg">
        PARANORA
      </div>
      <nav className="absolute top-6 right-6 flex gap-6 text-white text-sm mr-[470px]">
        <a href="#" className="hover:underline">
          Latest Products
        </a>
        <a href="#" className="hover:underline">
          Our Collection
        </a>
        <a href="#" className="hover:underline">
          About Us
        </a>
        <a href="#" className="hover:underline">
          Customer Service
        </a>
        <a href="#" className="hover:underline">
          Trending
        </a>
      </nav>
      <div className="absolute top-6 right-24 text-white text-lg">02 | 03</div>

      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h4 className="text-sm text-gray-500 uppercase">Collection</h4>
          <h2 className="text-4xl font-bold mt-2">Our Product Collection</h2>
          <p className="text-gray-600 mt-4 max-w-2xl">
            Explore our curated collection of premium furniture, blending
            timeless design, exceptional quality, and modern comfort.
          </p>
          <button className="mt-6 px-6 py-3 border border-gray-800 text-gray-800 font-semibold rounded-full hover:bg-gray-800 hover:text-white transition">
            Explore
          </button>

          {/* Product Grid - Three Images in a Single Row */}
          <div className="mt-10 flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <img
                src={Image1}
                alt="Oakwood Dining Table"
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="mt-4 font-semibold text-lg">
                OAKWOOD DINING TABLE
              </h3>
              <p className="text-gray-500">£999 Regular | £922 Member</p>
            </div>
            <div className="flex-1">
              <img
                src={Image2}
                alt="Railton Bedside Table"
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="mt-4 font-semibold text-lg">
                RAILTON BEDSIDE TABLE
              </h3>
              <p className="text-gray-500">£846 Regular | £746 Member</p>
            </div>
            <div className="flex-1">
              <img
                src={Image3}
                alt="Pair of Molina Armless"
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="mt-4 font-semibold text-lg">
                PAIR OF MOLINA ARMLESS
              </h3>
              <p className="text-gray-500">£895 Regular | £846 Member</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Heading Section */}
          <h4 className="text-sm text-gray-500 uppercase">ABOUT US</h4>
          <h2 className="text-4xl font-bold mt-2 leading-tight">
            <span className="text-black">Crafting </span>
            <span className="text-gray-700">Quality Furniture </span>
            <span className="text-black">To Enhance</span>
            <br />
            <span className="text-black">Your Space With Timeless Design </span>
            <span className="text-gray-500 font-light">And</span>
            <br />
            <span className="text-gray-500 font-light">Lasting Comfort.</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl">
            We create high-quality furniture with timeless designs, offering
            lasting comfort and style to enhance any space.
          </p>

          {/* Image Grid */}
          <div className="relative mt-10 flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <img
                src={Image1}
                alt="Living Room"
                className="w-full rounded-lg h-[400px]"
              />
            </div>
            <div className="flex-1">
              <img
                src={Image2}
                alt="Marble Furniture"
                className="w-full rounded-lg h-[400px]"
              />
            </div>

            {/* Circular Button in Center */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 text-gray-800 font-semibold text-lg rounded-full w-32 h-32 flex items-center justify-center shadow-lg">
              About Us
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Text Section */}
          <div className="text-left">
            <h2 className="text-gray-800 text-2xl md:text-3xl font-semibold leading-snug">
              <span className="text-gray-700 font-bold">Commitment To </span>
              Quality, Innovation, Sustainability, And Customer Satisfaction In
              Every Piece.
            </h2>
            <h4 className="text-gray-900 font-medium text-lg mt-6">Value</h4>
            <p className="text-gray-600 mt-4">
              We focus on quality, innovation, and sustainability to create
              functional, stylish, and lasting furniture.
            </p>
            <p className="text-gray-800 font-medium mt-4">
              And we prioritize customer satisfaction, ensuring each piece meets
              high standards, with timeless designs that offer lasting quality
              and excellence.
            </p>

            {/* Bottom Navigation */}
            <div className="flex items-center gap-6 mt-8 text-gray-800 font-medium">
              <span>Our Vale</span>
              <button className="border rounded-full w-8 h-8 flex items-center justify-center">
                &lt;
              </button>
              <span className="text-gray-500">Mission</span>
              <button className="border rounded-full w-8 h-8 flex items-center justify-center">
                &gt;
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div>
            <img
              src={Image5}
              alt="Furniture"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <h4 className="text-gray-600 uppercase text-sm font-semibold">
            Key Metrics
          </h4>
          <h2 className="text-gray-900 text-3xl font-bold mt-2">
            In The Numbers
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Left - Image with Overlay Text */}
            <div className="relative">
              <img
                src={Image6}
                alt="Metrics"
                className="w-full h-auto rounded-lg h-[400px]"
              />
              <div className="absolute bottom-4 left-4 text-white p-4">
                <p className="text-lg font-semibold leading-snug">
                  Exceptional Quality And Design! Transformed My Space With
                  Style And Lasting Comfort.
                </p>
                <p className="text-sm mt-2">Brooklyn Simmons</p>
                <p className="text-xs opacity-80">On Twitter</p>
              </div>
            </div>

            {/* Right - Stats Section */}
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-6xl font-bold text-gray-900">$1B+</h3>
                  <p className="text-gray-600">
                    Invested in multifamily and mixed-use properties.
                  </p>
                </div>
                <hr className="border-gray-300" />
                <div>
                  <h3 className="text-6xl font-bold text-gray-900">$100M+</h3>
                  <p className="text-gray-600">
                    Capital repairs, improvements, and developments delivered.
                  </p>
                </div>
                <hr className="border-gray-300" />
                <div>
                  <h3 className="text-6xl font-bold text-gray-900">10,000</h3>
                  <p className="text-gray-600">Residents connected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-10 border-t">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Navigation */}
          <nav className="flex justify-center space-x-6 text-sm text-gray-700">
            <a href="#" className="hover:underline">
              Latest Products
            </a>
            <a href="#" className="hover:underline">
              Backpack
            </a>
            <a href="#" className="hover:underline">
              Bags
            </a>
            <a href="#" className="hover:underline">
              Accessories
            </a>
            <a href="#" className="hover:underline">
              Collection
            </a>
            <a href="#" className="hover:underline">
              Gifting
            </a>
            <a href="#" className="hover:underline">
              Service
            </a>
          </nav>

          {/* Divider */}
          <hr className="border-gray-300 my-6" />

          {/* Main Content */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Text Section */}
            <div className="text-center md:text-left">
              <p className="text-gray-700 text-lg">
                Paranora Offers{" "}
                <strong className="font-semibold underline">
                  Premium Furniture, Blending Timeless Design, Exceptional
                  Quality, And Unmatched
                </strong>{" "}
                Comfort For Every Space.
              </p>

              {/* Social Icons */}
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <FaInstagram className="text-gray-600 text-xl cursor-pointer" />
                <FaFacebookF className="text-gray-600 text-xl cursor-pointer" />
                <FaLinkedinIn className="text-gray-600 text-xl cursor-pointer" />
                <FaXTwitter className="text-gray-600 text-xl cursor-pointer" />
                <FaYoutube className="text-gray-600 text-xl cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-center md:text-left mt-10">
          <h2 className="text-8xl font-bold">PARANORA</h2>
            <p className="text-gray-600 text-sm mt-2">
              © Paranora. All Rights Reserved.
            </p>
            <div className="text-sm text-gray-600 mt-2">
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>{" "}
              |
              <a href="#" className="hover:underline ml-2">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
