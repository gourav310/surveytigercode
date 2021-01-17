import { Link ,useHistory} from 'react-router-dom';
import '../style/App.css';
import { useDispatch } from "react-redux";
import { surveySlice, newSurvey } from "../store/surveySlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useState } from 'react';


function App() {
  const history = useHistory();
  const dispatch = useDispatch();
 
  const startSurvey=async()=>{
    await dispatch(newSurvey()).then(unwrapResult).then((id)=>history.push(`/create/${id}`))
  }
  return (
    <div className="App">
      <Link onClick={startSurvey} style={{padding:'10px'}}><button  className="create-take">Create survey</button></Link>
      <Link  to="/takesurvey" style={{padding:'10px'}}><button className="create-take">Take survey</button></Link>
    </div>
  );
}

export default App;
