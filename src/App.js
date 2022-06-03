import { useEffect, useState } from 'react';
import './App.css';
import ResponsiveAppBar from './Component/Card';
import RecipeReviewCard from './Component/Card/styles';

function App() {
  // const [countryList , setcountryList] = useState([]);
  // useEffect(() => {
    
  //  localStorage.setItem('Token',12345);
  //  const Token = localStorage.getItem('Token');
  //   getCountry();
    
  // }, []);

  // const getCountry = () => {
  //   const url = 'https://restcountries.com/v3.1/all';
  //   fetch(url, {
  //     method: 'GET'
  //   })
  //     .then((x) => x.json())
  //     .then((y) => {
  //       console.log('ddhhdhd', y);
  //       y.map((element) => {
  //         console.log(element);
  //         setcountryList(y);
        
  //       });
  //     });
  // };

  return (
    <>
       <ResponsiveAppBar/> 
       <br/>
      <RecipeReviewCard/>
      <br/>
      {/* <div>
        {countryList.map((item,index)=>{
          console.log(item);
          return(
            <div>
              <p>
                {item.region}
              </p>
            </div>
          )
        })}
      </div> */} 
    </>
  );
}

export default App;
