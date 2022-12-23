import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faCircleXmark, faCode, faComment, faFlag, faLayerGroup, faPlus, faWrench } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "./SideMenu";

export const tutorialGroup = {
    key: 1,
    items: [
        {href: "/how-to-break-down-a-ui", text: "How to Break Down a UI", icon: <Icon icon={faLayerGroup}/>, key: 2},
        {href: "/how-to-read-errors", text: "How to Read Errors", icon: <Icon icon={faCircleExclamation} />, key: 3},
        {href: "/how-to-create-a-new-feature", text: "How to Create a New Feature", icon: <Icon icon={faPlus} />, key: 4}
    ],
    header: "Tutorials"
};

export const snapshotGroup = {
    key: 5,
    items: [
        {href: "/getting-started", text: "Getting Started", icon: <Icon icon={faFlag} />, key: 6}, 
        {href: "/finding-problems", text: "Finding Problems", icon: <Icon icon={faCircleXmark} />, key: 7}, 
        {href: "/developing-solutions", text: "Developing Solutions", icon: <Icon icon={faWrench} />, key: 8}, 
        {href: "/creating-new-features", text: "Creating New Features", icon: <Icon icon={faCode} />, key: 9}, 
        {href: "/communicating-with-jordan", text: "Communicating With Jordan", icon: <Icon icon={faComment} />, key: 10}, 
    ],
    header: "Snapshot"
};