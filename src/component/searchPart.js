import { useContext, useEffect, useState } from "react";
import { getWeather } from "../services/api";
import LoggedContext from "../context/loggedContext";
import '../scss/search.scss';
import wLoading from "../hocs/loading";
import DetailWeather from "./detailWeather";
const SearchPart=(props)=>{

    const {searchData, setSearchData,weather, setWeather}=useContext(LoggedContext)
    
    const fetchWeather = async (search) => {
      try {
        const res = await getWeather(search);

        if (res.status === 200 ){
         setWeather([
          res.data,
        ...weather
        ]);
        
      }
      props.setLoading(false);
      
        console.log(weather)
        
      } catch (error) {
        console.log(error);
      }
    }
  
    
    useEffect(() => {
      

      if(weather.length===3){
        weather.pop()
      }

      searchData.map((search) => {
        fetchWeather(search);
      })
      },[searchData])


    return(
        <div className="mainContent">
          <div>
             <form className="form" onSubmit={(e)=>{
                let input=document.querySelector('#searchbar2').value
                e.preventDefault()

                if(!searchData.includes(input)){

                  setSearchData([
                    input
                  ])
                
                }
             
                localStorage.setItem("cities",input)
                document.querySelector('#searchbar2').value=''
            }}>
          <label htmlFor="searchbar2" />
          <input type="text" id="searchbar2" placeholder="City/Country"/>
          <button className="search">Search</button>
        </form>
          
         { weather.map(weather=>(
           <div className="wht_item" key={Math.random()}>
            <div className="wht_info">
            <img
            className="img"
             src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
             alt=""
             />
              <p className="description">{weather.name}</p>
              <p className="description">{weather.weather[0].main}</p>
              <p className="description">Temperature: {Math.round(weather.main.temp/11)} C</p>
            </div>
           
          </div>
             )
          
          ) 
            }
          </div>
          <DetailWeather/>
        </div>
    )
}

export default wLoading(SearchPart);