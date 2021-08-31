import React, { useEffect, useState } from "react"; 
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import IconButton from '@material-ui/core/IconButton';

const Counter = () => {

  

  return (
    <>
      <IconButton 
      aria-label="minus-item" 
      >
        <RemoveCircleIcon fontSize='large'/>
      </IconButton>
      <IconButton aria-label="add-item" >
        <AddCircleIcon fontSize='large'/>
      </IconButton>
    </>
  );
};

export default Counter;
                