import Logo from "./Logo";
import Nav from "./Nav";
import "./Header.css";
const Header = () => {
  return (
    <>
      <header className="Header">
        <div className="Flex">
          <Logo></Logo>
          <Nav></Nav>
          <p>Natanael Isacar Salazar Holguin</p>
        </div>
      </header>
    </>
  );
};

export default Header;
