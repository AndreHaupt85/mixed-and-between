import Image from "next/image";
import styled from "styled-components";
import icon from "../src/library_icon.svg"

export default function Library() {
    return (
        <div>
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
                Old Fashioned
            </Librarybox>
        </div>
    )
}

// Header
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

const Librarybox = styled.div`
background: green;
height: 90vh;
`