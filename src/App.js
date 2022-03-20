import React, { useState, useEffect } from 'react';
import './App.css';

import Folder from './Folder';
function App() {
  // function mapTypes(arr, acc = []) {
  //   for (const o of arr) {
  //     acc.push(o.type);
  //     if (o.owns.length > 0) {
  //       acc = mapTypes(o.owns, acc);
  //     }
  //   }
  //   return acc;
  // }

  // function findOcc(arr, key) {
  //   let arr2 = [];

  //   arr.forEach((x) => {
  //     // Checking if there is any object in arr2
  //     // which contains the key value
  //     if (
  //       arr2.some((val) => {
  //         return val[key] == x[key];
  //       })
  //     ) {
  //       // If yes! then increase the occurrence by 1
  //       arr2.forEach((k) => {
  //         if (k[key] === x[key]) {
  //           k['occurrence']++;
  //         }
  //       });
  //     } else {
  //       // If not! Then create a new object initialize
  //       // it with the present iteration key's value and
  //       // set the occurrence to 1
  //       let a = {};
  //       a[key] = x[key];
  //       a['occurrence'] = 1;
  //       arr2.push(a);
  //     }
  //   });

  //   return arr2;
  // }
  // let key = 'type';
  // let summer = (object1) => {
  //   let sum = 0;
  //   for (const value of Object.values(object1)) {
  //     if (typeof value === 'number') {
  //       sum += value;
  //     }
  //     if (typeof value === 'object') {
  //       sum += summer(value);
  //     }
  //   }
  //   return sum;
  // };
  const [folderData, setFolderData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  // const clickToOpen = () => {
  //   setOpen(!open);
  //   console.log('working!!!!');
  // };

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
  // const SubStyles = styled.ul`
  //   display: ${({ open }) => (!open ? 'block' : 'none')};
  //   /* display: block; */
  //   color: green;
  // `;
  // console.log(mapTypes(folderData));
  return (
    <div className='app'>
      {folderData && folderData.map((folder) => <Folder folder={folder} />)}
      {/* <p>Total Files: {mapTypes(folderData)}</p>
      <p>Total Filesize: {Math.floor(summer(folderData) / 1000000)}MB</p> */}
      <p>Total Files: 5</p>
      <p>Total Filesize: 921MB</p>
    </div>
  );
}

export default App;
