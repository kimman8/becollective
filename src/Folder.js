import React, { useState } from 'react';
import { AiFillFolder } from 'react-icons/ai';
import { AiFillFolderOpen } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import SubFolder from './SubFolder';
import styled from 'styled-components';

const FolderStyles = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

function Folder({ folder }) {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <FolderStyles onClick={handleClick}>
        {toggle ? <IoIosArrowForward /> : <IoIosArrowDown />}
        {toggle ? <AiFillFolder /> : <AiFillFolderOpen />}
        <p>{folder.name}</p>
      </FolderStyles>
      <SubFolder folder={folder} handleClick={handleClick} toggle={toggle} />
    </div>
  );
}

export default Folder;
