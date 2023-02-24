import axios from "axios";
import { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";

const useFetch = (url, isdatacovid) => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [iserr, setiserr] = useState(false);
  let getapi = async () => {
    const ourRequest = axios.CancelToken.source(); // <-- 1st step
    try {
      const response = await axios.get(url, {
        cancelToken: ourRequest.token, // <-- 2nd step
      });
      if (response.data && response.data.length > 0 && isdatacovid === true) {
        response.data.map((item) => {
          item.Date = format(parseISO(item.Date), "dd/MM/yyyy");
          return item;
        });
      }
      setdata(response.data);
      setloading(false);
      setiserr(false);
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log(err.message);
      } else {
        setloading(false);
        setiserr(true);
      }
      console.log(err);
    }
    return () => {
      ourRequest.cancel("loi roi");
    };
  };

  useEffect(() => {
    getapi();
  }, [url]);

  return { data, loading, iserr };
};

export default useFetch;
