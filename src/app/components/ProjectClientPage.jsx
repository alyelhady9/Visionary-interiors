"use client";
import { useState } from "react";
import Image from "next/image";
import { FaSearchPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectClientPage = ({ project }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.photos.length);
    };

    const goToPrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.photos.length) % project.photos.length);
    };

    return (
        <div className="w-full font-sans flex justify-center text-gray-800">
            <div className="w-8/12 max-md:10/12 max-md:w-full px-6">
                <div className="w-full" key={project.id}>
                    <h2 className="text-2xl font-bold text-beige-500 my-4 w-full text-center">{project.title}</h2>
                    <div>
                        <h3 className="text-lg font-bold text-beige-500 my-2">Client Info:</h3>
                        <p>{project.data.clientInfo.name}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold my-2">Location:</h3>
                        <p>- {project.data.clientInfo.loc}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold my-2">Project Duration:</h3>
                        <p>- {project.data.clientInfo.dur}</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-beige-500 my-4">Client Needs</h3>
                        <div>
                            {
                                project.data.clientNeeds.map((need, i) => ( 
                                    <div key={i + 1}>
                                        <h4 className="text-lg font-bold my-2">
                                            {need.title !== null && i + 1 + ". "}{need.title}
                                        </h4>  
                                        <p>{need.content}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-beige-500 my-4">Design Solutions</h3>
                        <div>
                            {
                                project.data.designSols.map((sol, i) => ( 
                                    <div key={i + 1}>
                                        <h4 className="text-lg font-bold my-2">{sol.title}</h4>
                                        <p>{sol.content}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-beige-500 my-4">Project Gallery</h3>
                        <div className="grid grid-cols-2 gap-4 pb-4">
                            {project.photos.map((photo, i) => (
                                <div 
                                    className="relative cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105" 
                                    key={i + 1} 
                                    onClick={() => openModal(i)}
                                >
                                    <Image src={photo} alt="project photo" className="transition-all duration-300" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                                        <FaSearchPlus className="text-4xl" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Full-Screen Image Carousel */}
            {isOpen && (
                <div 
                    className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-90 z-50 transition-opacity duration-300"
                    onClick={closeModal}
                >
                    <button 
                        onClick={closeModal} 
                        className="rounded-full w-8 h-8 flex justify-center items-center bg-white text-black opacity-80 hover:opacity-100 cursor-pointer absolute top-4 right-4 text-xl"
                    >
                        x
                    </button>
                    
                    <button 
                        onClick={(e) => { e.stopPropagation(); goToPrevImage(); }} 
                        className="absolute left-2 md:left-4 p-2 md:p-3 bg-white text-black rounded-full opacity-70 hover:opacity-100 transition-opacity duration-300"
                    >
                        <FaChevronLeft className="text-xl md:text-2xl" />
                    </button>
                    
                    <button 
                        onClick={(e) => { e.stopPropagation(); goToNextImage(); }} 
                        className="absolute right-2 md:right-4 p-2 md:p-3 bg-white text-black rounded-full opacity-70 hover:opacity-100 transition-opacity duration-300"
                    >
                        <FaChevronRight className="text-xl md:text-2xl" />
                    </button>
                    
                    <div 
                        className="relative h-full w-11/12 md:h-5/6 md:w-10/12 flex items-center justify-center p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image 
                            key={currentImageIndex} // Key is used to trigger the fade animation
                            src={project.photos[currentImageIndex]} 
                            alt="Full Screen" 
                            className="h-full w-auto object-contain animate-fade-in" 
                        />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-1 md:py-2 rounded-full text-sm md:text-base">
                            {currentImageIndex + 1} of {project.photos.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectClientPage;
