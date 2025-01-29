import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <header style={styles.header}>
        <div style={styles.flex}>
          <Logo> </Logo>
          <p>Jaime Angel</p>
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
    justifyContenet: "space-around",
    alingItems: "center",
  },
};
