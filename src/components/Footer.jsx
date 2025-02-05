const Footer = (props) => {
    console.log(props);
    return (
      <>
        <footer>
          <p>esto es un footer hola {props.count}</p>

        </footer>
      </>
    );
  };
  
  export default Footer;