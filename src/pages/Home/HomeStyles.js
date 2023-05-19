import styled from "styled-components";
import { Link } from "react-router-dom"

export const HomeContainerStyled = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: black;
    justify-content: center;
    align-items: center;
`
export const HomeTitle = styled.h1`
    font-size: 30px;
    color: white;
`

export const HomeParrafo = styled.p`
    font-size: 25px;
    color: aqua;
`

export const LinksContainer = styled.div`
    display: flex;
    gap: 30px;
`

export const LinkPage = styled(Link)`
color: #3da9fc;
  border: 1px solid #3da9fc;
  border-radius: 20px;
  padding: 5px 15px;
  transition: all 0.3s ease;
  color: azure;

  :hover {
    background: #3da9fc;
    color: yellow;
  }
`