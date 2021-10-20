import { useState, useEffect, useCallback } from "react";

export const useMyLocation = () => {
  const defaultInfos = {
    name: "",
    code: "",
    city: "",
    longitude: "",
    latitude: "",
  };
  const [info, setInfo] = useState(defaultInfos);
  const [error, setError] = useState(null);

  const fetchLocation = useCallback(
    () =>
      fetch("https://ip.nf/me.json")
        .then((response) => response.json())
        .then((data) =>
          setInfo({
            ...info,
            name: data.ip.country,
            code: data.ip.country_code,
            city: data.ip.city,
            longitude: data.ip.longitude,
            latitude: data.ip.latitude,
          })
        )
        .catch(setError),
    [info]
  );

  useEffect(() => {
    fetchLocation();
    localStorage.setItem("country", info.name);
  }, [fetchLocation, info.name]);

  return [info, error];
};
