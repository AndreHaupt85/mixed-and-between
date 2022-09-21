import Image from "next/image";
import styled from "styled-components";
import icon from "../src/cocktail_icon.svg"
import cocktail from "../src/old_fashioned.jpeg"



console.log(icon);

export default function Home() {
  return (
    <div>
      <Headlinebox>
        <Headline>Cocktail App</Headline>
        <div>
          <Image
            src={icon}
            alt="menu icon"
            width={70}
            height={70}
          />
        </div>
      </Headlinebox>
      <Cocktail>
        <Image
          src={cocktail}
          alt="menu icon"
        />
        <Cocktailname>
          Old Fashioned
        </Cocktailname>
      </Cocktail>
      <Search>
        <form>
          <label for="quicksearch" ></label>
          <input type="text" id="quicksearch" />
          <button>Go</button>
        </form>
      </Search>
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

// Random Cocktail
const Cocktail = styled.div`
color: #FFBA08;
background: green;
padding: 0;
margin: 0;
display: flex;
flex-direction: column;
align-items: center;
height: 80vh;
padding-top: 20px;
padding-left: 20px;
padding-right: 20px;
`

const Cocktailname = styled.p`
font-size: 45px;
`
// Quicksearch
const Search = styled.div`
color: #FFBA08;
background: blue;
padding: 0;
margin: 0;
font-size: 45px;
height: 10vh;
display: flex;
justify-content: center;
` 