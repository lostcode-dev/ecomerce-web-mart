"use client";

import {
  MainHeader,
  NotificationBar,
  Nav,
  NavSectionsGroup,
  NavIconsGroup,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTicket,
  faArrowRight,
  faBars,
  faBagShopping,
  faAngleDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  const navSections = [
    { content: "Home", icon: null },
    { content: "Shop", icon: faAngleDown },
    { content: "Product", icon: faAngleDown },
    { content: "Contact Us", icon: null },
  ];

  const iconsGroup = [
    {
      name: "search",
      class: "hidden-md",
      icon: faMagnifyingGlass,
      count: null,
    },
    { name: "user", class: "hidden-md", icon: faCircleUser, count: null },
    { name: "cart", class: "bag-icon", icon: faBagShopping, count: 2 },
  ];

  return (
    <MainHeader>
      <NotificationBar>
        <div>
          <FontAwesomeIcon icon={faTicket} size="xl" />
          <span>30% off storewide — Limited time! </span>

          <button className="shop-button">
            <span>Shop Now</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <button>X</button>
      </NotificationBar>
      <Nav>
        <button>
          <FontAwesomeIcon icon={faBars} size="xl" />
          <span>Logo</span>
        </button>
        <NavSectionsGroup>
          {navSections.map((section) => (
            <li key={section.content}>
              {section.content}
              {section.icon && <FontAwesomeIcon icon={section.icon} />}
            </li>
          ))}
        </NavSectionsGroup>
        <NavIconsGroup>
          {iconsGroup.map((item) => (
            <li key={item.name} className={item.class}>
              {<FontAwesomeIcon icon={item.icon} size="xl" />}
              {item.count && <span>{item.count}</span>}
            </li>
          ))}
        </NavIconsGroup>
      </Nav>
    </MainHeader>
  );
}
