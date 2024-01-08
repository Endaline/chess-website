import { MdOutlineArrowDropDown } from "react-icons/md";

interface NavLink {
  name: string;
  route: string;
  icon?: React.JSX.Element;
}

const navLinks: NavLink[] = [
  {
    name: "ABOUTS",
    route: "/abouts",
  },
  {
    name: "CONTACTS",
    route: "/contacts",
  },
  {
    name: "MEMBERSHIP",
    route: "/membership",
  },
  {
    name: "JOURNAL",
    route: "/journal",
  },
  {
    name: "FAQ",
    route: "/faq",
  },
];

export default navLinks;
