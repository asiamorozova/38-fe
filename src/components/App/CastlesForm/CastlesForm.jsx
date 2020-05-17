import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

//has name, year, image, description 
const Castles = () => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState(1);
  const [image, setImage] = useState('');
    
  //eventually use hooks 

  return (
    <form>
      <input type = "text" value={name} onChange={({ target }) => setName(target.value)} placeholder="Castle name"/>
      <textarea type="number" value={year} onChange={({ target }) => setYear(target.value)} placeholder="Year built"></textarea>
      <textarea type="text" value={description} onChange={({ target }) => setDescription(target.value)} placeholder="Description"></textarea>
    </form>
     <img src={image} />
     <input type="text" value={image} onChange={({ target }) => setImage(target.value)} placeholder="image" />
  );

  const castleListing = castles.map((castle, i) => (
    <tr key={i}>
    </tr>
  ));
};



export default CastlesForm;
