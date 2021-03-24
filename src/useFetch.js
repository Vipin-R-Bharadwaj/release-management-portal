import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // const abortCont = new AbortController();
    // fetch(url, { signal: abortCont.signal })
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data from endpoint");
        }
        return res.json();
      })
      .then((info) => {
        // var result = Object.keys(info).map((key) => [key, info[key]]);
        // setData(result);
        setData(info);
      })
      .catch((err) => {
        if (err.name === "AboutError") console.log(err);
      });
    // return () => abortCont.abort();
  }, [url]);
  return data;
};

export default useFetch;
