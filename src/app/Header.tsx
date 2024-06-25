"use client";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket, faArrowRight, faBars, faBagShopping, faAngleDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

const NotificationBar = styled.div`
  background: #141718;
  color: #fefefe;
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  line-height: 1.25rem;
  font-weight: 600;

  > div {
    flex: 1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .shop-button {
    display: none;
    color: #FFAB00;
    border-bottom: 1px solid #FFAB00;

    @media (min-width: 768px) {
    display: inline;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    line-height: 1.5rem;
    font-weight: 500;
    }
  }

  @media (min-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;    
  }
`;

const Nav = styled.nav `
  background: linear-gradient(0deg, rgba(255, 171, 0, 0.64) 0%, rgba(255, 171, 0, 0.64) 100%), #FFF;
  padding: 1rem 2rem;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  

  > :first-child {    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
        
    @media (min-width: 768px) {
    > svg {
      display: none;
    }
      
    }
  }

  > .nav-link-group {
    display: none;
    @media (min-width: 768px) {
      display: flex;
      gap: 2.5rem;

      > li {
        display: flex;
        align-items: center;
        gap: 0.125rem;
        cursor: pointer;
      }
    }    
    
  }

  > .icons-group {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    li {
      cursor: pointer;
    }
    .hidden-md {
      display: none;

      @media (min-width: 768px) {
        display:inline;
      }
    }
    
    .bag-icon {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      gap: 0.3125rem;  

    }       

    > .bag-icon > span {
      height: 1.25rem;
      width: 1.25rem;
      background-color: #141718;
      color: #FFAB00;
      border-radius: 50%;
      display: inline-block;
      text-align: center;
      line-height: 1.25rem;
      font-size: 0.75rem;
    }

    @media (min-width: 768px) {
      display: flex;
      justify-content: center;      
    }  
  
}

  @media (min-width: 1024px) {
      padding: 1rem 10rem;    
    }
`

export default function Header() {  

  const showShopButton = true
  return (
    <header>
    <NotificationBar>
      <div>
        <FontAwesomeIcon icon={faTicket} size="xl" />
        <span>30% off storewide — Limited time! </span>
        { showShopButton && (
          <button className="shop-button">
            <span>Shop Now</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
      )}
      </div>
      <button>X</button>
    </NotificationBar>
    <Nav>
      <button>
        <FontAwesomeIcon icon={faBars} size="xl" />
        <span>Logo</span>
      </button>
      <ul className="nav-link-group">
        <li>
          Home          
        </li>
        <li>
          Shop
          <FontAwesomeIcon icon={faAngleDown} />
        </li>
        <li>
          Product
          <FontAwesomeIcon icon={faAngleDown} />
        </li>
        <li>
          Contact Us
        </li>
      </ul>
      <ul className="icons-group">
        <li className="hidden-md">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="xl"/>
        </li>
        <li className="hidden-md">
          <FontAwesomeIcon icon={faCircleUser} size="xl" />
        </li>

        <li className="bag-icon">
          <FontAwesomeIcon icon={faBagShopping} size="xl" />
          <span>2</span>
        </li>
      </ul>
    </Nav>  
    </header>
  );
}
