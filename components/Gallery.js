import styled from 'styled-components';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Gallery({ recipes }) {
  const [xPosition, setXPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setXPosition((previousXPosition) => {
        if (previousXPosition < recipes.length * 258) {
          return previousXPosition + 258;
        } else {
          return 0;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [recipes]);

  return (
    <GalleryBox>
      {recipes.map((cocktail) => {
        return (
          <CocktailBox key={recipes.id} position={xPosition}>
            <Name>{cocktail.name}</Name>
            <ImageBox>
              <Image
                src={cocktail.image}
                alt="cocktail image"
                width={300}
                height={300}
                layout="responsive"
              />
            </ImageBox>
          </CocktailBox>
        );
      })}
    </GalleryBox>
  );
}

const GalleryBox = styled.div`
  width: 80vw;
  height: 40vh;
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  justify-items: center;
  justify-self: center;
  overflow: hidden;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: row;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  padding-left: 40px;
  padding-right: 40px;
`;

const CocktailBox = styled.div`
  display: grid;
  grid-template-rows: 20% 20%;
  margin-right: 10px;
  margin-right: 10px;
  transition: transform 2s ease-in-out;
  transform: ${(props) => 'translateX(-' + props.position + 'px)'};
`;

const ImageBox = styled.div`
  height: 28vh;
  width: 60vw;
`;

const Name = styled.p`
  justify-self: center;
  font-size: 20px;
`;
