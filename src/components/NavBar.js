import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-gray-900 text-white">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" activeClassname="text-white" exact className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:tex-green-800 text-4xl font-bold cursive tracking-widest">
                        BAD BONES
                    </NavLink>
                    <NavLink to="/post" activeClassname="text-gray-100 bg-gray-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-grey-300 hover:text-green-800">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/projects" activeClassname="text-gray-100 bg-gray-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-grey-300 hover:text-green-800">
                        Projects
                    </NavLink>
                    <NavLink to="/about" activeClassname="text-gray-100 bg-gray-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-grey-300 hover:text-green-800">
                        About Me !
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.facebook.com/TillWeOverdose" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://www.linkedin.com/in/milan-de-groote-548bba82/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://open.spotify.com/user/ullema99?si=dn4S4lAmT5WVMyjslu2Snw" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                </div>
            </div>
        </header>
    )
}