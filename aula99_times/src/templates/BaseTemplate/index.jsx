import Footer from "../../components/Footer";
import Header from "../../components/Header";

const BaseTemplate = ({children, ...rest}) => {
  return (
    <div {...rest}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default BaseTemplate;
