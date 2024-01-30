import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, serData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => serData(data));
  }, []);

  return { data };
}
