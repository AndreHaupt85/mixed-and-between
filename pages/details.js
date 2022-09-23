import Image from "next/image";
import styled from "styled-components";
import icon from "../src/details_icon.svg"

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
                <Cocktailname>Tequila Sunrise</Cocktailname>
                <Cocktailimage>Cocktailpicture</Cocktailimage>
                <Cocktailalc>Alcoholoc or not</Cocktailalc>
                <Cocktailglas>Glas</Cocktailglas>
                <Cocktailspirits>Spirits</Cocktailspirits>
                <Cocktailmodifyer>Modifyer</Cocktailmodifyer>
                <Cocktailfiller>Filler</Cocktailfiller>
                <Cocktailingreciance>Ingredience</Cocktailingreciance>
                <Cocktaildescription>Description</Cocktaildescription>
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

const Cocktailname = styled.p`

`

const Cocktailimage = styled.p`

`

const Cocktailalc = styled.p`

`

const Cocktailglas = styled.p`

`

const Cocktailspirits = styled.p`

`

const Cocktailmodifyer = styled.p`

`

const Cocktailfiller = styled.p`

`

const Cocktailingreciance = styled.p`

`

const Cocktaildescription = styled.p`

`