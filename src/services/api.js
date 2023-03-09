import axios from 'axios';

export const getWeather = (search) => {
  if(search===undefined || search==='' || search===null){
    search='istanbul'
  }
    const key='bb696be4c5425a7098a8c4ab54cf032c';
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}`);
};
