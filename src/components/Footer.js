const Footer = (props) => {
  console.log(props);
  return (
    <>
      <footer>
        <p> counter value {props.count}</p>;
      </footer>
    </>
  );
};

export default Footer;
