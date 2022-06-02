import {Route} from 'react-router-dom';
import styled from "styled-components/"
import './App.css';
// import styled from "styled-components";
import Main from "./Main"
import Detail from "./Detail"
 
import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import { loadWordFB} from "./redux/modules/WordList"
import { useDispatch } from "react-redux";





function App() {
  const dispatch = useDispatch();
  const history = useHistory();

 useEffect(() => {
    dispatch(loadWordFB());
  }, [dispatch]);

  return (
    <div className="App">
      <Route path="/" exact>
      <Title onClick={() => {
          history.push("/");
        }}>📖나의 작은사전📕</Title>

        <Pbt onClick={() => {
          history.push("/Detail");
        }}>➕Add</Pbt>
        <Main/>
      </Route>
      <Route path="/Detail">
        <Detail/>
      </Route>
 
    </div>
  );
};

const Title = styled.h2`
max-width: 100%;
background-color: #a8dadc;
color: #1d3557;
font-size: 40px;
font-weight: 700;
margin: 0px;
padding: 20px;
border: 2px solid #a8dadc;
`

const Pbt = styled.button`
width: 70px;
height: 40px;
background-color: #a8dadc;
margin: 20px;
padding: 7px;
border: 2px solid #457b9d;
position: absolute;
left: 0px;
top: 10px;
`
export default App;
