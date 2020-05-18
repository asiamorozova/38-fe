export const postCastle = castle => {
  return fetch(`${process.env.API_URl}/api/v1/castles`), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(castle)
  }
    .then(res => res.json());

};
