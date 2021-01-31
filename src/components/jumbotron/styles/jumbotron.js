import styled from "styled-components/macro"; // Macro..retains styled Component "name eg Inner"

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${/* Using a Prop */ ({ direction }) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;
export const Title = styled.h2`
  font-size: 40px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 25px;
  }
`;
export const SubTitle = styled.h3`
  font-size: 22px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Container = styled.div`
    @media (max-width: 1000px) {
    ${Item}:last-of-type h3 {
      margin-bottom: 50px;
    }
`;
/* 
  }*/
