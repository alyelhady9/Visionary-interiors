// /data/projectsData.js

import pj11 from "../images/projects/pj1/1.png"
import pj12 from "../images/projects/pj1/2.jpg"
import pj13 from "../images/projects/pj1/3.jpg"
import pj14 from "../images/projects/pj1/44.jpg"
import pj15 from "../images/projects/pj1/5.jpg"
import pj16 from "../images/projects/pj1/6.jpg"
import pj17 from "../images/projects/pj1/7.jpg"

import pj21 from "../images/projects/pj2/1.jpg"
import pj22 from "../images/projects/pj2/2.jpg"
import pj23 from "../images/projects/pj2/3.jpg"
import pj24 from "../images/projects/pj2/4.jpg"
import pj25 from "../images/projects/pj2/5.jpg"
import pj26 from "../images/projects/pj2/6.jpg"
import pj27 from "../images/projects/pj2/7.jpg"
import pj28 from "../images/projects/pj2/8.jpg"

import pj31 from "../images/projects/pj3/1.jpg"
import pj32 from "../images/projects/pj3/2.jpg"
import pj33 from "../images/projects/pj3/3.jpg"
import pj34 from "../images/projects/pj3/4.jpg"
import pj35 from "../images/projects/pj3/5.jpg"
import pj36 from "../images/projects/pj3/6.jpg"
import pj37 from "../images/projects/pj3/7.jpg"
import pj38 from "../images/projects/pj3/8.jpg"

import pj41 from "../images/projects/pj4/1.jpg"
import pj42 from "../images/projects/pj4/2.jpg"
import pj43 from "../images/projects/pj4/3.jpg"
import pj44 from "../images/projects/pj4/4.jpg"
import pj45 from "../images/projects/pj4/5.jpg"  
import pj46 from "../images/projects/pj4/6.jpg"
import pj47 from "../images/projects/pj4/7.jpg"
import pj48 from "../images/projects/pj4/8.jpg"


export const projects = [
    {
        id: 1,
        title: "Modern Harmony Residence",
        data: {
            clientInfo: {
                name: "A residential house for a family consists of Ahmed, his wife Sara, and their two children, Youssef and Layla",
                loc: "1234 Elm Street, Alexandria, Egypt",
                dur: "3 months",
            },
            clientNeeds : [
                {
                    title: null,
                    content:"Ahmed and his family desired a home that seamlessly blends modern design with functional spaces to accommodate their busy lifestyle. They wanted a living room that serves as a central hub for family activities, a serene bedroom for relaxation, and a bathroom that offers both luxury and practicality."
                }
            ],
            designSols: [
                {
                    title: "Living Room:",
                    content: "The designer created a spacious living room with large windows to maximize natural light. The room features a mix of comfortable seating and a versatile layout that can easily transition from family movie nights to social gatherings. The use of neutral tones and modern furniture pieces ensures a timeless appeal."
                },
                {
                    title: "Bedroom:",
                    content: "For the bedroom, the designer focused on creating a tranquil retreat. Warm lighting and textured walls provide a cozy atmosphere, while minimalist furniture and fine linens enhance the sense of calm. The inclusion of subtle art pieces adds a personal touch without overwhelming the space."
                },
                {
                    title: "Bathroom:",
                    content: "The bathroom design combines sleek functionality with luxurious elements. Black accents contrast with white fixtures, creating a striking visual impact. A large circular mirror with backlighting above dual sinks adds both style and practicality, ensuring the space is both beautiful and efficient."
                },
                {
                    title: "Outcome:",
                    content: "The designer successfully transformed Ahmed's home into a modern sanctuary that meets the family's needs. Each space is thoughtfully curated to offer comfort, style, and functionality, making it a perfect example of contemporary interior design tailored to a family's lifestyle."
                },
            ]
        },
        photos: [pj11, pj12, pj13, pj14, pj15, pj16, pj17],
    },
    {
        id: 2,
        title: "Galactic Dining - A Futuristic Restaurant Experience",
        data: {
            clientInfo: {
                name: "A restaurateur aiming to open a new dining establishment in Alexandria, Egypt.",
                loc: "Alexandria, Egypt",
                dur: "6 months",
            },
            clientNeeds : [
                {
                    title: "Unique Interior Design",
                    content: "To create an inviting and memorable atmosphere for diners."
                },
                {
                    title: "Innovative Lighting",
                    content: "To enhance the dining experience with a modern touch."
                },
                {
                    title: "Functional Furniture",
                    content: "To maximize seating capacity without compromising comfort."
                },
                {
                    title: "Brand-Aligned Color Scheme",
                    content: "To reflect the restaurant's branding and theme."
                },
            ],
            
            designSols: [
                {
                    title: "Color Palette",
                    content: "Implemented a striking color scheme with red accents against neutral backgrounds to evoke warmth and energy."
                },
                {
                    title: "Lighting Fixtures",
                    content: "Custom-designed circular lighting fixtures that serve as statement pieces while providing ambient light."
                },
                {
                    title: "Seating Arrangement",
                    content: "High-quality booth seating and ergonomic chairs to ensure guest comfort."
                },
                {
                    title: "Space Planning",
                    content: "Optimized the flow of movement within the restaurant while maintaining an intimate setting at each table."
                },
            ],
            
        },
        photos: [pj21, pj22, pj23, pj24, pj25, pj26, pj27, pj28]
    },
    {
        id: 3,
        title: "Vibrant Haven - A Modern Bookstore Experience",
        data: {
            clientInfo: {
                name: "A bookstore owner aiming to attract a wide range of customers through an engaging retail environment.",
                loc: "Alexandria, Egypt",
                dur: "4 months"
            },
            clientNeeds: [
                {
                    title: "Unique Interior Design",
                    content: "To create an inviting and memorable atmosphere for book lovers."
                },
                {
                    title: "Efficient Use of Space",
                    content: "To display a variety of books effectively."
                },
                {
                    title: "Adequate Lighting",
                    content: "To ensure a comfortable reading and Browse experience."
                },
                {
                    title: "Attractive Storefront",
                    content: "To draw in foot traffic and stand out from competitors."
                }
            ],
            designSols: [
                {
                    title: "Color Scheme",
                    content: "Utilized a bold yellow color to energize the space and attract attention, complemented by white fixtures to maintain a clean and spacious feel."
                },
                {
                    title: "Layout",
                    content: "Strategic placement of white shelving units and display tables to offer maximum product exposure while ensuring smooth customer flow throughout the store."
                },
                {
                    title: "Lighting",
                    content: "Installed a prominent circular overhead light fixture to provide ample lighting, ensuring well-lit conditions for reading without creating glare or harsh shadows."
                },
                {
                    title: "Flooring Design",
                    content: "Incorporated geometric patterns on the white floor to add visual interest without overwhelming the merchandise on display."
                },
                {
                    title: "Outcome",
                    content: "The project successfully created a vibrant and inviting bookstore that enhances the customer experience through thoughtful design and functional elements."
                },
            ],
        },
        photos: [pj31, pj32, pj33, pj34, pj35, pj36, pj37, pj38]
    },
    {
        id: 4,
        title: "Contemporary Chic - A Progressive Workspace",
        data: {
            clientInfo: {
                name: "A forward-thinking tech company aiming to create an innovative office space in downtown Tokyo.",
                loc: "Tokyo, Japan",
                dur: "8 months",
            },
            clientNeeds: [
                {
                    title: "Cutting-edge Interior Design",
                    content: "To offer an immersive and inspiring environment for employees."
                },
                {
                    title: "Dynamic Lighting Solutions",
                    content: "To create an interactive ambiance that enhances productivity and well-being."
                },
                {
                    title: "Modular Furniture",
                    content: "To allow flexible workspace arrangements catering to both individual and collaborative work."
                },
                {
                    title: "Cohesive Color Story",
                    content: "To embody the company's progressive identity through visual elements."
                }
            ],
            designSols: [
                {
                    title: "Color Palette:",
                    content: "A sophisticated blend of monochrome tones punctuated by vibrant blue highlights to instill calmness yet vibrancy."
                },
                {
                    title: "Lighting Installations:",
                    content: "Interactive LED arrays that respond to activities and ambient sounds for an engaging atmosphere."
                },
                {
                    title: "Furniture Selection:",
                    content: "Customizable furniture pieces with clean lines designed for both aesthetics and various work settings."
                },
                {
                    title: "Spatial Dynamics:",
                    content: "Strategic layout planning to balance open-concept areas with secluded spots for focused work."
                },
                {
                    title: "Outcome:",
                    content: "The project culminates in an innovative office that embodies an advanced workspace atmosphere with versatility and visual impact, making it a perfect fit for a modern tech company."
                }
            ]
        },
        photos: [pj41, pj42, pj43, pj44, pj45, pj46, pj47, pj48]
    },
];