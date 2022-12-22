import React, {useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Logo() {
    return (
    <div className="m-4 mb-8 flex items-center h-16 select-none">
        <img className="rounded-full border-black border-1 h-full" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="logo"/>
        <h1 className="ml-4 text-lg">My Co-op Experience</h1>
    </div>
    );
}

function DrawerGroup({ groupItems, header, selectedIndex, setSelected}) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        setDrawerOpen(JSON.parse(window.localStorage.getItem(`drawerOpen ${header}`)));
    }, []);

    useEffect(() => {
        window.localStorage.setItem(`drawerOpen ${header}`, drawerOpen);
    }, [drawerOpen]);

    const items = groupItems.map(item => 
        <DrawerItem href={item.href} text={item.text} icon={item.icon} key={item.key}
            selectedIndex={selectedIndex} setSelected={setSelected} index={item.key}/>
    );

    const itemsWrapperClassList = "ml-2" + (!drawerOpen ? " hidden" : "");
    const arrowIcon = drawerOpen ? faAngleUp : faAngleDown;

    return (
    <div className="pt-2 text-neutral-600">
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

function DrawerItem({ href, text, icon, selectedIndex, setSelected, index=0}) {
    const selectedMarker = (
        <div className="border-4 border-neutral-500 rounded-full bg-pink-200 h-4 w-4 ml-2"></div>
    );

    return (
    <a className="flex items-center w-full h-10 my-2" href={href} onClick={() => setSelected(index)}>
        {icon}
        <h3 className="ml-2 text-neutral-600 text-md">{text}</h3>
        {selectedIndex === index ? selectedMarker : <></>}
    </a>
    );
}

function ImageIcon({ src }) {
    return (
        <img src={src} className="h-full border-[1px] border-neutral-600 rounded-full" />
    );
}

function Drawer() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const tutorialGroup = {
        key: 0,
        items: [
            {href: "#aa", text: "aa", icon: <ImageIcon src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"/>, key: 1},
            {href: "#bb", text: "bb", icon: <ImageIcon src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"/>, key: 2}
        ],
        header: "Tutorials"
    };

    return (
    <div className="m-2">
        <DrawerItem href="/" text="Home" icon={<ImageIcon src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"/>}
            selectedIndex={selectedIndex} setSelected={() => setSelectedIndex(0)} index={0}/>
        <DrawerGroup groupItems={tutorialGroup.items} key={tutorialGroup.key} header={tutorialGroup.header} 
            selectedIndex={selectedIndex} setSelected={setSelectedIndex}/>
    </div>
    );
}

function SideMenu() {
    return (
    <nav className="bg-neutral-200 rounded-xl h-full flex flex-col py-4">
        <Logo />
        <div className="w-full bg-neutral-600 h-[1px]"></div>
        <Drawer />
    </nav>
    )
}

export default SideMenu;