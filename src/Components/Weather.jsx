import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./Loading/Loading";
const Weather = () => {
    const [data, SetData] = useState({});
    const [search, setSearch] = useState('london')
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true)
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c8c0b0b475d7b81cfca8255223f6cfbf`
          );
             setTimeout( async() => {
              SetData(await response.json())
              console.log(data);
              setIsLoading(false)
             }, 1000);
            
          };
        fetchData();
      }, [search]);
    
   
      
      const handlesubmit=(e)=>{
        e.preventDefault()
        setSearch(input)
      }
      let emoji = null;
     if(data.weather){
      if(typeof emoji != "undefined"){
        if(data.weather[0].main == "Clouds"){
          emoji="fa-cloud"
        }else if(data.weather[0].main == "Thunderstorm"){
          emoji="fa-bolt"
      }else if(data.weather[0].main == "Rain"){
        emoji="fa-cloud-rain"
      }
    }
     }else{
      return null
     }
        
      return (
      <>
        <div className="container">
    <div className="row">
       <div className="weather"> 
       <form onSubmit={handlesubmit}>
            <input placeholder="Search City..."
            name="Search"
            type={"search"}
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            required
            />
            <button><i className="fas fa-search"></i></button>
        </form>
          {isLoading ? <Loading/> : (
            <div className="weather-details"><h1>{data.name}</h1>
            {data.main ? <h2>{data.main.temp}&deg;F</h2> : null}
            {data.main ? <span> {(data.main.temp_min - 273.15).toFixed(2)}&deg;c | {(data.main.temp_max - 273.15).toFixed(2)}&deg;c</span> : null}
            {data.weather ? <h2>{data.weather[0].main}</h2> : null}
            <i className= {`fas ${emoji} fa-4x`}></i>
            </div>
          )}
        </div>
    </div>
</div> 
       </>
      )
      
        
      

      
    
}

export default Weather;