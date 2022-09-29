import Image from "next/image";
import { getRecipeById } from "../../src/services/recipeService";

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
            <h2> {recipe.name}</h2>
            <ul>Spirits</ul>
            {recipe.spirits.map((spirit, index) => {
                return <li key={index}>{spirit.name}: {spirit.amount}</li>;
            })}
            <ul>Modifyer</ul>
            {recipe.modifyer.map((modifyer, index) => {
                return <li key={index}>{modifyer.name}: {modifyer.amount}</li>;
            })}
            <ul>Filler</ul>
            {recipe.filler.map((filler, index) => {
                return <li key={index}>{filler.name}: {filler.amount}</li>;
            })}
            <ul>Dekoration</ul>
            {recipe.decoration.map((decoration, index) => {
                return <li key={index}>{decoration.name}: {decoration.amount}</li>;
            })}
            <p>{recipe.instructions}</p>
            <p>alcoholic</p>
            <p>Cocktailart {recipe.category}</p>
            <ul>glass</ul>
            {
                recipe.glass.map((glass, index) => {
                    return <li key={index}>{glass.name}</li>;
                })
            }
            {
                recipe.glass.map((glass, index) => {
                    return (
                        <div key={index}><Image

                            src={glass.image}
                            alt="${glass.name} image"
                            width={80}
                            height={80}
                        />
                        </div>
                    )
                })
            }
            <div>
                <Image
                    src={recipe.image}
                    alt="${recipe.name} image"
                    width={300}
                    height={300}
                />
            </div>
        </>
    )
}