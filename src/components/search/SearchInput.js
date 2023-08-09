import { Fragment, useEffect, useRef, useState } from "react";
import classes from "./SearchInput.module.css";
import CryptoList from "../cryptoList/CryptoList";
import { MdSearch } from "react-icons/md";
const SearchInput = ({ cryptoList }) => {
  const [searchValue, setSearchValue] = useState("");
  const [cryptoCurrencyList, setCryptoCurrencyList] = useState(cryptoList);
  const inputElement = useRef();

  const handleInputChange = () => {
    const inputValue = inputElement.current.value.toLowerCase();
    setSearchValue(inputValue);
    console.log(searchValue);
  };

  useEffect(() => {
    if (searchValue.length > 0) {
      const filteredList = cryptoCurrencyList.filter((currency) => {
        return currency.name.toLowerCase().includes(searchValue);
      });
      console.log(filteredList);
      setCryptoCurrencyList(filteredList);
    } else {
      setCryptoCurrencyList(cryptoList);
    }
  }, [searchValue]);

  return (
    <Fragment>
      <form className={classes.form}>
        <input
          type="text"
          placeholder="Search..."
          autoComplete="off"
          ref={inputElement}
          onChange={() => {
            handleInputChange();
          }}
        />
        <button>
          <MdSearch />
        </button>
      </form>
      <div className={classes.container}>
        <CryptoList cryptoList={cryptoCurrencyList} />
      </div>
    </Fragment>
  );
};

export default SearchInput;
