import Image from 'next/image';
import styled from 'styled-components';
import decorationcornerrightbottom from '../src/bottomright.svg';
import decorationcornerleftbottom from '../src/bottomleft.svg';
import decorationbottom from '../src/bottom.png';

export default function Bottomborder() {
  return (
    <Borderbox>
      <Bottomleftcorner>
        <Image
          src={decorationcornerleftbottom}
          alt="menu icon"
          width={70}
          height={70}
        />
      </Bottomleftcorner>
      <Bottommid>
        <Image src={decorationbottom} alt="menu icon" width={300} height={50} />
      </Bottommid>
      <Bottomrightcorner>
        <Image
          src={decorationcornerrightbottom}
          alt="menu icon"
          width={70}
          height={70}
        />
      </Bottomrightcorner>
    </Borderbox>
  );
}

const Borderbox = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: -10;
`;

const Bottomleftcorner = styled.div``;

const Bottommid = styled.div`
  align-self: flex-end;
`;

const Bottomrightcorner = styled.div``;
