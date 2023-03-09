import { useContext, useEffect } from "react"
import LoggedContext from "../context/loggedContext"
import { getWeather } from "../services/api"
import '../scss/detail.scss'

const DetailWeather=()=>{
    const {searchData,detWeather, setDetWeather,isFetched,setIsFetched}=useContext(LoggedContext);

    const fetchWeather = async (search) => {
        try {
          const res = await getWeather(search);
          if (res.status === 200) {
            setDetWeather(res.data);
            setIsFetched(true);
           
          console.log(detWeather)
        } 
        } catch (error) {
          console.log(error);
        }
      }
  
      
      useEffect(() => {
  
          fetchWeather(searchData[0]);
       
        },[searchData])
  

 

        return(
            <>
            {isFetched && (
              <div className="mainTheme" key={Math.random()}>
            <div className="imgCont">
              <img
              className="image"
               src={`http://openweathermap.org/img/wn/${detWeather.weather[0].icon}@2x.png`}
               alt=""
               />
               </div>
               <p className="titles one">{detWeather.name}</p>
                <p className="titles cntry">{detWeather.sys.country}</p>
                <p className="descriptions only">{detWeather.weather[0].description.toUpperCase()}</p>
              
              <div className="contain">
                <div className="leftCont">
                   <p className="descriptions">Tempature: {Math.round(detWeather.main.temp/11)} C</p>
                <p className='descriptions'>Wind: {detWeather.wind.speed} Km/h</p>
                  </div>
                  <div className="centerCont">
                <p className='descriptions'>Pressure: {detWeather.main.pressure} p</p>

                <p className='descriptions'>Humidity: {detWeather.main.humidity} Km/h</p>               
                   </div>
                   <div className="rightCont">
              <p className='descriptions'>Wind degree: {detWeather.wind.deg} C</p>
                <p className='descriptions'>Coordination: {Math.round(detWeather.coord.lat)}, {Math.round(detWeather.coord.lon)}</p>

              </div>
              </div> 
            
             
             
            </div>
            )}
            </>
        )
}

export default DetailWeather