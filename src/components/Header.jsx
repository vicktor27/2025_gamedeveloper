import Logo from "./logo";
import Nav from "./Nav";
import "./Header.css";
const Header = () => {
  return (
    <>
      <header className="Header">
        <div className="Flex">
          <Logo></Logo>
          <Nav></Nav>
          <p>Jose Luis Andrade Pulido</p>
        </div>
      </header>
    </>
  );
};

export default Header;
