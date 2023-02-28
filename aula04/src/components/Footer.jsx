const Footer = (props) => {
 
    return (
        <footer>
          <center>{props.title || "Valor default"}</center>
        </footer>
      );
    
};

export default Footer;
