import styled from 'styled-components';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Gallery({ recipes }) {
  const [xPosition, setXPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setXPosition((previousXPosition) => {
        if (previousXPosition < recipes.length * 280 - 280) {
          return previousXPosition + 280;
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
          <Link key={recipes.id} href={`/details/${cocktail.id}`}>
            <CocktailBox position={xPosition}>
              <Name>{cocktail.name}</Name>
              <ImageBox>
                <Image
                  src={cocktail.image}
                  alt="cocktail image"
                  width={10}
                  height={10}
                  layout="responsive"
                />
              </ImageBox>
            </CocktailBox>
          </Link>
        );
      })}
    </GalleryBox>
  );
}

const GalleryBox = styled.div`
  max-width: 280px;
  height: 355px;
  display: flex;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const CocktailBox = styled.div`
  max-width: 290px;
  max-height: 220px;
  transition: transform 2s ease-in-out;
  transform: ${(props) => 'translateX(-' + props.position + 'px)'};
`;

const ImageBox = styled.div`
  width: 280px;
  height: 280px;
`;

const Name = styled.p`
  color: #de9b72;
  font-size: 20px;
  height: 30px;
  display: flex;
  justify-content: center;
`;
