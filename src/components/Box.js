import React from 'react';

const Box = (props) => {
    return (
      <div className = "backgroundclass">
        <p>{props.content}</p>
        <dropdownbutton className = {props.droptype} type="Dropdownbutton">+</dropdownbutton>
      </div>
    )
  }

  export default Box;