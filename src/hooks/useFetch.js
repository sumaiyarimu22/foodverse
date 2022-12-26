import { useEffect, useState } from "react";
export const useFetch = (id) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getRecipeItemData = async () => {
      try {
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        if (!res.ok)
          throw new Error("something went wrong ,please try again later!");
        const data = await res.json();
        setData(data?.data?.recipe);
        setLoading(false);
      } catch (err) {
        setError(err.message);
      }
    };
    getRecipeItemData();
  }, []);

  return { data, loading, error };
};
