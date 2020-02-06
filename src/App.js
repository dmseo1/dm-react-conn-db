import React, { Component } from 'react';
import styled from 'styled-components'; //styled라는 클래스를 가져오기 위한 선언
import  Header from './Layout/Header';
import Navbar from './Layout/Navbar';
//* typescript

//* 컴포넌트는 전체를 <div> 엘리먼트 등으로 감싸주어야 오류가 나지 않는다.
class App extends Component {
  render() {
    return (
      <Layout> 
          <Header />
          <Navbar />
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
