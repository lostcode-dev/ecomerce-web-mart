import styled from "styled-components";

export const MainHeader = styled.header`
  position: absolute;
  width: 100%;  
`;

export const NotificationBar = styled.div`
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
    color: #ffab00;
    border-bottom: 1px solid #ffab00;

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

export const Nav = styled.nav`
  background: transparent;
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
  

  @media (min-width: 1024px) {
    padding: 1rem 10rem;
    max-width: 1120px;
    margin: 0 auto;
  }
`;

export const NavSectionsGroup = styled.ul`
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
`;

export const NavIconsGroup = styled.ul`
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
      display: inline;
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
    color: #ffab00;
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
`;
