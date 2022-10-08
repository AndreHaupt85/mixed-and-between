import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import getAllRecipes from "../src/services/recipeService"
import Nav from "../components/Nav";
import decorationcornerlefttop from "../src/topleft.svg";
import decorationcornerrighttop from "../src/topright.svg";
import decorationcornerrightbottom from "../src/bottomright.svg";
import decorationcornerleftbottom from "../src/bottomleft.svg";
import decorationtop from "../src/top.png";
import decorationbottom from "../src/bottom.png"

export async function getServerSideProps() {
    const recipes = await getAllRecipes();
    console.log(recipes);
    return {
        props: {
            recipes: recipes,
        },
    };
}

export default function Library({ recipes }) {
    return (
        <Outerborder>
            <Midborder>
                <Innerborder>
                    <Topbox>
                        <Topleftcorner>
                            <Image
                                src={decorationcornerlefttop}
                                alt="menu icon"
                                width={70}
                                height={70}
                            />
                        </Topleftcorner>
                        <Topmid>
                            <Image
                                src={decorationtop}
                                alt="menu icon"
                                width={300}
                                height={50}
                            />
                        </Topmid>
                        <Toprightcorner>
                            <Image
                                src={decorationcornerrighttop}
                                alt="menu icon"
                                width={70}
                                height={70}
                            />
                        </Toprightcorner>
                    </Topbox>
                    <Navbox>
                        <Nav />
                    </Navbox>
                    <Librarybox>
                        {recipes.map((recipe) => (
                            <Cocktail key={recipe.id}>
                                <Link href={`/details/${recipe.id}`} passHref>
                                    <CocktailLink>{recipe.name}</CocktailLink>
                                </Link>
                            </Cocktail>
                        ))}
                    </Librarybox>
                    <Bottombox>
                        <Bottomleftcorner>
                            <Image
                                src={decorationcornerleftbottom}
                                alt="menu icon"
                                width={70}
                                height={70}
                            />
                        </Bottomleftcorner>
                        <Bottommid>
                            <Image
                                src={decorationbottom}
                                alt="menu icon"
                                width={300}
                                height={50}
                            />
                        </Bottommid>
                        <Bottomrightcorner>
                            <Image
                                src={decorationcornerrightbottom}
                                alt="menu icon"
                                width={70}
                                height={70}
                            />
                        </Bottomrightcorner>
                    </Bottombox>
                </Innerborder>
            </Midborder>
        </Outerborder>
    )
}

const Outerborder = styled.div`
	border: 2px solid #DE9B72;
   	height: 100%;
    width: 98vw;
    padding: 6px;
    margin: 0 auto;
`

const Midborder = styled.div`
    border: 6px solid #DE9B72;
    height: 100%;
    width: 100%;
    padding: 6px;
    margin: auto;
`

const Innerborder = styled.div`
	position: relative;
	border: 2px solid #DE9B72;
    height: 100%;
    width: 100%;
    margin: auto;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 8% 10% 74% 8%;
`

const Topbox = styled.div`
grid-column: 1 / 5;
grid-row: 1 / 2;
display: flex;
justify-content: space-between;
height: 100%;
`

const Topleftcorner = styled.div`
`

const Topmid = styled.div`
`

const Toprightcorner = styled.div`
`

const Navbox = styled.div`
grid-column: 1 / 5;
grid-row: 2 / 3;
justify-self: center;
align-self: flex-start;
`

const Librarybox = styled.ul`
grid-column: 1 / 4;
grid-row: 3 / 4;
align-self: center;
margin: 0;
margin-bottom: 40px;
`
const Cocktail = styled.li`
color: #DEBFAB;
list-style: none;
font-size: 25px;
`

const Bottombox = styled.div`
grid-column: 1 / 4;
grid-row: 4 / 5;
display: flex;
justify-content: space-between;
align-self: flex-end;
`

const Bottomleftcorner = styled.div`
`

const Bottommid = styled.div`
align-self: flex-end;
`

const Bottomrightcorner = styled.div`
`

const CocktailLink = styled.a`
color: #E6DCCF;
&:visited {
    color: #727EA3;
}
`

// #CFD4E6
// #727EA3
// #807C59