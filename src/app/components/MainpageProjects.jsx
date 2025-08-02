// import Image from "next/image";
// import pj1 from "../images/projects/pj1/1.png"
// import pj2 from "../images/projects/pj2/1.jpg"
// import pj3 from "../images/projects/pj3/1.jpg"
// import pj4 from "../images/projects/pj4/1.jpg"
// import Link from "next/link";
// import pj14 from "../images/projects/pj1/44.jpg"


// const projects = [
//     {
//         id: 1,
//         name: "Modern Harmony Residence",
//         image: pj1,
//         description: "Modern Harmony Residence is a 4-bedroom, 2-bathroom, and spacious residence located in the heart of downtown Los Angeles. The residence is designed with a contemporary look and feel, featuring a stunning glass facade and airy balcony. The residence is also equipped with a full kitchen and bathroom, as well as a large living room and dining room. The residence is also home to a large outdoor patio and a spacious deck that features a garden and a beautiful view of the city.",
//     },
//     {
//         id: 2,
//         name: "Galactic Dining ",
//         image: pj2,
//         description: "A cutting-edge restaurant interior featuring bold red accents and custom circular lighting fixtures. The design blends modern aesthetics with functional seating arrangements to create an inviting and memorable dining atmosphere.",
//     },
//     {
//         id: 3,
//         name: "Book Nook  ",
//         image: pj3,
//         description: "A Vibrant Bookstore Retreat A lively bookstore interior characterized by bright yellow walls and geometric patterned flooring. The layout maximizes book display and customer flow, with ample lighting provided by a striking circular overhead fixture, creating an engaging and comfortable space for book lovers.",
//     },
//     {
//         id: 4,
//         name: "A Progressive Workspace  ",
//         image: pj4,
//         description: "The project culminates in an innovative office that embodies an advanced workspace atmosphere with versatility and visual impact, making it a perfect fit for a modern tech company.",
//     },

// ]

// const MainpageProjects = () => {
//     return ( <>
//     <div className="w-full max-sm:w-full max-lg:w-8/12 text-center text-gray-700 mt-6 bg-gray-100 p-8">
//           <h1 className="text-3xl font-bold text-beige-600 mt-8 underline">Showcase of Elegance</h1>
        
//             {
//                 projects.map((proj)=> (

//                     <div>

//                         <div key={proj.id} className="flex flex-row-reverse h-full text-left  max-lg:flex-col gap-6 w-full justify-between my-6 ">
//                             <div className=" w-1/2  max-lg:w-full">
//                                 <Image src={proj.image}  className=" w-full " alt={proj.name} />
//                             </div>
//                             <div className="w-1/2 max-lg:w-full gap-0 flex flex-col justify-evenly ">
//                                 <h1 className=" mb-4 text-3xl text-left font-bold text-beige-600">{proj.name}</h1>
//                                 <p className="text-justify w-11/12">{proj.description}</p>
//                                 <button className="bg-green-500 w-6/12 mx-auto hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-8"><Link href={`projects/${proj.id}`}>View Project</Link></button>
//                             </div>
//                         </div>
//                             <hr />
//                     </div>
//                 ))
//             }

           
          


        
//     </div>
//     </>
//      );
// }
 
// export default MainpageProjects;




import Image from "next/image";
import pj1 from "../images/projects/pj1/1.png";
import pj2 from "../images/projects/pj2/1.jpg";
import pj3 from "../images/projects/pj3/1.jpg";
import pj4 from "../images/projects/pj4/1.jpg";
import Link from "next/link";

const projects = [
    {
        id: 1,
        name: "Modern Harmony Residence",
        image: pj1,
        description: "Modern Harmony Residence is a 4-bedroom, 2-bathroom, and spacious residence located in the heart of downtown Los Angeles. The residence is designed with a contemporary look and feel, featuring a stunning glass facade and airy balcony. The residence is also equipped with a full kitchen and bathroom, as well as a large living room and dining room. The residence is also home to a large outdoor patio and a spacious deck that features a garden and a beautiful view of the city.",
    },
    {
        id: 2,
        name: "Galactic Dining",
        image: pj2,
        description: "A cutting-edge restaurant interior featuring bold red accents and custom circular lighting fixtures. The design blends modern aesthetics with functional seating arrangements to create an inviting and memorable dining atmosphere.",
    },
    {
        id: 3,
        name: "Book Nook",
        image: pj3,
        description: "A Lively Bookstore Retreat A lively bookstore interior characterized by bright yellow walls and geometric patterned flooring. The layout maximizes book display and customer flow, with ample lighting provided by a striking circular overhead fixture, creating an engaging and comfortable space for book lovers.",
    },
    {
        id: 4,
        name: "A Progressive Workspace",
        image: pj4,
        description: "The project culminates in an innovative office that embodies an advanced workspace atmosphere with versatility and visual impact, making it a perfect fit for a modern tech company.",
    },
];

const MainpageProjects = () => {
    return (
        <div className="w-full text-center text-gray-700 mt-12 bg-gray-50 p-8 shadow-lg max-md:shadow-none">
            <h1 className="text-4xl font-light text-beige-600 mt-8 mb-12 underline underline-offset-8">Showcase of Elegance</h1>
            {
                projects.map((proj, index) => (
                    <div key={proj.id} className={`my-12 transition-all duration-500 transform hover:scale-[1.02] ${index % 2 === 0 ? "slide-in-right" : "slide-in-left"}`}>
                        <div className="flex max-lg:flex-col gap-6 w-full items-center justify-between">
                            <div className={`w-1/2 max-lg:w-full ${index % 2 === 0 ? "order-1" : "order-2"}`}>
                                <Image
                                    src={proj.image}
                                    className="w-full h-auto object-cover rounded-md shadow-xl"
                                    alt={proj.name}
                                />
                            </div>
                            <div className={`w-1/2 max-lg:w-full flex flex-col justify-center text-left ${index % 2 === 0 ? "order-2" : "order-1"}`}>
                                <h2 className="mb-4 text-3xl font-light text-beige-600">{proj.name}</h2>
                                <p className="text-justify w-full leading-relaxed">{proj.description}</p>
                                <div className="mt-8 w-full ">
                                    <Link href={`projects/${proj.id}`} passHref>
                                        <button className="bg-beige-600 w-1/2 max-sm:w-8/12 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-beige-700 transition-all duration-300 transform hover:scale-105">
                                            View Project
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default MainpageProjects;