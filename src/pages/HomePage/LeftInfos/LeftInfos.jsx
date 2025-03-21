import Casaco from "../../../assets/casaco.svg";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { capitalizeFirstLetter, celsiusToFahrenheit, weatherDescriptions } from "../../../utils/climate-data";
import { ThemeContext } from '../../../contexts/ThemeContext';
import { MagnifyingGlass, Moon, Sun } from "@phosphor-icons/react";
import PropTypes from "prop-types";
import useLeftInfos from "../../../hooks/useLeftInfos";
import { SyncLoader } from "react-spinners";
import SkeletonLoading from "../../../components/Skeleton/LeftInfos-Skeleton";
import { Description, Footer, Header, InfosContainer, InputContainer, LeftInfosContainer, ResumeInfos, StyledTemperature, SwitchsDiv, TextoVazio } from "./styles";
import { toast } from "react-toastify";

LeftInfos.propTypes = {
    fetchData: PropTypes.func.isRequired,
};

export default function LeftInfos(props) {
    const { fetchData } = props;
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const { currentDate,
            currentDay, 
            currentTime,
            weatherData, 
            setWeatherData, 
            city, 
            setCity, 
            isFahrenheit, 
            setIsFahrenheit, 
            loading, 
            setLoading, 
            dataAno, 
            cityLocation,
        } = useLeftInfos()
    const [isLoadingPage, setIsLoadingPage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoadingPage(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if(cityLocation) {
            fetchData(cityLocation, setLoading, setWeatherData, isDarkMode);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cityLocation, setLoading, setWeatherData])

    const weatherDescription = weatherData?.description?.toLowerCase();

    const weatherColor = isDarkMode
        ? weatherDescriptions[weatherDescription]?.dark || "#484848"
        : weatherDescriptions[weatherDescription]?.color || "#484848"; 
    const iconUrl = weatherData ? weatherData?.icon : null;

    const fetchDataAndGraphic = async () => {
        if(!city){
            toast.warn('Você precisa digitar um lugar!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: isDarkMode ? "dark" : "light",
                });
            return
        }
        await fetchData(city, setLoading, setWeatherData, isDarkMode);
    };

    const handleSearch = () => {
        fetchDataAndGraphic();
    };
    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            fetchDataAndGraphic();
        }
    };

return (
    <LeftInfosContainer>
        {isLoadingPage ? (
            <SkeletonLoading />
        ) : (
            <>
                <Header>
                    <img src={Casaco} alt="" />
                    <h1>Clima atual</h1>
                </Header>
                <InputContainer>
                    <div>
                    <MagnifyingGlass size={32} onClick={handleSearch} color="#9e9d9d" weight="bold" />
                    </div>
                    <input
                        type="text"
                        placeholder="Procure por uma cidade"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        onKeyDown={handleEnterPress}
                        autoFocus
                        style={{ color: isDarkMode ? "#fff" : "#000"}}
                    />
                </InputContainer>
                <InfosContainer>
                    {loading ? (
                        <ResumeInfos>
                            <SyncLoader
                                color="#bfcdcd"
                                cssOverride={{}}
                                loading
                                size={20}
                                speedMultiplier={1}
                            />
                        </ResumeInfos>
                    ) : (
                        <ResumeInfos>
                            <StyledTemperature weatherColor={weatherColor}>
                                {weatherData === undefined ? (
                                    ""
                                ) : (
                                    <>
                                        {isFahrenheit ? (
                                            <>
                                                <h1 style={{ color: weatherColor, display: "flex", alignItems: "center" }}>
                                                    {iconUrl && <img src={iconUrl} alt="Weather Icon" style={{ width: "100px", height: "100px" }} />}
                                                    {celsiusToFahrenheit(weatherData?.temperature)}°F
                                                </h1>
                                            </>
                                        ) : (
                                            <>
                                                <h1 style={{ color: weatherColor, display: "flex", alignItems: "center" }}>
                                                    {iconUrl && <img src={iconUrl} alt="Weather Icon" style={{ width: "100px", height: "100px" }} />}
                                                    {weatherData?.temperature}°C
                                                </h1>
                                            </>
                                        )}
                                    </>
                                )}
                            </StyledTemperature>
                            <Description weatherColor={weatherColor}>
                                {weatherData === undefined ? (
                                    <TextoVazio>{"--"}</TextoVazio>
                                ) : (
                                    <>
                                        <h1 style={{ color: weatherColor, fontSize: "35px" }}>{capitalizeFirstLetter(weatherData?.description)}</h1>
                                    </>
                                )}
                            </Description>
                        </ResumeInfos>
                    )}
                </InfosContainer>
                <SwitchsDiv>
                    <hr />
                    <h2>{currentDate}</h2>
                    <h3>{capitalizeFirstLetter(currentDay)}, {currentTime}</h3>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={isFahrenheit}
                                    onChange={() => setIsFahrenheit(!isFahrenheit)}
                                    color="primary"
                                />
                            }
                            label="°F"
                        />
                        <FormControlLabel
                            control={<Switch onClick={toggleTheme} />}
                            label={isDarkMode ? <Moon size={32} color="#bfbfc5" /> : <Sun size={32} color="#faf20a" weight="fill" />}
                        />
                    </FormGroup>
                </SwitchsDiv>
                <Footer>
                    <p>Todos os direitos reservados. {dataAno}.</p>
                </Footer>
            </>
        )}
    </LeftInfosContainer>
);
}