
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { IoMdPhonePortrait } from 'react-icons/io';
const Footer = () => {
 
    return (
    <footer className="bg-primary text-white py-1 px-1 sm:px-6 lg:px-8 fixed bottom-0 left-0 w-full hidden">
      <div className="flex justify-center items-center">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mr-4 flex items-center">
          <FaFacebook className="text-white text-xs mr-2" />
          <span>Salome Tsomaia</span>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mr-4 flex items-center">
          <FaTwitter className="text-white text-xs mr-2" />
          <span>Salome Tsomaia</span>
        </a>
        <a href='+99' className="mr-4 flex items-center">
          <IoMdPhonePortrait className="text-white text-xs mr-2" />
          <span>+995555555</span>
        </a>
      </div>
      <div className="text-center mt-4">
        &copy; 2023 Your Company. All rights reserved.
      </div>
    </footer>
    )
}
export default Footer