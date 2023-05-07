
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundContainer = styled.div`
  background: url('/404-bg.jpg');
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const NotFoundTitle = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
`;

const NotFoundDescription = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: black;
  margin: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: #ffffff;
  color: #000000;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
  }
`;

function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404 - error</NotFoundTitle>
      <NotFoundDescription>The page you requested could not be found.</NotFoundDescription>
      <Link to={{
        pathname: "/"
      }} ><Button>Go Back Home</Button></Link>
     
    </NotFoundContainer>
  );
}

export default NotFound;