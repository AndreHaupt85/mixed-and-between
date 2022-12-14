import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import getAllRecipes from '../src/services/recipeService';

export async function getServerSideProps() {
  const recipes = await getAllRecipes();
  return {
    props: {
      recipes: recipes,
    },
  };
}

export default function Library({ recipes }) {
  return (
    <LibraryBox>
      {recipes.map((recipe) => (
        <Cocktail key={recipe.id}>
          <Link href={`/details/${recipe.id}`} passHref>
            <CocktailLink>{recipe.name}</CocktailLink>
          </Link>
        </Cocktail>
      ))}
    </LibraryBox>
  );
}

const LibraryBox = styled.ul``;

const Cocktail = styled.li`
  color: #debfab;
  list-style: none;
  font-size: 22px;
`;

const CocktailLink = styled.a`
  color: #de9b72;
  text-decoration: none;
  &:visited {
    color: #de9b72;
  }
`;
