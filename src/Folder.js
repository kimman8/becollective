import React, { useState, useEffect } from 'react';
import { AiFillFolder } from 'react-icons/ai';
import { AiFillFolderOpen } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import SubFolder from './SubFolder';
import styled from 'styled-components';

const FolderStyles = styled.div`
  display: flex;
  align-items: center;
`;

function Folder({ folder }) {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };
  const [subF, setSubF] = useState({});
  return (
    <div>
      <FolderStyles>
        {toggle ? (
          <IoIosArrowForward onClick={handleClick} />
        ) : (
          <IoIosArrowDown onClick={handleClick} />
        )}
        {toggle ? (
          <AiFillFolder onClick={handleClick} />
        ) : (
          <AiFillFolderOpen onClick={handleClick} />
        )}
        <p>{folder.name}</p>
      </FolderStyles>
      <SubFolder folder={folder} handleClick={handleClick} toggle={toggle} />
    </div>
  );
}

export default Folder;
