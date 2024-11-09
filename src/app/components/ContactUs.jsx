import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const ContactUs = () => {
    return ( 
        <div className="w-full flex justify-center font-sans text-gray-800">
            <div className="w-8/12 max-md:10/12 max-sm:w-full px-6">

                <div>
                    <h2 className="text-2xl text-beige-500 ">

                         Get in Touch with Visionary Interiors
                    </h2>
                    <p className="text-justify">
                      We’d love to hear from you! Whether you have a question, need a consultation, or want to discuss your next project, our team at Visionary Interiors is here to help. Reach out to us through any of the following methods:

                    </p>

                </div> 
                <div>

                    <h2 className="text-2xl text-beige-500 mt-3"> 

                        Visit Us
                    </h2>

                    <div className="pb-6">
                        <div>
                            <h4 className="text-beige-700">
                                Address:
                            </h4>
                            
                            <p>  
                              1234 ada  Street, Alexandria, Egyp
                            </p> 
                        </div>
                        <div >
                             <h4 className="text-beige-700">
                            Office Hours:
                            </h4>
                            <p>
                             Monday to Friday, 9:00 AM - 6:00 PM

                            </p>

                        </div>
                    </div>
                        <hr  className="w-8/12 ml-[50%] -translate-x-1/2 p"/>
                    <div className="py-4">
                        <p className="pb-1 text-2xl text-beige-500"> 
                            Call Us!

                        </p>
                        <div>
                            <h4 className="text-beige-700">

                                Phone:
                            </h4>
                            <p>

                                0018912781
                            </p>

                        </div>
                    </div>
                    <hr className="w-8/12 ml-[50%] -translate-x-1/2 p"/>
                    <div className="py-4">
                        <div className="pb-1 text-2xl text-beige-500">

                            Email Us!
                        </div>
                        <div>
                        <h4 className="text-beige-700"> 
                            General Inquiries: 
                        </h4>
                            <p>

                            inquiries@visionaryinteriors.com
                            </p>
                            
                        </div>
                        <div className="mt-2">
                        <h4 className="text-beige-700">  
                            Project Consultations: 
                        </h4>
                        <p>
                        consultations@visionaryinteriors.com

                        </p>

                        </div>


                    </div>
                    <hr className="w-8/12 ml-[50%] -translate-x-1/2 p"/>
                    <div className="flex justify-start items-start flex-col">
                        <p className="pb-1 pt-4 text-2xl text-beige-500">
                        Follow Us

                        </p>
                        <div className="flex gap-4 py-4">
                            <p>
    
                             <Link href={"https://www.facebook.com"}><FaFacebookSquare className= "text-blue-600 hover:text-blue-800 text-2xl ml-2" /></Link>
                            </p>
                            <p>
                            <Link href={"https://www.instagram.com"}><FaSquareInstagram className="text-violet-500 hover:text-violet-800 text-2xl ml-2" /></Link>
                            
                            </p>

                            <p >
                        

                            <Link href={"https://www.linkedin.com"}><FaLinkedin  className="text-blue-700 hover:text-blue-800 text-2xl ml-2"/></Link>
                            </p>
                        </div>
                        {/* <div className="flex justify-center items-center mb-2">
                            <h4 className="text-beige-700">
                                Facebook:

                            </h4>
                            <p>

                             <Link href={"https://www.facebook.com"}><FaFacebookSquare className= "text-blue-600 text-xl ml-2" /></Link>
                            </p>
                            

                        </div>
                        <div className="flex justify-center items-center mb-2">
                            <h4 className="text-beige-700">

                                Instagram: 
                            </h4>
                            <p>
                             <Link href={"https://www.instagram.com"}><FaSquareInstagram className="text-fuchsia-700 text-xl ml-2" /></Link>
                            
                            </p>
                        </div>
                        <div className="flex justify-center items-center mb-2 ">
                            <h4 className="text-beige-700">
                                LinkedIn:
                                
                            </h4>
                            <p>
                           

                             <Link href={"https://www.linkedin.com"}><FaLinkedin  className="text-blue-700 text-xl ml-2"/></Link>
                            </p>
                        </div> */}
                      
                    </div>


                </div>
                    <p className="text-xl py-4">

                    Stay Connected!
                    </p>

            </div>
        </div>
     );
}
 
export default ContactUs;