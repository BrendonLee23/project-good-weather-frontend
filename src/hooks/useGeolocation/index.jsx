import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useGeolocation = () => {
  const [cityLocation, setCityLocation] = useState("");

  useEffect(() => {
    const fetchLocation = async (lat, lon) => {
      try {
        const apiKey = import.meta.env.VITE_API_LOCATION;
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${apiKey}&language=pt`
        );
        const data = await response.json();

        if (data.results.length > 0) {
          const cidade = data.results[0].components.city || data.results[0].components.town;
          setCityLocation(cidade);
          toast.info('Geolocalização aplicada!', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              className: "w-50"
              });
        }
      } catch (error) {
        console.error("Erro ao obter a cidade:", error);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchLocation(latitude, longitude);
        },
        (error) => {
          console.error("Erro ao obter localização:", error);
        }
      );
    } else {
      console.error("Geolocalização não suportada pelo navegador.");
    }
  }, []);

  return cityLocation;
};

export default useGeolocation;
