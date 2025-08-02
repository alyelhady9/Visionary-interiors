const Footer = () => {
  return (
      <footer className="w-full text-gray-700 font-serif">
          <div className='bg-beige-600 w-8/12 max-lg:w-full mx-auto p-4 text-center text-white'>
              <p>© {new Date().getFullYear()} Visionary Interiors. All rights reserved.</p>
          </div>
      </footer>
  );
};

export default Footer;