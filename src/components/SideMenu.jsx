import React, {useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown, faHouse } from "@fortawesome/free-solid-svg-icons";
import { tutorialGroup, snapshotGroup } from "./data";
import logoIcon from "../assets/skule-news-logo.png";
import { NavLink } from "react-router-dom";

function Logo() {
    return (
    <div className="m-4 mb-8 flex items-center h-16 select-none xl:justify-start justify-center">
        <img className="rounded-full border-black border-1 h-full" src={logoIcon} alt="logo"/>
        <h1 className="ml-4 text-lg xl:block hidden">My Co-op Experience</h1>
    </div>
    );
}

function DrawerGroup({ groupItems, header }) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const items = groupItems.map(item => 
        <DrawerItem href={item.href} text={item.text} icon={item.icon} key={item.key}/>
    );

    const itemsWrapperClassList = "pl-2" + (!drawerOpen ? " hidden" : "");
    const arrowIcon = drawerOpen ? faAngleUp : faAngleDown;

    return (
    <div className="pt-2 text-neutral-600 ">
        <button className="text-lg bg-white rounded-lg w-full h-14 text-left py-2 pl-4 pr-6 flex justify-between items-center" onClick={() => setDrawerOpen(!drawerOpen)}>
            <h2>{header}</h2>
            <FontAwesomeIcon icon={arrowIcon} className="text-neutral-500"/>
        </button>
        <div className={itemsWrapperClassList}>
            {items}
        </div>
    </div>
    );
}

function DrawerItem({ href, text, icon }) {

    const navLinkClassList = "flex items-center w-full h-10 my-2 ml-2 justify-center xl:justify-start";
    const selectedClassList = " lg:after:border-4 lg:after:border-neutral-500 lg:after:rounded-full lg:after:bg-pink-200 lg:after:h-4 lg:after:w-4 lg:after:ml-2";

    return (
    <NavLink to={href}
        className={({ isActive }) => isActive ? navLinkClassList + selectedClassList : navLinkClassList}>
        {icon}
        <h3 className="hidden xl:block ml-4 text-neutral-600 text-md">{text}</h3>
    </NavLink>
    );
}

export function DrawerIcon({ icon }) {
    return (
        <FontAwesomeIcon icon={icon} className="w-[40%] xl:w-[7%] min-h-[65%] text-neutral-500 rounded-full" />
    );
}

function Drawer() {
    return (
    <div className="m-2">
        <DrawerItem href="/" text="Home" icon={<DrawerIcon icon={faHouse} />} key={0}/>
        <DrawerGroup groupItems={tutorialGroup.items} key={tutorialGroup.key} header={tutorialGroup.header}/>
        <DrawerGroup groupItems={snapshotGroup.items} key={snapshotGroup.key} header={snapshotGroup.header} />
    </div>
    );
}

function SideMenu() {
    return (
    <nav className="bg-neutral-200 rounded-xl h-full flex flex-col py-4">
        <Logo />
        <div className="w-full bg-neutral-400 h-[2px]"></div>
        <Drawer />
    </nav>
    )
}

export default SideMenu;