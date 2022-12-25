import { Link } from "react-router-dom";
const Recipe = ({ recipe }) => {
  return (
    <div className="recipe w-80 overflow-hidden bg-white/75 rounded-2xl p-5 shadow-xl shadow-red-100 border-2 border-white flex flex-col gap-5">
      <div className="img h-40 overflow-hidden flex justify-center items-center rounded-lg">
        <img
          src={recipe.image_url}
          alt={recipe.title}
          className="block w-full"
        />
      </div>
      <div className="texts">
        <span className="publisher text-xs uppercase text-sky-400 font-semibold tracking-widest">
          {recipe.publisher}
        </span>
        <h2 className="title text-2xl font-semibold truncate">
          {recipe.title}
        </h2>
        <Link
          to={`/recipe-item/${recipe.id}`}
          className="bg-gradient-to-br from-rose-400 to-red-600 text-rose-50 p-3 px-5 rounded-lg text-sm uppercase font-semibold tracking-wider mt-2 inline-block shadow-md shadow-red-200 hover:shadow-lg hover:shadow-red-300 duration-300"
        >
          view recipe
        </Link>
      </div>
    </div>
  );
};

export default Recipe;
