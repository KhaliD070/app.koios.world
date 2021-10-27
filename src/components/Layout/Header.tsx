import { Link } from "react-router-dom";
import koiosLogo from "../../assets/images/logos/koios-logo.svg";

export const Header = () => {
  return (
    <header className="header container">
      <Link to="/" className="header__img-container">
        <img className="header__img" src={koiosLogo} alt="Koios logo" />
        
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossorigin="anonymous"
 
      </Link>


 
    </header>
  );
};
