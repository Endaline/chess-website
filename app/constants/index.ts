import { MdOutlineArrowDropDown } from "react-icons/md";

interface NavLink {
  name: string;
  route: string;
  icon?: React.JSX.Element;
  subMenu?: SubMenuLink[];
}

interface SubMenuLink {
  title: string;
  href: string;
}

interface NavLinksProps {
  links: NavLink[];
}

const navLinks: NavLinksProps[] = [
  {
    links: [
      {
        name: "EDUCATION",
        route: "/education",
        // icon: <MdOutlineArrowDropDown />,

        subMenu: [
          { title: "Service 1", href: "/services/service-1" },
          { title: "Service 2", href: "/services/service-2" },
          { title: "Service 3", href: "/services/service-3" },
        ],
      },
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
    ],
  },
];

export default navLinks;
