import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a2240] text-white py-10 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold">Follow us on:</h2>
          <div className="flex space-x-4 mt-3">
            <FaFacebook className="text-xl cursor-pointer" />
            <FaTwitter className="text-xl cursor-pointer" />
            <FaLinkedin className="text-xl cursor-pointer" />
            <FaInstagram className="text-xl cursor-pointer" />
          </div>
        </div>

        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold">Company</h2>
          <ul className="mt-3 space-y-2">
            <li>About</li>
            <li>Careers at Kshitijsha</li>
            <li>Contact Us</li>
            <li>Learn Platform</li>
            <li>Alumni</li>
            <li>In the Media</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-lg font-semibold">Resources</h2>
          <ul className="mt-3 space-y-2">
            <li>Kshitijsha Live</li>
            <li>Blog</li>
            <li>Marketing Glossary</li>
          </ul>
        </div>

        {/* Marketing Courses */}
        <div>
          <h2 className="text-lg font-semibold">Marketing Launchpad</h2>
          <ul className="mt-3 space-y-2">
            <li>Digital Marketing Course - Full-time</li>
            <li>Digital Marketing Course - Part-time / Weekend</li>
            <li>Digital Marketing Course - On-demand</li>
          </ul>
          <h2 className="text-lg font-semibold mt-4">Content Writing & Social Media Launchpad</h2>
          <h2 className="text-lg font-semibold mt-4">PCP in Sales and Business Leadership</h2>
        </div>
      </div>

      {/* Popular Resources */}
      <div className="border-t border-gray-500 mt-8 pt-4">
        <h2 className="text-lg font-semibold">Popular Resources</h2>
        <p className="mt-3 text-sm text-gray-300">
          Which Digital Marketing Specialization for you? | Types of Digital Marketing Fields | Kshitijsha Screening Test | Why choose a part-time course? | CV Making Guide | Complete Guide to Cracking Your First Digital Marketing Job | How to Grow Your First Social Media Marketing Job?
        </p>
      </div>
    </footer>
  );
};

export default Footer;
