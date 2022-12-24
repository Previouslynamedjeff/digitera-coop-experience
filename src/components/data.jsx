import { faCircleXmark, faCode, faComment, faFlag, faLayerGroup, faPlus, faWrench } from "@fortawesome/free-solid-svg-icons";
import { DrawerIcon } from "./SideMenu";

export const tutorialGroup = {
    key: 1,
    items: [
        {href: "/how-to-break-down-a-ui", text: "How to Break Down a UI", icon: <DrawerIcon icon={faLayerGroup}/>, key: 2},
    ],
    header: "Tutorials"
};

export const snapshotGroup = {
    key: 5,
    items: [
        {href: "/getting-started", text: "Getting Started", icon: <DrawerIcon icon={faFlag} />, key: 6}, 
        {href: "/finding-problems", text: "Finding Problems", icon: <DrawerIcon icon={faCircleXmark} />, key: 7}, 
        {href: "/developing-solutions", text: "Developing Solutions", icon: <DrawerIcon icon={faWrench} />, key: 8}, 
        {href: "/creating-new-features", text: "Creating New Features", icon: <DrawerIcon icon={faCode} />, key: 9}, 
        {href: "/communicating-with-jordan", text: "Communicating With Jordan", icon: <DrawerIcon icon={faComment} />, key: 10}, 
    ],
    header: "My Experience"
};