import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import icon from "../src/icons/library_icon.svg"
import getAllRecipes from "../src/services/recipeService"

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
        <>
            <Headlinebox>
                <Headline>Library</Headline>
                <div>
                    <Image
                        src={icon}
                        alt="menu icon"
                        width={70}
                        height={70}
                    />
                </div>
            </Headlinebox>
            <Librarybox>
                {recipes.map((recipe) => (
                    <Cocktail key={recipe.id}>
                        <Link href={`/details/${recipe.id}`}>
                            <a>{recipe.name}</a>
                        </Link>
                    </Cocktail>
                ))}
            </Librarybox>
        </>
    )
}

const Headlinebox = styled.div`
color: #FFBA08;
background: #7D451B;
padding: 0;
margin: 0;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 10vh;
padding: 30px;
`

const Headline = styled.h1`
color: #FFBA08;
background: #7D451B;
padding: 0;
margin: 0;
font-size: 40px;
`

const Librarybox = styled.ul`
background: green;
height: 90vh;
margin: 0;
`
const Cocktail = styled.li`
font-size: 25px;
`