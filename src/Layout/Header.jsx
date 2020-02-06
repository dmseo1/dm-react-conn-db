import React, {Component} from 'react';
import styled from 'styled-components'

class Header extends Component {
    render() {
        //Element: 전체 레이아웃
        //ShortCut: 윗줄
        //Logo: 로고
        //Search: 로고 오른쪽 제목
        return(
            <Container>
                <Element>  
                    <ShortCut>로그인 | 회원가입</ShortCut>  
                    <Logo>
                        <img width="100%" height="100%" alt="로고" 
                        src="https://mblogthumb-phinf.pstatic.net/MjAxODExMjZfMTQ0/MDAxNTQzMTk0OTgwMTcy.llO3or-IaNn7HZkXfrve9HADKEN8w0Pqbk_DLxgZaqIg.vV5ZEGeJc1f9Y7MWWndT8NxyEGZlkpaSCS8D1q6ybegg.GIF.yellowouk2/824c0fbe1f4a7b815b05419dcf515d71.gif?type=w800" />    
                    </Logo> 
                    <Search><span>React Blog</span></Search> 
                </Element>
            </Container>
        );
    }
}

const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid #D1D8E4;
`
const Element = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100px;
    display: flex;
    flex-flow: row wrap;
`
const ShortCut = styled.div`
    order: 1;
    width: 100%;
    height: 20px;
    text-align: right;
    color: #ffffff;
    background-color: #3F51B5;
`
const Logo = styled.div`
    order: 2;
    width: 20%;
    height: 100%;
`
const Search = styled.div`
    order: 3;
    width: 80%;
    height: 100%;
    background-color: #78FFD6;
    text-align: center;
    vertical-align: middle;
`

export default Header;

//#3F51B5