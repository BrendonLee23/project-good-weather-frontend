import TodayInfos from "./Today";
import { useEffect, useState } from "react";
import RightFooter from "./RightFooter";
import NextDayInfos from "./NextDay/NextDaysInfos";
import useLeftInfos from "../../../hooks/useLeftInfos";
import AnimatedCloud from "../../../components/CloudIcon";
import {
  CityAndCoordinates,
  CloudDiv,
  NavRight,
  RightInfosContainer,
} from "./styles";
import { InfinitySpin } from "react-loader-spinner";
import styled from "styled-components";
import LoadingSearch from "../../../components/Loadings/LoadingSearch";

export default function RightInfos() {
  const [selectedComponent, setSelectedComponent] = useState("today");
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  const { weatherData, loading } = useLeftInfos();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingPage(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleTitleClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <RightInfosContainer>
      {isLoadingPage ? (
        <CloudDiv>
          <AnimatedCloud />
        </CloudDiv>
      ) : (
        <>
          <NavRight $selectedComponent={selectedComponent}>
            <h1 onClick={() => handleTitleClick("today")}>Hoje</h1>
            <h2 onClick={() => handleTitleClick("nextDays")}>Próximos dias</h2>
          </NavRight>
          <CityAndCoordinates>
            {loading ? (
            <>
                <h1>
                    <InfinitySpin
                    visible={true}
                    width="200"
                    color="#858585"
                    ariaLabel="infinity-spin-loading"
                    />
                </h1>
                <div>
                    <DivCoordenada>
                        <p>Lat:</p>
                        <LoadingSearch size={5} color={"#474747"}/>
                    </DivCoordenada>
                    <DivCoordenada>
                        <p>Lon:</p>
                        <LoadingSearch size={5} color={"#474747"}/>
                    </DivCoordenada>
                </div>
            </>
            ) : (
            <>
                <h1>{weatherData?.city}</h1>
                <div>
                    <p>Lat: {weatherData?.lat}</p>
                    <p>Lon: {weatherData?.lon}</p>
                </div>
            </>
        )}
          </CityAndCoordinates>
          {selectedComponent === "today" ? <TodayInfos /> : <NextDayInfos />}
          <RightFooter>
            <p>Dados fornecidos pela <span>Open Weather API</span></p>
          </RightFooter>
        </>
      )}
    </RightInfosContainer>
  );
}

const DivCoordenada = styled.div`
    display: flex;
    width: 100px;
    height: 50px;
`