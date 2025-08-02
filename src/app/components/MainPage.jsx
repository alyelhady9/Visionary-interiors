
import bg from "../images/image.png";
import Image from "next/image";
import Link from "next/link";
import MainpageProjects from "./MainpageProjects";

const MainPage = () => {
    return (
        <div className="font-serif text-gray-800">
            <div className="w-8/12 mx-auto max-lg:w-full flex flex-col items-center py-12">
                <div className="relative w-full h-auto overflow-hidden shadow-2xl">
                    <Image
                        src={bg}
                        alt="main page photo"
                        className="w-full h-auto object-cover transition-transform duration-700 transform hover:scale-105"
                        priority
                    />
                </div>
                <div className="text-center my-12 px-4">
                    <h1 className="font-light text-5xl max-sm:text-3xl text-beige-700">
                        Visionary Interiors
                    </h1>
                    <h2 className="font-light text-3xl max-sm:text-2xl mt-4 px-8 text-beige-600">
                        Where Imagination Meets Elegance to Redefine Your Living and Working Spaces
                    </h2>
                    <Link href={"/services"} passHref>
                        <button className="bg-beige-600 hover:bg-beige-700 text-white font-medium py-3 px-8 rounded-lg mt-8 transition-all duration-300 transform hover:scale-105">
                            See Our Services!
                        </button>
                    </Link>
                </div>
                <MainpageProjects />
            </div>
        </div>
    );
};

export default MainPage;