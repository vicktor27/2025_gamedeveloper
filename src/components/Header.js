import Logo from "./Logo";
const Header = () => {
  return (
    <>
      <header style={styles.header}>
        <div style={styles.flex}>
          <Logo></Logo>
          <p>Alan David Barraza Gonzalez</p>
        </div>
      </header>
    </>
  );
};

export default Header;

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
