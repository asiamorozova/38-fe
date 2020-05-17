export const postCastle = castle => {
  return fetch('http://localhost:7890/api/v1/castles'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(castle)
  }
    .then(res => res.json());

};
