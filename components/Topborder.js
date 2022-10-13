import Image from 'next/image';
import styled from 'styled-components';
import decorationcornerlefttop from '../src/topleft.svg';
import decorationcornerrighttop from '../src/topright.svg';
import decorationtop from '../src/top.png';

export default function Topborder() {
  return (
    <BorderBox>
      <TopLeftCorner>
        <Image
          src={decorationcornerlefttop}
          alt="menu icon"
          width={70}
          height={70}
        />
      </TopLeftCorner>
      <TopMid>
        <Image src={decorationtop} alt="menu icon" width={300} height={50} />
      </TopMid>
      <TopRightCorner>
        <Image
          src={decorationcornerrighttop}
          alt="menu icon"
          width={70}
          height={70}
        />
      </TopRightCorner>
    </BorderBox>
  );
}

const BorderBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopLeftCorner = styled.div``;

const TopMid = styled.div``;

const TopRightCorner = styled.div``;
