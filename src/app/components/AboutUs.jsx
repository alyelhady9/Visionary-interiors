import Link from "next/link";

const AboutUs = () => {
    return ( 
        <div className="w-full flex justify-center font-sans text-gray-800">

            <div className="w-8/12 max-md:10/12 max-sm:w-full px-6">
                <div className="my-4">

                    <h2 className="text-2xl text-beige-500 ">
                        Welcome to Visionary Interiors

                    </h2>
                    <p className="mt-1 text-justify">

                        At Visionary Interiors, we believe that every space has a story to tell. Our mission is to transform your environment into a masterpiece that reflects your unique style and personality. Led by the talented Mohamed Al-Farouq, our team is dedicated to delivering exceptional interior design solutions that blend creativity, functionality, and elegance.
                    </p>

                </div>
                <div className="my-4" >
                    <h2 className="text-2xl text-beige-500 ">

                    Meet Mohamed Farouq
                    </h2>
                    <p className="mt-1 text-justify">

                    Mohamed Farouq, the visionary behind our designs, is a distinguished interior designer with a passion for creating breathtaking spaces. Mohamed's journey began at the prestigious Faculty of Fine Arts, Decor Department, Alexandria University, where he honed his skills and developed a keen eye for detail.
                    </p>
                </div>

                <div className="my-4">
                    <h2 className="text-2xl text-beige-500 ">

                    
                    Our Success Story
                    </h2>
                            <p className="mt-1 text-justify">

                                        From humble beginnings to becoming a renowned name in the interior design industry, Mohamed's story is one of dedication, innovation, and excellence. After graduating with honors, Mohamed embarked on a journey to redefine interior spaces. His unique approach combines modern aesthetics with timeless elegance, making every project a true work of art.                                    Mohamed's designs have graced numerous homes, offices, and commercial spaces, each project showcasing his ability to blend form and function seamlessly. His commitment to quality and client satisfaction has earned him a loyal clientele and numerous accolades.

                                        At Visionary Interiors, we are more than just designers; we are storytellers. We take pride in understanding our clients' visions and bringing them to life with creativity and precision. Whether you're looking to revamp your home or create an inspiring workspace, we are here to turn your dreams into reality.
                            </p>
                </div>

                <div className="my-4">
                    <h2 className="text-2xl text-beige-500 ">


                        Our Design Philosophy
                    </h2>
                    <p className="mt-1 text-justify">


                At the heart of Visionary Interiors lies a design philosophy that prioritizes harmony, innovation, and sustainability. We believe that great design is not just about aesthetics but also about creating spaces that enhance the quality of life. Our approach is rooted in:
                    </p>
                    
                    <ul>
                        <li className="my-3">
                           <h3 className="text-xl text-beige-500">
                           Harmony:
                            </h3>  
                            <p>
                            We strive to create balanced and cohesive environments where every element works together seamlessly.

                            </p>
                        </li>
                        <li className="my-3">
                           <h3 className="text-xl text-beige-500">
                           Innovation:
                            </h3> 
                            <p>

                             We embrace cutting-edge design trends and technologies to deliver fresh, modern solutions that stand the test of time.
                            </p>
                        </li>
                        <li className="my-3">
                           <h3 className="text-xl text-beige-500">
                           Sustainability:
                            </h3> 
                            <p>

                             We are committed to using eco-friendly materials and practices to create spaces that are not only beautiful but also kind to the planet.
                            </p>

                        </li>
                    </ul>
                </div>

                <div className="my-4">
                    <h2 className="text-2xl text-beige-500 ">

                    Join Us on This Journey
                    </h2>
                    <p>

                        Explore our portfolio and discover the magic of Visionary Interiors. Let us help you create a space that is not only beautiful but also a true reflection of who you are. Together, we can transform your vision into a stunning reality.

                    </p>

                    <button className="bg-beige-500 text-white py-4 px-4 rounded-lg mt-4 ml-[50%] -translate-x-1/2 hover:bg-beige-600">
                        <Link href="/contact">

                                 Contact Us Now! 
                        </Link>
                    </button>
                </div>

            </div>
        </div>
     );
}
 
export default AboutUs;