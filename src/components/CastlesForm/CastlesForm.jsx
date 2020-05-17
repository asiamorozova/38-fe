import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import postCastle from '../../services/castlesApi';
import { addCastle } from '../../actions/castlesActions';

//has name, year, image, description 
const Castles = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState(1);
    
  //eventually use hooks 

  const handleSubmit = event => {
    event.preventDefault();
    //send back-end a post request (service)
    postCastle({ name, year, description, image })
      .then(castle  => {
        //after a response add the habit to redux (reducer, action, possibly selectors)
        dispatch(addCastle(castle));
      }); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type = "text" value={name} onChange={({ target }) => setName(target.value)} placeholder="Castle name"/>
      <textarea type="number" value={year} onChange={({ target }) => setYear(target.value)} placeholder="Year built"></textarea>
      <img src={image} />
      <textarea type="text" value={description} onChange={({ target }) => setDescription(target.value)} placeholder="Description"></textarea>
      <input type="text" value={image} onChange={({ target }) => setImage(target.value)} placeholder="image" />
      <button>Save</button>
    </form>
    
  );};






export default Castles;
