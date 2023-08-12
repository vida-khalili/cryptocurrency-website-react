import { useEffect, useState } from "react";
import "./App.css";
import ThemeContext from "./contexts/ThemeContext";
import Layout from "./components/layout/Layout";
import SearchInput from "./components/search/SearchInput";
import Loading from "./components/loading/Loading";
import themeConfig from "./configs/theme";
function App() {
  const [cryptoList, setCryptoList] = useState([]);
  const [refreshCount, setRefreshCount] = useState(0);

  const [loading, setLoading] = useState(true);
  const fetchApi = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const apiCryptoList = await response.json();
    setCryptoList(apiCryptoList);
    setLoading(false);
  };

  useEffect(() => {
    fetchApi();
    let refreshInterval = setInterval(() => {
      setRefreshCount((refreshCount) => refreshCount + 1);
    }, 10000);
    return () => {
      clearInterval(refreshInterval);
    };
  }, [refreshCount]);
  return (
    <ThemeContext.Provider value={{ theme: themeConfig }}>
      <div className="App">
        <Layout>
          {loading ? <Loading /> : <SearchInput cryptoList={cryptoList} />}
        </Layout>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
