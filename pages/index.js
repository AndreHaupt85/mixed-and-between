import SearchBar from '../components/Searchbar';
import Gallery from '../components/Gallery';
import getAllRecipes from '../src/services/recipeService';

export async function getServerSideProps() {
  const recipes = await getAllRecipes();
  return {
    props: {
      recipes: recipes,
    },
  };
}

export default function Home({ recipes }) {
  return (
    <>
      <Gallery recipes={recipes} />
      <SearchBar placeholder="Enter a Cocktailname..." recipes={recipes} />
    </>
  );
}
