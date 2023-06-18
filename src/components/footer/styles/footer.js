import styled from 'styled-components';

export const Container = styled.div`
  align-items:center;
  margin: 0%rem%;
  text-align: center;
  width: 100%; /* Set the container width to 100% */
  
  @media (max-width: 1000px) {
    margin: 0%rem;
    padding: 0% /* Add padding to the container */
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 768px;
  margin: 0 ;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #333;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #f8f9fa;
    transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 30px;
  color: #333;
  margin-bottom: 40px;
  font-weight: bold;
`;
