import React, { useState } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import AnsBox from "./ansBox"
import { useDispatch } from "react-redux";
import { surveySlice } from "../store/surveySlice";
import {useHistory,useParams} from "react-router-dom"



export default function Multiple(props){
  const history = useHistory();
  const params = useParams()
 
    const [options,setOptions]=useState([""]);
    const dispatch = useDispatch();
    
    const [question,setQuestion]=useState();

    const addAns=()=>{
      //console.log(options)
        if(options.length<4 ){
          options.push("")
          setOptions([...options])   
        }
        
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
    const removeAns=(idx)=>{
        if(options.length>1){
            options.splice(idx,1);
            setOptions([...options])
        }
    }
    const addQ=()=>{
     
        const payload = {
           options,
          question,
           surveyId: params.surveyId,
          type: "multiple",
        };
        dispatch(surveySlice.actions.addQuestion(payload));
        props.setDefault();
        // setQuestion("")
        // setOptions([""])
    }

    const publish=()=>{
      addQ()
      history.push("/ConfirmSurvey/"+params.surveyId)
    }


    return (<div>
        <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>?</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Type your question here"   value={question} onChange={(e)=>setQuestion(e.target.value)}/>
      </InputGroup>
      <br></br>
      <h6>Options</h6>
     
      <br></br>
      
      {options.map((ans1,idx)=>(<AnsBox addAns={addAns} addAns1={addAns1} key={idx} idx={idx} removeAns={removeAns}/>))}
      {options.length>=4?<><button className="create-take" style={{margin:"20px"}} onClick={addQ}>Add Question</button>
        <button className="create-take" style={{margin:"20px"}} onClick={publish}>Publish</button>
        </>:console.log(options.length)}
     
      </div>)
}