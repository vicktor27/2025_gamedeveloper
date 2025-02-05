const Footer = (props) => {
  console.log(props);
  return (
    <>
      <footer>
        <p> Esto es un footer {props.count}</p>;
      </footer>
    </>
  );
};

export default Footer;
