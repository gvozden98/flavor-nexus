import { styled } from "styled-components";
const LoadingCenter = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
function Loading() {
    return <LoadingCenter className="center">Loading...</LoadingCenter>;
}

export default Loading;
