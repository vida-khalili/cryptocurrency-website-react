import ThemeContext from "../../../contexts/ThemeContext";
import classes from "./Header.module.css";
import { useContext } from "react";
const Header = () => {
  const themeValues = useContext(ThemeContext);
  return (
    <div
      className={classes.header}
      style={{ backgroundColor: themeValues.theme.red.color }}
    >
      <h1>Crypto Prices</h1>
    </div>
  );
};

export default Header;
