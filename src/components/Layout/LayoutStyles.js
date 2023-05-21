import styled from "styled-components";

export const LayoutContainerStyled = styled.div`
    min-height: 100vh;
    height: auto;
    max-width: 1200px;
    margin: 0 auto;
`;

export const ContentContainerStyled = styled.div`
    height: calc(100vh - 120px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`