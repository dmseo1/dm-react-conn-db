import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, CardImg, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';

const API_KEY = "52c2dedc589cc9526ed3af89250ff4b4";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  //함수 기반으로 바뀌는 이유: this 호출에 대한 혼동 때문
            
            temperature: 20,
            name: '날씨',
            icon: '아이콘',
            dbData : []
        }
    }

    

    render() {
        const { icon, name, temperature, dbData } = this.state;
        const urlIcon = `http://openweathermap.org/img/w/${icon}.png`;
        return (
            <Content>
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardTitle><center>현재 날씨</center></CardTitle>
                    <CardImg width="100%" src={urlIcon} alt="Card image cap" />
                    
                    <CardText><center>{temperature}℃</center></CardText>
                    <CardText><center>{name}</center></CardText>


                </Card>

                <hr></hr>
            {   
                <Table dark style={{marginLeft: 10}}><thead><tr> <th>이름</th> <th>이메일</th> <th>성별</th> <th>전화번호</th> </tr></thead>       
                    {dbData.map(data => <tr><td>{data.name}</td><td>{data.email}</td><td>{data.gender}</td><td>{data.phone}</td></tr>)}
                </Table>
             }

             {
        //        <Table dark style={{marginLeft: 10}}><thead><tr> <th>이름</th> <th>이메일</th> <th>성별</th> <th>전화번호</th> </tr></thead> {this.getElementsList()}  </Table>
             }

            </Content>
        );
    }

    getElementsList() {
       
        var list = [];
        var data = this.state.dbData;
        for(var i = 0; i < data.length; i ++) {
            list.push(<tr><td>{data[i].name}</td><td>{data[i].email}</td><td>{data[i].gender}</td><td>{data[i].phone}</td></tr>);
        }
        return list;
    }

    componentDidMount() {
        this.getWeather()
        this.getDBData()
    }

    getWeather = (lat = 37.5025398, lon = 127.0226792) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(res => {
                console.log(res);
                console.log(`최고기온: ${res.main.temp_max}`);
                this.setState({
                    temperature: Math.floor(res.main.temp),
                    name: res.weather[0].main,
                    icon: res.weather[0].icon
                });
            })
    }

    getDBData = () => {
        fetch('http://localhost:8008/api/contacts')
            .then(response => {
                return response.json();
               
            })
            .then(res => {
                this.setState({
                    dbData : res.data
                })
                console.log(res);
                console.log(res.data[0].name);
            });
    }
}

const Content = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;

`


export default Home;