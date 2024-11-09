import bg from "../images/image.png"
import Image from "next/image";
import Link from "next/link";
import MainpageProjects from "./MainpageProjects";
const MainPage = () => {
    return ( 
    <div>
        <div className="w-8/12 mx-auto max-lg:w-full flex flex-col items-center text-gray-800">

            <Image   src={bg} alt="main page photo"  />
            <div className="text-center">
                <h2 className="font-sans text-center mt-4 px-8 text-3xl max-sm:px-3 max-sm:text-2xl font-bold text-beige-600">Visionary Interiors: Where Imagination Meets Elegance to Redefine Your Living and Working Spaces  </h2>
                <button className="bg-beige-500 hover:bg-beige-600 text-white py-2 px-4 rounded-md mt-8"><Link href={"/services"}>See our Services!</Link></button>
            </div>

             <MainpageProjects />
        </div>
    </div> );
}
 
export default MainPage;