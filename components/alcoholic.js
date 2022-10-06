import alcoholicy from "../src/icons/alcoholic.svg"
import alcoholicn from "../src/icons/nonalcoholic.svg"
import Image from "next/image"

export default function Alcimage(alcoholic) {
    if (alcoholic == true) {
        <Image
            src={alcoholicy}
            alt="alcoholic image"
            width={40}
            height={40}
            layout="responsive"
        />
    } else {
        <Image
            src={alcoholicn}
            alt="alcoholic image"
            width={40}
            height={40}
            layout="responsive"
        />
    }
}