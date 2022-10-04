import Image from "next/image";
import styled from "styled-components";
import { getRecipeById } from "../../src/services/recipeService";
import decorationcornerlefttop from "../../src/topleft.svg";
import decorationcornerrighttop from "../../src/topright.svg";
import decorationtop from "../../src/top.png";
import decorationcornerrightbottom from "../../src/bottomright.svg";
import decorationcornerleftbottom from "../../src/bottomleft.svg";
import decorationbottom from "../../src/bottom.png"
import Nav from "../../components/Nav";


export async function getServerSideProps(context) {
    const { id } = context.params;
    const recipe = await getRecipeById(id);

    return {
        props: {
            recipe: recipe
        },
    };
}

export default function Detailspage({ recipe }) {

    return (
        <>
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
                        <Detailsbox>
                            <Name> {recipe.name}</Name>
                            <ul>Spirits</ul>
                            {recipe.spirits.map((spirit, index) => {
                                return <li key={index}>{spirit.name}: {spirit.amount}</li>;
                            })}
                            <ul>Modifyer</ul>
                            {recipe.modifyer.map((modifyer, index) => {
                                return <li key={index}>{modifyer.name}: {modifyer.amount}</li>;
                            })}
                            <ul>Filler</ul>
                            {recipe.filler.map((filler, index) => {
                                return <li key={index}>{filler.name}: {filler.amount}</li>;
                            })}
                            <ul>Dekoration</ul>
                            {recipe.decoration.map((decoration, index) => {
                                return <li key={index}>{decoration.name}: {decoration.amount}</li>;
                            })}
                            <p>{recipe.instructions}</p>
                            <p>alcoholic</p>
                            <p>Cocktailart {recipe.category}</p>
                            <ul>glass</ul>
                            {
                                recipe.glass.map((glass, index) => {
                                    return <GlassName key={index}>{glass.name}</GlassName>;
                                })
                            }
                            {
                                recipe.glass.map((glass, index) => {
                                    return (
                                        <GlassImage key={index}>
                                            <Image
                                                src={glass.image}
                                                alt="${glass.name} image"
                                                width={80}
                                                height={80}
                                            />
                                        </GlassImage>
                                    )
                                })
                            }
                            <Cocktailimage>
                                <Image
                                    src={recipe.image}
                                    alt="${recipe.name} image"
                                    width={300}
                                    height={300}
                                />
                            </Cocktailimage>
                        </Detailsbox>
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
        </>
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

const Detailsbox = styled.div`
grid-column: 1 / 5;
grid-row: 3 / 4;
margin-bottom: 30px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr 1fr;
margin: 20px
`

const Name = styled.h2`
grid-column: 1 / 4;
grid-row: 1 / 2;
`

const Cocktailimage = styled.div`
width: 250px;
grid-column: 1 / 4;
grid-row: 2 / 4;
`

const GlassName = styled.li`
grid-column: 4 / 5;
grid-row: 2 / 3;
`

const GlassImage = styled.div`
grid-column: 4 / 5;
grid-row: 3 / 4;
`


const Bottombox = styled.div`
grid-column: 1 / 5;
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
