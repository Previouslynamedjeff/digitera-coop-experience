import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../components/SideMenu";

function Layout() {
    return (
    <div className="flex h-screen w-screen">
        <div className="m-4 flex-grow basis-1/5">
            <SideMenu />
        </div>
        <div className="m-4 flex-grow basis-4/5">
            <Outlet />
        </div>
    </div>
    );
}

export default Layout;