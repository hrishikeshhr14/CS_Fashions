import styled from 'styled-components';


// export const Container = styled.div`
//   padding: 80px 60px;
//   align-items: center;
//   background-color: #202428;
//   @media (max-width: 768px) {
//     text-align: center;
//     width:100%;
//   }
// `;
export const Container = styled.div`
  padding: 80px 60px;
  align-items: center;
  background-color: #202428;
  text-align: center; /* Center align text on mobile */
  
  @media (max-width: 768px) {
    padding: 80px 20px; /* Reduce horizontal padding on mobile */
  }
`;


export const Wrapper = styled.div`
    display: auto;
    flex-direction: column;
    justify-content: center;
    max-width: 768px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
      color: #cc0000;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 30px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;