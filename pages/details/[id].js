import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { getRecipeById } from '../../src/services/recipeService';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import NoDrinksIcon from '@mui/icons-material/NoDrinks';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const recipe = await getRecipeById(id);

  return {
    props: {
      recipe: recipe,
    },
  };
}

export default function Detailspage({ recipe }) {
  return (
    <>
      <DetailsBox>
        <Name> {recipe.name}</Name>
        <Link href={'/library'}>
          <BackButton>Back</BackButton>
        </Link>
        <CocktailImage>
          <Image
            src={recipe.image}
            alt="${recipe.name} image"
            width={300}
            height={300}
          />
        </CocktailImage>
        <GlassBox>
          {recipe.glass.map((glass, index) => {
            return <p key={index}>{glass.name}</p>;
          })}
        </GlassBox>
        <Alcoholic>
          <GlassImageBox>
            {recipe.alcoholic === true ? (
              <LocalBarIcon style={{ width: 50, height: 50 }} />
            ) : (
              <NoDrinksIcon style={{ width: 50, height: 50 }} />
            )}
          </GlassImageBox>
        </Alcoholic>
        <SpiritsBox>
          Spirits
          {recipe.spirits.map((spirit, index) => {
            return (
              <ListItems key={index}>
                {spirit.name}: {spirit.amount}
              </ListItems>
            );
          })}
        </SpiritsBox>
        <ModifierBox>
          Modifyer
          {recipe.modifyer.map((modifyer, index) => {
            return (
              <ListItems key={index}>
                {modifyer.name}: {modifyer.amount}
              </ListItems>
            );
          })}
        </ModifierBox>
        <FillerBox>
          Filler
          {recipe.filler.map((filler, index) => {
            return (
              <ListItems key={index}>
                {filler.name}: {filler.amount}
              </ListItems>
            );
          })}
        </FillerBox>
        <DecorationBox>
          Dekoration
          {recipe.decoration.map((decoration, index) => {
            return (
              <ListItems key={index}>
                {decoration.name}: {decoration.amount}
              </ListItems>
            );
          })}
        </DecorationBox>
        <InstructionBox>{recipe.instructions}</InstructionBox>
        <CocktailType>Cocktailart: {recipe.category}</CocktailType>
      </DetailsBox>
    </>
  );
}

const DetailsBox = styled.div`
  display: grid;
  grid-template-columns: 70px 70px 70px 70px;
  margin-left: 20px;
  margin-right: 20px;
  color: #e6dccf;
`;

const Name = styled.h2`
  grid-column: 1 / 4;
  min-height: 130px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const BackButton = styled.button`
  grid-column: 4 / 5;
  width: 60px;
  height: 40px;
  margin: 10px;
  align-self: center;
  border: 1px solid #de9b72;
  border-radius: 10px;
  color: #de9b72;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  background: none;
`;

const CocktailImage = styled.div`
  margin-bottom: 20px;
  height: 275px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  grid-column: 1 / 5;
`;

const GlassBox = styled.div`
  grid-column: 1 / 3;
  font-size: larger;
  width: 135px;
  min-height: 50px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const Alcoholic = styled.div`
  grid-column: 3 / 5;
  width: 135px;
  min-height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const GlassImageBox = styled.div`
  width: 50px;
`;

const SpiritsBox = styled.ul`
  grid-column: 1 / 5;
  font-size: larger;
  min-height: 100px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  list-style: none;
`;

const ModifierBox = styled.ul`
  grid-column: 1 / 5;
  font-size: larger;
  min-height: 100px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  list-style: none;
`;

const FillerBox = styled.ul`
  grid-column: 1 / 5;
  font-size: larger;
  min-height: 100px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  list-style: none;
`;

const DecorationBox = styled.ul`
  grid-column: 1 / 5;
  font-size: larger;
  min-height: 100px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  list-style: none;
`;

const InstructionBox = styled.ul`
  grid-column: 1 / 5;
  font-size: larger;
  min-height: 100px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const CocktailType = styled.div`
  grid-column: 1 / 5;
  font-size: larger;
  min-height: 100px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const ListItems = styled.li`
  padding-left: 15px;
  font-size: medium;
`;
