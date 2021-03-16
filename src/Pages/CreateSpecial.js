import React, { useState} from "react";
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import { Button, FormGroup, Label, Input } from "reactstrap";
import uuid from 'react-uuid';
import "./CreateSpecial.scss";
import {addSpecial} from '../actions/specialsActions';
function CreateSpecial() {

  const dispatch = useDispatch();

  const [title, setTitle] =useState('');
  const [text, setText] =useState('');
  const [type, setType] =useState('');
  const [geo, setGeo] =useState('');

  const value = uuid();
  const value2 = uuid();
  const onSubmit =(e) =>{
    e.preventDefault();
    dispatch(addSpecial({title,text,type,geo,uuid:value, ingredientId: value2}))
    
  } 

  return (
    <div className="createSpecial">
      <form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Title</Label>
          <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="with a placeholder"
            className="createSpecial__input"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Text</Label>
          <Input
            value={text}
            onChange={(e) =>setText(e.target.value)}
            type="text"
            placeholder="with a placeholder"
            className="createSpecial__input"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Type</Label>
          <Input
          value={type}
          onChange={(e) =>setType(e.target.value)}
            type="text"
            placeholder="with a placeholder"
            className="createSpecial__input"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Geolocation</Label>
          <Input
          value={geo}
          onChange={(e) => setGeo(e.target.value)}
          type="text"
            placeholder="with a placeholder"
            className="createSpecial__input"
          />
        </FormGroup>
        <div className="createSpecial__btncon">
        <Button className="createSpecial__btn submit " type="submit">Submit</Button>
        <Link to="/">
        <Button className="createSpecial__btn" color='secondary' type="submit">Go Back</Button>
        </Link>
        </div>

      </form>
    </div>
  );
}

export default CreateSpecial;
