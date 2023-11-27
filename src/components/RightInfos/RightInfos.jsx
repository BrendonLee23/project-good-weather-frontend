import { styled } from "styled-components"
import TodayInfos from "../TodayInfos"
import NextDayInfos from "../NextDaysInfos"
import { useState } from "react";

export default function RightInfos() {

    const [selectedComponent, setSelectedComponent] = useState('today'); // Estado inicial para o componente TodayInfos

    const handleTitleClick = (component) => {
        setSelectedComponent(component);
    };

    return (
        <RightInfosContainer>
            <TitleOptions selectedComponent={selectedComponent}>
                <h1 onClick={() => handleTitleClick('today')}>Hoje</h1>
                <h2 onClick={() => handleTitleClick('nextDays')}>Próximos dias</h2>
            </TitleOptions>
            {selectedComponent === 'today' ? <TodayInfos /> : <NextDayInfos />}
        </RightInfosContainer>
    )
}

const RightInfosContainer = styled.div`
    background-color:#D8D8D8;
    display: flex;
    flex-direction: column;
    height: 630px;
    width: 1912px;
    border: 2px solid #D8D8D8;
    padding-left: 40px;
    padding-top: 30px;
`

const TitleOptions = styled.div`
    width: 750px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap:50px;
    h1{
        color: ${(props) =>
        props.selectedComponent === 'today' ? 'black' : '#a7a7a7'};
        font-family: Poppins;
        font-size: 28px;
        font-weight: 400;
        line-height: 48px;
        letter-spacing: 0em;
        text-align: left;
        cursor: pointer;
    }
    h2{
        color: ${(props) =>
        props.selectedComponent === 'nextDays' ? 'black' : '#a7a7a7'};
        font-family: Poppins;
        font-size: 28px;
        font-weight: 400;
        line-height: 48px;
        letter-spacing: 0em;
        text-align: left;
        cursor: pointer;
    }
`