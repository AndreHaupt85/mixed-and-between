import Link from "next/link";
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
                            <Link href={"/library"}>
                                <Backbutton>Back</Backbutton>
                            </Link>
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
                                <GlassImageBox>
                                    <Image
                                        src={alcoholic}
                                        alt="alcoholic image"
                                        width={40}
                                        height={40}
                                        layout="responsive"
                                    />
                                </GlassImageBox>
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
justify-content: center;
align-items: center;
margin-bottom: 100px;
margin-left: 20px;
margin-right: 20px;
color: #E6DCCF;
`

const Name = styled.h2`
padding: 15px;
min-height: 130px;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
grid-column: 1 / 4;
`

const Backbutton = styled.button`
width: 60px;
height: 40px;
margin: 10px;
align-self: center;
grid-column: 4 / 5;
`

const Cocktailimage = styled.div`
height: 280px;
/* padding: 15px; */
margin-bottom: 20px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
grid-column: 1 / 5;
`

const GlassBox = styled.div`
width: 135px;
min-height: 50px;
padding: 15px;
margin-right: 5px;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
grid-column: 1 / 3;
`

const Alcoholic = styled.div`
width: 135px;
min-height: 50px;
padding: 15px;
margin-left: 5px;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
grid-column: 3 / 5;
`

const GlassImageBox = styled.div`
width: 44px;
justify-content: center;
align-items: center;
`

const SpiritsBox = styled.ul`
width: 135px;
min-height: 100px;
padding: 15px;
margin-right: 5px;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
grid-column: 1 / 3;
`

const ModifierBox = styled.ul`
width: 135px;
min-height: 100px;
padding: 15px;
margin-left: 5px;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
grid-column: 3 / 5;
`

const FillerBox = styled.ul`
width: 135px;
min-height: 100px;
padding: 15px;
margin-right: 5px;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
grid-column: 1 / 3;
`

const DecorationBox = styled.ul`
width: 135px;
min-height: 100px;
padding: 15px;
margin-left: 5px;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
grid-column: 3 / 5;
`

const InstructionBox = styled.ul`
min-height: 100px;
padding: 15px;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
grid-column: 1 / 5;
`

const CocktailType = styled.div`
width: 135px;
min-height: 100px;
padding: 15px;
margin-right: 5px;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
grid-column: 1 / 3;
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
