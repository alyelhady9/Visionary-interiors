"use client"
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Contact = () => {
    return (
        <div className="w-full flex justify-center font-serif text-gray-800">
            <div className="w-8/12 max-md:w-full max-md:px-0 max-sm:w-full px-6 py-12">
                <div className="bg-gray-50 p-8 shadow-lg transition-all duration-300 hover:shadow-2xl">
                    <div>
                        <h2 className="text-3xl font-light text-beige-600 border-b-2 border-beige-300 pb-2 mb-4">
                            Get in Touch with Visionary Interiors
                        </h2>
                        <p className="text-justify leading-relaxed">
                            We’d love to hear from you! Whether you have a question, need a consultation, or want to discuss your next project, our team at Visionary Interiors is here to help. Reach out to us through any of the following methods:
                        </p>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-2xl font-medium text-beige-600 mt-3">
                            Visit Us
                        </h2>
                        <div className="py-6 border-b border-gray-200">
                            <div className="mb-4">
                                <h4 className="text-beige-700 font-semibold text-lg">
                                    Address:
                                </h4>
                                <p className="leading-relaxed">
                                    1234 ada Street, Alexandria, Egypt
                                </p>
                            </div>
                            <div>
                                <h4 className="text-beige-700 font-semibold text-lg">
                                    Office Hours:
                                </h4>
                                <p className="leading-relaxed">
                                    Monday to Friday, 9:00 AM - 6:00 PM
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="py-6 border-b border-gray-200">
                        <div className="pb-1">
                            <h2 className="text-2xl font-medium text-beige-600">
                                Call Us!
                            </h2>
                        </div>
                        <div>
                            <h4 className="text-beige-700 font-semibold text-lg">
                                Phone:
                            </h4>
                            <p className="leading-relaxed">
                                0018912781
                            </p>
                        </div>
                    </div>

                    <div className="py-6 border-b border-gray-200">
                        <div className="pb-1">
                            <h2 className="text-2xl font-medium text-beige-600">
                                Email Us!
                            </h2>
                        </div>
                        <div>
                            <h4 className="text-beige-700 font-semibold text-lg">
                                General Inquiries:
                            </h4>
                            <p className="leading-relaxed">
                                inquiries@visionaryinteriors.com
                            </p>
                        </div>
                        <div className="mt-2">
                            <h4 className="text-beige-700 font-semibold text-lg">
                                Project Consultations:
                            </h4>
                            <p className="leading-relaxed">
                                consultations@visionaryinteriors.com
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-start mt-6">
                        <p className="pb-1 text-2xl text-beige-600 font-medium">
                            Follow Us
                        </p>
                        <div className="flex gap-6 py-4">
                            <Link href={"https://www.facebook.com"} className="text-blue-600 hover:text-blue-800 transition-colors duration-300 transform hover:scale-110">
                                <FaFacebookSquare className="text-3xl" />
                            </Link>
                            <Link href={"https://www.instagram.com"} className="text-violet-500 hover:text-violet-800 transition-colors duration-300 transform hover:scale-110">
                                <FaSquareInstagram className="text-3xl" />
                            </Link>
                            <Link href={"https://www.linkedin.com"} className="text-blue-700 hover:text-blue-800 transition-colors duration-300 transform hover:scale-110">
                                <FaLinkedin className="text-3xl" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;