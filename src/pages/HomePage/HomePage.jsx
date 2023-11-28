import { styled } from "styled-components";
import LeftInfos from "../../components/LeftInfos/LeftInfos";
import RightInfos from "../../components/RightInfos/RightInfos";

export default function HomePage() {
    return (
        <Home>
            <LeftInfos/>
            <RightInfos/>
        </Home>
    )
}

const Home = styled.div`
    background-color: #b5b5b5;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center; /* Centraliza os elementos horizontalmente */
    align-items: center; /* Centraliza os elementos verticalmente */

`





