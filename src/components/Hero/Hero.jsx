import {
  FaXTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-100 border-b-2">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="text-left pl-10">
          <p className="">Hello, I am Rakibul </p>
          <h1 className="text-7xl font-extrabold align-baseline">
            Web Developer,
            <br /> Founder, and <br />
            aspiring designer <span className="text-purple-600">.</span>
          </h1>
          <p className="py-6 font-semibold text-lg">
            Welcome to my blog! Explore Web developing, Entrepreneurship, design
            insight. Join me on this journey of knowledge, inspiration and
            growth. Lets learn and grow together!
          </p>
          <div className=" ">
            <button className="btn text-2xl mx-4 rounded-full">
              <FaXTwitter />
            </button>
            <button className="btn text-2xl rounded-full">
              <FaLinkedin />
            </button>
            <button className="btn text-2xl mx-4 rounded-full">
              <FaYoutube />
            </button>
            <button className="btn text-2xl rounded-full">
              <FaInstagram />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
