import React, { Component } from 'react';
import styled from 'styled-components'; //styled라는 클래스를 가져오기 위한 선언
import  Header from './Layout/Header';
import Navbar from './Layout/Navbar';
import Weather from './Layout/Weather';
import Home from './components/Home';
//* typescript

//* 컴포넌트는 전체를 <div> 엘리먼트 등으로 감싸주어야 오류가 나지 않는다.
class App extends Component {

  state = {
    isLoaded: false,
    temperature: 0,
    curWeather: ''
  }
  
  componentDidMount() {
    console.log("componentDidMount");
    this.fetchWeather()
  }

  fetchWeather = (lat=37.5025398, lng=127.0226792) => {
    console.log("fetchWeather");
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=52c2dedc589cc9526ed3af89250ff4b4&units=metric`)
    .then(response=>{return response.json()}) 
    .then(res=>{
      //console.log(res);
      this.setState({
        isLoaded: true,
        temperature: res.main.temp,
        curWeather: res.weather[0].main
      })
    }) 
  }

  render() {
    const {isLoaded, temperature, curWeather} = this.state;
    return (
      <Layout> 
          <Header />
          <Navbar />
          <Home />
          {
        //  isLoaded ? (<Weather weather={curWeather} temperature={temperature} />) : (<div></div>)
        }
      </Layout>
    );
  }


}



//css의 리터럴 표기법
//Layout이란 명칭은 자유 
const Layout = styled.div`  
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
` //앞쪽 backtick은 구문에 붙여야한다. 개행하여 쓰면 안 된다.





//export는 한 파일에 하나밖에 선언 못한다. export를 못한 것은 중괄호로 가져온다.
export default App;
