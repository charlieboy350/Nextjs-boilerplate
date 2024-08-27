'use client'

import { faBook, faConstruction, faHome, faPlay, faShop, faTasks } from "@fortawesome/pro-light-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Label } from "@headlessui/react";
import Link from "next/link";
import SimpleBar from "simplebar-react";


const navigationList = [
{
    label: "Home",
    icon: faHome
},{
    label: "Mix Deconstructions",
    icon: faConstruction
}, {
    label: "Action Plans V2",
    icon: faTasks
}, {
    label: "Courses",
    icon: faBook
}, {
    label: "Shop",
    icon: faShop
}, {
    label: "My Playlists",
    icon: faPlay
}]


export default function SideBar({sidebarOpen, setSidebarOpen}) {
    console.log({sidebarOpen})
    return (
        <div className={`${sidebarOpen ? 'sm:w-[256px]' : 'sm:w-[58px]'} min-h-0 transition-all overflow-hidden bg-white shadow-[0_0_5px_rgb(0,0,0,.13)]`}>
            <SimpleBar style={{ maxHeight: "100%" }} className="navigationScrollBar py-4">
            
                {/* search bar */}
                <div className="px-3 w-full cursor-pointer">
                    <div className="searchBarContainer relative">
                        <FontAwesomeIcon icon={faMagnifyingGlass} color="#445f74" fontSize={14} className="searchIcon"/>
                        <input type="text" placeholder="Search" className={`${sidebarOpen ? "visible" : "invisible" }`}/>
                    </div>
                </div>
                {/* search bar */}

                {/* navigation */}
                <nav className="mt-4">

                    {navigationList.map((nav,key)=>{
                        return (
                            <Link href={"/"}  key={key} className="mb-2 ">
                                <div className="group flex relative h-[42px] px-4 items-center hover:bg-[#f5f5f6] bg-transparent transition-all border-l-4 border-l-transparent hover:border-l-primary">
                                    <FontAwesomeIcon icon={nav.icon} fontSize={16} className="w-[16px] min-w-[16px] h-[16px] text-center align-middle text-[#12212d]  group-hover:text-primary transition-colors"/>
                                    <p className={`${sidebarOpen ? "visible" : "invisible" } text-sm mt-[1px] ml-4 text-[#12212d] group-hover:text-primary whitespace-nowrap text-ellipsis`}>{nav.label}</p>
                                </div>
                            </Link>

                        )
                    })}

                </nav>
                {/* navigation */}

            </SimpleBar>

        </div>
    );
}
