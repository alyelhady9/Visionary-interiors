import img1 from '../images/res.jpg'
import img2 from '../images/com.webp'
import img3 from '../images/fur.webp'
import img4 from '../images/ren.jpg'
import img5 from '../images/ser.jpeg'
import Image from 'next/image'
import Link from 'next/link'

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Residential Interior Design",
            discription: "Transform your home into a sanctuary with our personalized residential interior design services. Whether it's a cozy apartment or a spacious villa, we create spaces that reflect your personality and lifestyle.",
            specs: [
                {
                    title: "Consultation & Concept Development",
                    value: "Starting at $500",
                },
                {
                    title: "Full Home Makeover",
                    value: "Starting at $5,000",
                },
                {
                    title: "Room-by-Room Design",
                    value: "Starting at $1,000 per room",
                },
            ],
            image: img1
        },
        {
            id: 2,
            title: "Commercial Interior Design",
            discription: "Enhance your business environment with our commercial interior design services. We design functional and aesthetically pleasing spaces that boost productivity and leave a lasting impression on clients.",
            specs: [
                {
                    title: "Office Design",
                    value: "Starting at $3,000",
                },
                {
                    title: "Retail Space Design",
                    value: "Starting at $4,000",
                },
                {
                    title: "Restaurant & Café Design",
                    value: "Starting at $5,000",
                },
            ],
            image: img2
        },
        {
            id: 3,
            title: "Custom Furniture Design",
            discription: "Add a unique touch to your space with our custom furniture design services. We create bespoke pieces that perfectly fit your style and space requirements.",
            specs: [
                {
                    title: "Custom Sofas & Chairs",
                    value: "Starting at $1,500",
                },
                {
                    title: "Custom Tables & Desks",
                    value: " Starting at $1,000",
                },
                {
                    title: "Built-in Storage Solutions",
                    value: "Starting at $2,000",
                },
            ],
            image: img3
        },
        {
            id: 4,
            title: "Renovation & Remodeling",
            discription: "Breathe new life into your existing space with our renovation and remodeling services. From minor updates to major overhauls, we handle all aspects of the project to ensure a seamless transformation.",
            specs: [
                {
                    title: "Kitchen Remodeling",
                    value: "Starting at $10,000",
                },
                {
                    title: "Bathroom Remodeling",
                    value: " Starting at $7,000",
                },
                {
                    title: "Full Home Renovation",
                    value: "Starting at $20,000",
                },
            ],
            image: img4
        },
        {
            id: 5,
            title: "Virtual Design Services",
            discription: "Get professional design advice from the comfort of your home with our virtual design services. Perfect for clients who prefer a remote consultation and design process.",
            specs: [
                {
                    title: "Virtual Consultation",
                    value: "$200 per hour",
                },
                {
                    title: "E-Design Packages",
                    value: " Starting at $800",
                },
            
            ],
            image: img5
        },
    ]
    return ( 
        //an interior designer portfolio web app
    <div className="w-full flex justify-center font-sans text-gray-800">
        <div className="w-8/12 max-md:10/12 max-sm:w-full px-6  max-sm:px-0">
            <div className="bg-gray-100 p-6 ">

            <div className="mt-12"><h1 className="text-xl font-semibold ">Welcome to Your Design Studio, where creativity meets functionality. We specialize in transforming spaces into beautiful, inspiring environments. Explore our range of services designed to meet your unique needs and style preferences.</h1></div>
            <div className="services-container mt-6">
                <h1 className="text-2xl text-beige-600 font-semibold my-3 ">Our Services</h1>
            {/*
                <div className="flex flex-col gap-4">
                {
                    services.map((s) => (
                        <div className="my-4 bg-gray-100 p-6 rounded-sm" key={s.id}>
                        <h2 className="text-xl text-beige-600 font-semibold">{s.id}.{s.title}</h2>
                        <p className="my-4">{s.discription}</p>
                        <div>
                        
                        {
                            s.specs.map((spec) => (
                                <div className="flex gap-4">
                                <h4 className="text-lg text-beige-600 font-semibold">
                                -{spec.title}: 
                                
                                </h4>
                                <p>{spec.value}</p>
                                </div>
                            ))
                        }
                        </div>
                        </div>
                    ))
                }
                
                </div>
            */}
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6">
                {
                    services.map((s) => (
                        <div className=" bg-white p-6 rounded-sm shadow-md" key={s.id}>
                            <div>
                                <Image src={s.image} alt={s.title}  />
                            </div>
                            <div className='mt-4'>

                                <h2 className="text-xl text-beige-600 font-semibold">{s.id}.{s.title}</h2>
                                <p className="my-2 text-justify w-11/12">{s.discription}</p>
                                <div>

                                {
                                    s.specs.map((spec) => (
                                        <div className="flex gap-4 items-center ">
                                            <h4 className="text-lg text-beige-600 font-semibold">
                                            -{spec.title}: 

                                            </h4>
                                            <p>{spec.value}</p>
                                        </div>
                                    ))
                                }
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>

             </div>
            </div>
            <div className="why-choose-us mt-4 max-sm:px-4">
                <h2 className="text-xl my-4 text-beige-500 font-semibold">Why Choose Us?</h2>
                <div className=" grid justify-center items-center grid-cols-3 max-lg:grid-cols-1 max-sm:grid-cols-1 gap-4">

                    
                    <div className="border-beige-500 rounded-lg flex flex-col items-center justify-between border-2 p-4 h-full">
                        <h3 className="text-lg text-beige-500 font-semibold">Experienced Team</h3>
                        <p className="text-center"> Our team of skilled designers brings years of experience and a keen eye for detail.</p>
                    </div>
                    <div className="border-beige-500 rounded-lg flex flex-col items-center justify-between border-2 p-4 h-full">
                        <h3 className="text-lg text-beige-500 font-semibold">Quality Assurance</h3>
                        <p className="text-center">We use high-quality materials and trusted contractors to ensure the best results.</p>
                    </div>
                    <div className="border-beige-500 rounded-lg flex flex-col items-center justify-between border-2 p-4 h-full">
                        <h3 className="text-lg text-beige-500 font-semibold">Customer Satisfaction</h3>
                        <p className="text-center">Your satisfaction is our top priority. We work closely with you to bring your vision to life.</p>
                    </div>
                </div>
            </div>
            <div className="testimonials my-6 bg-gray-100 p-4">
                <h2 className="my-4 text-lg  text-beige-600">Here's what our clients have to say about us:</h2>
                <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
                    <div className="bg-white p-4 shadow-md">
                        <p className="text-center mb-2">"Absolutely thrilled with the transformation of our living room! The team at Your Design Studio truly understood our vision and brought it to life. Highly recommend!"</p>
                        <p className="font-bold">-Sarah M.</p>
                    </div>
                 
                    <div className="bg-white p-4 shadow-md">
                        <p className="text-center mb-2">"Professional, creative, and attentive to detail. Our office space has never looked better. Thank you for making our workspace so inspiring!"</p>
                        <p className="font-bold">- John D.</p>
                    </div>
                 
                    <div className="bg-white p-4 shadow-md">
                        <p className="text-center mb-2">"From start to finish, the experience was fantastic. The custom furniture pieces are stunning and fit perfectly in our home."</p>
                        <p className="font-bold">- Emily R.</p>
                    </div>
                 
                    <div className="bg-white p-4 shadow-md">
                        <p className="text-center mb-2">"The virtual design service was a game-changer for us. We received expert advice and a beautiful design plan without leaving our home."</p>
                        <p className="font-bold">- Michael T.</p>
                    </div>
                 
                </div>
            </div>

            <div>
                <p className='text-center my-6 text-lg'>What are you waiting for? <Link href={"/contact"} className='underline hover:no-underline'> Get in touch with us today !</Link></p>
            </div>
        </div>

        
    </div>
     );
}
 
export default Services;