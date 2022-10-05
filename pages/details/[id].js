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
import alcoholic from "../../src/icons/alcoholic.svg"


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
                        <TopBox>
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
                        </TopBox>
                        <NavBox>
                            <Nav />
                        </NavBox>
                        <DetailsBox>
                            <Name> {recipe.name}</Name>
                            <Backbutton>Back</Backbutton>
                            <Cocktailimage>
                                <Image
                                    src={recipe.image}
                                    alt="${recipe.name} image"
                                    width={300}
                                    height={300}
                                />
                            </Cocktailimage>
                            <GlassBox>
                                {
                                    recipe.glass.map((glass, index) => {
                                        return <p key={index}>{glass.name}</p>;
                                    })
                                }
                            </GlassBox>
                            <Alcoholic>
                                <div>
                                    <Image
                                        src={alcoholic}
                                        alt="alcoholic image"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                            </Alcoholic>
                            <SpiritsBox>Spirits
                                {recipe.spirits.map((spirit, index) => {
                                    return <li key={index}>{spirit.name}: {spirit.amount}</li>;
                                })}
                            </SpiritsBox>
                            <ModifierBox>Modifyer
                                {recipe.modifyer.map((modifyer, index) => {
                                    return <li key={index}>{modifyer.name}: {modifyer.amount}</li>;
                                })}
                            </ModifierBox>
                            <FillerBox>Filler
                                {recipe.filler.map((filler, index) => {
                                    return <li key={index}>{filler.name}: {filler.amount}</li>;

                                })}
                            </FillerBox>
                            <DecorationBox>Dekoration
                                {recipe.decoration.map((decoration, index) => {
                                    return <li key={index}>{decoration.name}: {decoration.amount}</li>;
                                })}
                            </DecorationBox>
                            <InstructionBox>{recipe.instructions}</InstructionBox>
                            <CocktailType>Cocktailart: {recipe.category}</CocktailType>
                        </DetailsBox>
                        <BottomBox>
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
                        </BottomBox>

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
    grid-template-rows: 3% 9% 80% 8%;
`

const TopBox = styled.div`
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

const NavBox = styled.div`
grid-column: 1 / 5;
grid-row: 2 / 3;
justify-self: center;
align-self: flex-start;
`

const DetailsBox = styled.div`
grid-column: 1 / 5;
grid-row: 3 / 4;
display: grid;
grid-template-columns: 70px 70px 70px 70px;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
margin-bottom: 80px;
margin-left: 20px;
margin-right: 20px;
color: #E6DCCF;
`

const Name = styled.h2`
border: 3px solid gold;
padding: 15px;
height: 130px;
border-radius: 10px;
box-shadow: 1px 5px 20px 10px #C68865;
grid-column: 1 / 4;
grid-row: 1 / 2;
`

const Backbutton = styled.button`
width: 60px;
height: 40px;
margin: 10px;
align-self: center;
grid-column: 4 / 5;
grid-row: 1 / 2;
`

const Cocktailimage = styled.div`
border: 3px solid gold;
padding: 15px;
border-radius: 10px;
box-shadow: 1px 5px 20px 10px #C68865;
grid-column: 1 / 5;
grid-row: 2 / 3;
`

const GlassBox = styled.div`
border: 3px solid gold;
padding: 15px;
border-radius: 10px;
box-shadow: 1px 5px 20px 10px #C68865;
grid-column: 1 / 3;
grid-row: 3 / 4;
`

const Alcoholic = styled.p`
border: 3px solid gold;
padding: 15px;
border-radius: 10px;
box-shadow: 1px 5px 20px 10px #C68865;
grid-column: 3 / 5;
grid-row: 3 / 4;
`

const SpiritsBox = styled.ul`
border: 3px solid gold;
padding: 15px;
border-radius: 10px;
box-shadow: 1px 5px 20px 10px #C68865;
grid-column: 1 / 3;
grid-row: 4 / 5;
`

const ModifierBox = styled.ul`
border: 3px solid gold;
padding: 15px;
border-radius: 10px;
box-shadow: 1px 5px 20px 10px #C68865;
grid-column: 3 / 5;
grid-row: 4 / 5;
`

const FillerBox = styled.ul`
border: 3px solid gold;
padding: 15px;
border-radius: 10px;
box-shadow: 1px 5px 20px 10px #C68865;
grid-column: 1 / 3;
grid-row: 5 / 6;
`

const DecorationBox = styled.ul`
border: 3px solid gold;
padding: 15px;
border-radius: 10px;
box-shadow: 1px 5px 20px 10px #C68865;
grid-column: 3 / 5;
grid-row: 5 / 6;
`

const InstructionBox = styled.ul`
border: 3px solid gold;
padding: 15px;
border-radius: 10px;
box-shadow: 1px 5px 20px 10px #C68865;
grid-column: 1 / 5;
grid-row: 6 / 7;
`

const CocktailType = styled.div`
border: 3px solid gold;
padding: 15px;
border-radius: 10px;
box-shadow: 1px 5px 20px 10px #C68865;
grid-column: 1 / 3;
grid-row: 7 / 8;
`


const BottomBox = styled.div`
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
