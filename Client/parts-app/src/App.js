import React from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState({ parts: [], isFetching: false });
  const [isMounted, setIsMounted] = useState(false);

  const getData = async () => {
    setData({ isFetching: true });
    const serviceResponse = await getParts();
    setData({ parts: serviceResponse.parts, isFetching: false });
  };

  const fetchParts = () => {
    try {
      getData();
      setInterval(() => getData(), GLOBAL.interval);
    } catch (error) {
      console.error(error);
      setData({ parts: data.parts, isFetching: false });
    }
  };

  useEffect(
    () => {
      setIsMounted(true);
      if (isMounted && data.parts?.length === 0 && !data.isFetching) {
        fetchParts();
      }

      return () => {
        setIsMounted(false);
      };
    },
    [data, isMounted]
  );

  return <div className="App" />;
};

export default App;
