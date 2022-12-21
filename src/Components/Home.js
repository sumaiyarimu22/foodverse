import Recipe from "./Recipe";

const Home = ({ recipes, loading, error }) => {
  return (
    <div className="home container mx-auto py-10 flex flex-wrap gap-10 justify-center">
      {recipes?.length > 0 &&
        recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.recipe_id} />
        ))}
    </div>
  );
};

export default Home;
