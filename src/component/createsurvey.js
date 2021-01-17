import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Question from "./question"
const Create = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [option,setOption] = useState("Select Question Type")
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (<div className="create-page">
    <div>
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle style={{width:"200px"}} caret>
        {option}
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem style={{width:"200px"}} onClick={()=>setOption("Multi-select")}>Multi-select</DropdownItem>
        <DropdownItem style={{width:"200px"}} onClick={()=>setOption("Single-select")}>Single-select</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>
    <div style={{paddingTop:"50px",width:"400px"}}><Question option={option} setOption={()=>setOption("Select Question Type")}/></div>
      </div>);
}

export default Create;