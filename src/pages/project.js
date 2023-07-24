import React from 'react';
import { useParams } from 'react-router-dom';

function Project() {
  const { id } = useParams();

  return (
    <div>
      
    {id === "1" ? 
    <div>project1</div> 
    : id === "2" ?
    <div>project 2</div> 
    : id === "3" ? 
    <div>project3</div> 
    : <p> 404 page not found</p> }
    </div>
  );
}

export default Project;