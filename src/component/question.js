import React, { useState } from 'react';
import Single from "./single"
import Multiple from "./multiple"

const Question= (props)=>{
    const setDefault=()=>{
      props.setOption();

    }
    if(props.option==="Select Question Type"){
      return null;
    }else if (props.option==="Multi-select"){
      return <Multiple setDefault={setDefault}/>
    }else{
      return <Single setDefault={setDefault}/>
    }
  }

export default Question;