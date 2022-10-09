import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";
import { useState } from "react";

export default function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setwordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value
        setwordEntered(searchWord);
        const newFilter = data.recipes.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    }

    const clearInput = () => {
        setFilteredData([]);
        setwordEntered("");
    }

    return (
        <Search>
            <SearchInputs>
                <Inputfield type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
                <SearchImage>
                    {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput} />}
                </SearchImage>
            </SearchInputs>
            {filteredData.length != 0 && (
                <DataResult>
                    {filteredData.slice(0, 15).map((recipe, key) => {
                        return (
                            <Link key={recipe.id} href={`/details/${recipe.id}`} passHref>
                                <DataItemBox>
                                    <DataItem>{recipe.name}</DataItem>
                                </DataItemBox>
                            </Link>
                        )
                    })}
                </DataResult>
            )}
        </Search>
    )
}

const Search = styled.div`
margin-top: 40px;
grid-column: 1 / 4;
grid-row: 4 / 5;
justify-self: center;
align-self: flex-start;
`

const SearchInputs = styled.div`
margin-top: 30px;
display: flex;
`

const Inputfield = styled.input`
background-color: white;
border: 0;
border-radius: 2px;
border-top-right-radius: 0px;
border-bottom-right-radius: 0px;
font-size: 18px;
padding: 15px;
height: 30px;
width: 250px;
`

const DataResult = styled.div`
margin-top: 5px;
width: 250px;
height: 100px;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
overflow: hidden;
overflow-y: auto;
z-index: -5;
&::-webkit-scrollbar {
    display: none;
}
`

const DataItemBox = styled.a`
width: 100%;
height: 30px;
display: flex;
align-items: center;
color: black;
text-decoration: none;
&:hover  {
    background-color: lightgray;
}
`

const DataItem = styled.p`
margin-left: 20px;
`

const SearchImage = styled.div`
height: 30px;
width: 30px;
background-color: white;
display: grid;
place-items: center;
`