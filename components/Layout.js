import styled from 'styled-components';
import Nav from './Nav';
import Topborder from './Topborder';
import Bottomborder from './Bottomborder';

export default function Layout({ children }) {
  return (
    <OuterBorder>
      <MidBorder>
        <InnerBorder>
          <ContentBox>
            <Topborder />
            <Nav />
            <MainBox>{children}</MainBox>
          </ContentBox>
          <Bottomborder />
        </InnerBorder>
      </MidBorder>
    </OuterBorder>
  );
}

const OuterBorder = styled.div`
  border: 2px solid #de9b72;
  min-height: 94vh;
  min-width: 98vw;
  padding: 6px;
  margin: 0 auto;
`;

const MidBorder = styled.div`
  border: 6px solid #de9b72;
  min-height: 93vh;
  min-width: 94vw;
  padding: 6px;
  margin: auto;
`;

const InnerBorder = styled.div`
  border: 2px solid #de9b72;
  min-height: 92vh;
  height: 100%;
  min-width: 70vw;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainBox = styled.main`
  display: flex;
  flex-direction: column;
  align-self: center;
`;
