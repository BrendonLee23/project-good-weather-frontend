import LoadingSearch from "../../../../components/Loadings/LoadingSearch";
import useLeftInfos from "../../../../hooks/useLeftInfos";
import { BottomBoxes, BoxGroup, ResultText, StyledBox, TopBoxes } from "./styles";

export default function TodayInfos() {
    const { weatherData, isFahrenheit, loading } = useLeftInfos() 

    const avarageTemp = weatherData?.temperature

    const displayTemperatureUnit = isFahrenheit ? 'F' : 'C';
    const speedUnit = isFahrenheit ? 'mph' : 'm/s'

    return (
        <>
            <BoxGroup>
                <TopBoxes>
                    <StyledBox>
                        <p>Mínima</p>
                        {loading ? <LoadingSearch/> : 
                            <>  
                                {weatherData ? <h1>{weatherData?.minTemp}° {displayTemperatureUnit}</h1> :  <h1>--</h1>}
                            </>
                        }
                    </StyledBox>
                    <StyledBox>
                        <p>Máxima</p>
                        {loading ? <LoadingSearch/> : 
                            <>  
                                {weatherData ? <h1>{weatherData?.maxTemp}° {displayTemperatureUnit}</h1> :  <h1>--</h1>}
                            </>
                        }
                    </StyledBox>
                </TopBoxes>
                <BottomBoxes>
                    <StyledBox>
                        <p>Umidade</p>
                        {loading ? <LoadingSearch/> : 
                            <>  
                                {weatherData ? <h1>{weatherData?.humidity} %</h1> :  <h1>--</h1>}
                            </>
                        }
                    </StyledBox>
                    <StyledBox>
                        <p>Velocidade de movimento</p>
                        {loading ? <LoadingSearch/> : 
                            <>  
                                {weatherData ? <h1>{weatherData?.windSpeed} {speedUnit}</h1> :  <h1>--</h1>}
                            </>
                        }
                    </StyledBox>
                </BottomBoxes>
            </BoxGroup>
            {
                !weatherData ? (
                    <div></div>
                ) : (
                <ResultText positive={Number(avarageTemp) || 0}>
                    {Number(avarageTemp) <= 20
                        ? "Você deve levar um casaquinho! 🧥"
                        : "Não, você não deve levar um casaquinho!"}
                </ResultText>
                )
            }
        </>
    )
}

