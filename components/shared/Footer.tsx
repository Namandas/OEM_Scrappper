const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm">&copy; 2024 Vulnerability Alerts. All rights reserved.</p>
          <ul className="flex space-x-6 text-sm">
            <li>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
            <li>
              <a href="#" className="hover:underline">About Us</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
  