import Image from 'next/image';
import styled from 'styled-components';
import decorationcornerrightbottom from '../src/bottomright.svg';
import decorationcornerleftbottom from '../src/bottomleft.svg';
import decorationbottom from '../src/bottom.png';

export default function Bottomborder() {
  return (
    <BorderBox>
      <BottomLeftCorner>
        <Image
          src={decorationcornerleftbottom}
          alt="menu icon"
          width={70}
          height={70}
        />
      </BottomLeftCorner>
      <BottomMid>
        <Image src={decorationbottom} alt="menu icon" width={300} height={50} />
      </BottomMid>
      <BottomRightCorner>
        <Image
          src={decorationcornerrightbottom}
          alt="menu icon"
          width={70}
          height={70}
        />
      </BottomRightCorner>
    </BorderBox>
  );
}

const BorderBox = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: -10;
`;

const BottomLeftCorner = styled.div``;

const BottomMid = styled.div`
  align-self: flex-end;
`;

const BottomRightCorner = styled.div``;
