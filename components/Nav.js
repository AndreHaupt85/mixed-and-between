import Link from 'next/link';
import styled from 'styled-components';

export default function Nav() {
  return (
    <>
      <Navbar>
        <Link href={'/'} passHref>
          <LinkStyle>Home</LinkStyle>
        </Link>
        <Link href={'/library'} passHref>
          <LinkStyle>Library</LinkStyle>
        </Link>
      </Navbar>
    </>
  );
}

const Navbar = styled.div`
  display: flex;
  width: 100wv;
  justify-items: baseline;
`;

const LinkStyle = styled.a`
  font-size: 30px;
  border: 2px solid #de9b72;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 20px;
  color: #de9b72;
  text-decoration: none;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 45px;
  width: 100%;
  letter-spacing: 1px;
`;
