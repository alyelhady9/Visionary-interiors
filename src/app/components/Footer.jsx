// import Link from 'next/link';

// const Footer = () => {
//   return (
//     <footer className=" bg-white text-gray-700  w-full ">
//     <div className='bg-beige-600 w-8/12 max-lg:w-full mx-auto p-4 '> 
// {/* 
//         <div className="container bg-beige-600 mx-auto flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-4 md:mb-0">
//             <h2 className="text-2xl font-bold">Visionary Interiors</h2>
//             <p className="mt-2">Creating spaces that inspire and delight.</p>
//             </div>
           
//         </div> */}
//         <div className="container mx-auto text-center">
//             <p>© {new Date().getFullYear()} Visionary Interiors. All rights reserved.</p>
//         </div>
//     </div>
//     </footer>
//   );
// };

// export default Footer;


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