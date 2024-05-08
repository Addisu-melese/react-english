import { useEffect } from "react"
import { useState } from "react"

function useCurrencyInfo(currency){
    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${currency}`);
        const jsonData = await response.json();
        setData(jsonData.rates);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currency]);
    return data
    
}
export default useCurrencyInfo