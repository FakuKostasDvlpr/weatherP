const key = "347df846f2d8669c709318c00a7266bf";

const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const requestCity = async (city) =>{
    const response = await fetch(
        `${BASE_URL}weather?q=${city}&units=metric&lang=es&appid=${key}`
    )
    const data = await response.json();
	return data;
};