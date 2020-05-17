import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

//has name, year, image, description 
const Castles = () => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState(1);
  const [image, setImage] = useState('');
    
  //eventually use hooks 

  const handleSubmit = event => {
    event.preventDefault();
    //send back-end a post request (service)
    //after a response add the habit to redux (reducer, action, possibly selectors)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type = "text" value={name} onChange={({ target }) => setName(target.value)} placeholder="Castle name"/>
      <textarea type="number" value={year} onChange={({ target }) => setYear(target.value)} placeholder="Year built"></textarea>
      <textarea type="text" value={description} onChange={({ target }) => setDescription(target.value)} placeholder="Description"></textarea>
      <img src={image} />
      <input type="text" value={image} onChange={({ target }) => setImage(target.value)} placeholder="image" />
      <button>Save</button>
    </form>
    
  );};






export default CastlesForm;
