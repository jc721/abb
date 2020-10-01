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

  const renderListOfParts =
    data.parts?.length > 0 ? (
      data.parts.map(part => {
        return (
          <>
            <h2 className="alignLeft">{part.name}</h2>
            <div className="part" />
          </>
        );
      })
    ) : (
      <h2 data-testid="noPartsFound">No Parts Found</h2>
    );

  const content = data.isFetching ? <h1>Loading...</h1> : <>{renderListOfParts}</>;

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div className="App">{content}</div>
    </>
  );
};

export default App;
