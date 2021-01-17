import React,{useState} from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { useDispatch } from "react-redux";
import { surveySlice } from "../store/surveySlice";

export default function AnsBox(props){
  const [value,setValue]= useState("");
  
    return (<>
    <InputGroup>
        <Input placeholder="Type your answer here" onChange={(e)=>props.addAns1(e.target.value,props.idx)}/>
        <div className="plusminus1" onClick={()=>props.addAns()}>
        <InputGroupAddon  addonType="prepend">
          <InputGroupText className="plusminus"><b>+</b></InputGroupText>
        </InputGroupAddon>
        </div>
        <div  className="plusminus1">
        <InputGroupAddon  addonType="prepend" onClick={()=>props.removeAns(props.idx)}>
          <InputGroupText className="plusminus"><b>-</b></InputGroupText>
        </InputGroupAddon>
        </div>
      </InputGroup>
      <br></br>
      
      </>)
}