const Footer = (props) => {
  console.log(props);
  return (
    <>
      <footer>
        <p>esto es un footer con propdrill {props.count}</p>
      </footer>
    </>
  );
};

export default Footer;
