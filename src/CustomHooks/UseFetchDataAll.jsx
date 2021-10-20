import { useState, useEffect, useCallback } from "react";

export const useFetchDataAll = (country) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataAll = useCallback(() => {
    setLoading(true);
    if (country === "noCountry") {
      fetch(`https://covid-api.mmediagroup.fr/v1/cases`)
        .then((response) => response.json())
        .then((data) => setData(data))
        .then(() => setLoading(false))
        .catch(setError);
    } else {
      fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${country}`)
        .then((response) => response.json())
        .then((data) => setData(data.All))
        .then(() => setLoading(false))
        .catch(setError);
    }
  }, [country]);

  useEffect(() => {
    fetchDataAll();
  }, [fetchDataAll]);

  return [data, loading, error];
};
