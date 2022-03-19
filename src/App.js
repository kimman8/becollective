import React, { useState, useEffect } from 'react';
import Folder from './Folder';
function App() {
  const [folderData, setFolderData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  //this useEffect hook will run as soon as we load our app
  useEffect(() => {
    const getCard = async () => {
      try {
        const dataFromServer = await fetchData();
        setFolderData(dataFromServer);
        setLoading(false);
      } catch (e) {
        setError(e);
        console.error(e);
      }
    };
    getCard();
  }, []);
  //use fetch api to hit the json file and then put that data into our cards
  const fetchData = async () => {
    const res = await fetch(
      'https://dev21.becollective.com/api/v2/coding-challenges/dirs'
    );
    const data = await res.json();
    setFolderData(data);
    return data;
  };
  console.log(folderData);
  return (
    <div className='App'>
      {folderData && folderData.map((folder) => <Folder folder={folder} />)}
    </div>
  );
}

export default App;
