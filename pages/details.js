import Image from "next/image";
import styled from "styled-components";
import icon from "../src/icons/details_icon.svg"

export default function Library() {
    return (
        <div>
            <Headlinebox>
                <Headline>Details</Headline>
                <div>
                    <Image
                        src={icon}
                        alt="menu icon"
                        width={70}
                        height={70}
                    />
                </div>
            </Headlinebox>
            <Detailsbox>
                <p>Tequila Sunrise</p>
                <p>Cocktailpicture</p>
                <p>Alcoholic or not</p>
                <p>Glas</p>
                <p>Spirits</p>
                <p>Modifyer</p>
                <p>Filler</p>
                <p>Ingridence</p>
                <p>Description</p>
            </Detailsbox>
        </div>
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

const Detailsbox = styled.div`
background: green;
min-height: 90vh;
display: grid;
`