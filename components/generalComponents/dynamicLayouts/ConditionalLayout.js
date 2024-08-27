
'use client'
import {StoreProvider, useStore, useScopedStore} from "@/utils/store"
import SimpleBar from 'simplebar-react';
import Header from "../header/Header";
import SideBar from "../sidebar/Sidebar";
import { useState } from "react";

export default function ConditionalLayout({ children }) {
    const {session} = useStore();
    console.log({session})
    const [sidebarOpen, setSidebarOpen] = useState(true)


    return (
        <div className="h-screen w-full flex flex-col items-start">
            <Header setSidebarOpen={setSidebarOpen}/>
            <div className="flex w-full min-h-0 flex-1">
                <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
                <main className="p-0 flex-1 min-w-0 min-h-0 transition">
                    <SimpleBar style={{ maxHeight: "100%" }}>
                        <div className="p-4">
                            { children }
                        </div>
                    </SimpleBar>
                </main>
            </div> 
        </div>
    );
}
