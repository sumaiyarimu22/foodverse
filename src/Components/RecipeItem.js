import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const RecipeItem = () => {
  const { id } = useParams();

  const { data: recipe, loading, error } = useFetch(id);

  return (
    <div>
      <h1>recipeItem</h1>
    </div>
  );
};

export default RecipeItem;
