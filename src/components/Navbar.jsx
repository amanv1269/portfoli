import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6 relative">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="mx-2  text-white font-bold">Av</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
        <a
          href="https://www.linkedin.com/in/aman-verma-4a4372310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
        >
          {" "}
          <FaLinkedin />
        </a>
        <a href="https://github.com/amanv1269" target="_blank">
          <FaGithub />
        </a>
        <a href="#" target="_blank">
          <FaSquareXTwitter />
        </a>
        <a
          href="https://www.instagram.com/amanverma2620?igsh=MXZjMzYxZXN5ZmFwMg=="
          target="_blank"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
