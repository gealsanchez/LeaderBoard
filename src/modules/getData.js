const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/O0kqxllytXmd1V0ITpgo/scores/';

const getData = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export default getData;