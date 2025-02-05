import Logo from "./Logo";
import Nav from "./Nav";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="Header">
        <div className="Flex">
          <Logo> </Logo>
          <Nav></Nav>
          <p>Jaime Angel Cruz de la Fuente</p>
        </div>
      </header>
    </>
  );
};

export default Header;
