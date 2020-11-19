import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [loader, setLoader] = useState(null);
  const [error, setError] = useState("");

  const [results, setResults] = useState([]);

  const SearchApi = async (searchTerm) => {
    setLoader(true);
    setResults([]);
    try {
      const response = await yelp.get("/search", {
        params: { limit: 50, term: searchTerm, location: "san jose" },
      });
      // console.log(response);
      setResults(response.data.businesses);
    } catch (e) {
      console.log(e);
      setLoader(false);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    SearchApi("pasta");
  }, []);

  return [SearchApi, loader, error, results];
};
