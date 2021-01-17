import React, { useState } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import AnsBox from './ansBox1';
import { useDispatch } from "react-redux";
import { surveySlice } from "../store/surveySlice";
import {useHistory,useParams} from "react-router-dom"


export default function Single(props){
  const history= useHistory();
  const params = useParams();
  const [options,setOptions]=useState([""]);
    const dispatch = useDispatch();
    const [question,setQuestion]=useState("");
    const removeAns=()=>{
      if(options.length>1){
          return null;
      }
  }
  const addQ=()=>{
    
    const payload = {
       options,
      question,
       surveyId: params.surveyId,
      type: "single",
    };
    dispatch(surveySlice.actions.addQuestion(payload));
    props.setDefault();
    // setQuestion("")
    // setOptions([""])
}
const addAns1=(value,idx)=>{
  //  console.log(options)
      if(options.length<4 && value.trim().length!==0){
        options[idx]=value;
        
        setOptions([...options])   
      }
      if(options.length===4){
        options[idx]=value
        setOptions([...options])   
      }
  }
  const publish=()=>{
    addQ()
    history.push("/ConfirmSurvey/"+params.surveyId)
  }


    return <div>
        <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>?</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Type your question here" onChange={(e)=>setQuestion(e.target.value)}/>
      </InputGroup>
      <br></br>
      <h6>Options</h6>
      <br></br>
      <AnsBox  addAns1={addAns1}  idx={0} removeAns={removeAns}/>
      <br></br>
      <AnsBox  addAns1={addAns1}  idx={1} removeAns={removeAns}/>
     
      <><button className="create-take" style={{margin:"20px"}} onClick={addQ}>Add Question</button>
        <button className="create-take" style={{margin:"20px"}} onClick={publish}>Publish</button>
      </>
    </div>
}