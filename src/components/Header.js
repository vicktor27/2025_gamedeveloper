import Logo from "./Logo";
<<<<<<< HEAD
const Header = () => {
  return (
    <>
      <header style={styles.header}>
        <div style={styles.flex}>
          <Logo></Logo>
          <p>Phd Victor Manuel Solis Cardoza</p>
=======
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
>>>>>>> 109b629f16357c9ceaeafb05a962b2c4a9a99ea4
        </div>
      </header>
    </>
  );
};

export default Header;
<<<<<<< HEAD

const styles = {
  header: {
    maxWidth: "1280px",
  },
  flex: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
};
=======
>>>>>>> 109b629f16357c9ceaeafb05a962b2c4a9a99ea4
