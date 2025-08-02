"use client"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
      ];


    return ( 
        <Navbar className="select-none" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
         
          <p className="font-bold text-2xl ">
            <Link href="/">

            Visionary Interiors
            </Link>
            </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      
        <NavbarItem>
             <Link href={'/services'}> Our Services</Link>
        </NavbarItem>
        <NavbarItem>
           <Link href={'/about'}> About Us</Link>
        </NavbarItem>
      
        <NavbarItem>
           <Link href={'/contact'}> Contact Us</Link>
        </NavbarItem>
      
      </NavbarContent>
      <NavbarMenu>
     
          
          <NavbarMenuItem>
          <Link href={'/'}> Home</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
          <Link href={'/services'}> Our Services</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
          <Link href={'/about'}> About Us</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
          <Link href={'/contact'}> Contact Us</Link>
          </NavbarMenuItem>
       
      </NavbarMenu>
    </Navbar>
     );
}
 
export default Header;
