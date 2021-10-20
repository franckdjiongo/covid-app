import { useState, useEffect, useCallback } from "react";

export const useFetchDataYesterday = (country, dateYesterday, status) => {
  const [data, setData] = useState("");
  const [error, setError] = useState(null);

  const fetchDataYesterday = useCallback(
    () =>
      fetch(
        `https://covid-api.mmediagroup.fr/v1/history?country=${country}&status=${status}`
      )
        .then((response) => response.json())
        .then((data) => setData(data.All.dates[dateYesterday]))
        .catch(setError),
    [country, dateYesterday, status]
  );

  useEffect(() => {
    fetchDataYesterday();
  }, [fetchDataYesterday]);

  return [data, error];
};
