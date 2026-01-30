import {
  LinksContainerStyled,
  LogoContainerStyled,
  NavbarContainerStyled,
} from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavbarContainerStyled>
      <LogoContainerStyled>
        <h1>AgroBytes</h1>
      </LogoContainerStyled>
      <LinksContainerStyled>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </LinksContainerStyled>
    </NavbarContainerStyled>
  );
};
export default Navbar;
