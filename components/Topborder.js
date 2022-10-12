import Image from 'next/image';
import styled from 'styled-components';
import decorationcornerlefttop from '../src/topleft.svg';
import decorationcornerrighttop from '../src/topright.svg';
import decorationtop from '../src/top.png';

export default function Topborder() {
  return (
    <Borderbox>
      <Topleftcorner>
        <Image
          src={decorationcornerlefttop}
          alt="menu icon"
          width={70}
          height={70}
        />
      </Topleftcorner>
      <Topmid>
        <Image src={decorationtop} alt="menu icon" width={300} height={50} />
      </Topmid>
      <Toprightcorner>
        <Image
          src={decorationcornerrighttop}
          alt="menu icon"
          width={70}
          height={70}
        />
      </Toprightcorner>
    </Borderbox>
  );
}

const Borderbox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Topleftcorner = styled.div``;

const Topmid = styled.div``;

const Toprightcorner = styled.div``;
