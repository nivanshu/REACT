import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ImgCard = (props) => {
  const [count , setcount] = useState(0);
const Handledclick=()=>{
  setcount(count+1)
  console.log("button clicked",count);
};
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgUrl}/>
      <Card.Body>
        <Card.Title>{props.title} {count}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Button onClick ={Handledclick}  variant="primary" >Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ImgCard