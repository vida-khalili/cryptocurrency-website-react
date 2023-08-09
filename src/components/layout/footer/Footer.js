import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.footer}>
      developed by{" "}
      <a href="https://vidakhalili.ir" target="_blank" rel="noreferrer">
        Vida Khalili
      </a>
    </div>
  );
};

export default Footer;
