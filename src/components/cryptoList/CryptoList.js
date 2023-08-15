import { useContext } from "react";
import classes from "./CryptoList.module.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";
import ThemeContext from "../../contexts/ThemeContext";
import Commafy from "../../utils/commafy";
const CryptoListItem = ({ cryptoList }) => {
  const themeValues = useContext(ThemeContext);
  return (
    <table className={classes.list}>
      <thead>
        <tr className={classes.row}>
          <td>No.</td>
          <td>Name</td>
          <td>Last Price</td>
          <td>24h</td>
          <td className={classes.column}>
            Highest
            <small>{"(in 24 hour)"}</small>
          </td>
          <td className={classes.column}>
            Lowest
            <small>{"(in 24 hour)"}</small>
          </td>
        </tr>
      </thead>
      <tbody>
        {cryptoList.length > 0 ? (
          cryptoList.map((currency, index) => {
            return (
              <tr className={classes.row} key={currency.id}>
                <td>{index + 1}</td>
                <td className={classes["currency-name"]}>
                  <img src={currency.image} alt={currency.name} />
                  <p>{currency.name}</p>
                </td>
                <td>
                  $ <Commafy num={currency.current_price} />
                </td>
                <td
                  style={{
                    color:
                      currency.price_change_percentage_24h > 0
                        ? themeValues.theme.green.color
                        : themeValues.theme.orange.color,
                  }}
                >
                  {currency.price_change_percentage_24h > 0 ? (
                    <div className={classes["change-percent"]}>
                      <MdOutlineArrowDropUp />
                      {currency.price_change_percentage_24h.toFixed(2)}%
                    </div>
                  ) : (
                    <div className={classes["change-percent"]}>
                      <MdOutlineArrowDropDown />
                      {currency.price_change_percentage_24h.toFixed(2)}%
                    </div>
                  )}
                </td>
                <td>
                  $ <Commafy num={currency.high_24h} />
                </td>
                <td>
                  $ <Commafy num={currency.low_24h} />
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td className={classes["no-content"]}>
              <div>Nothing Found!</div>
              <div>Check for typo in your search</div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default CryptoListItem;
