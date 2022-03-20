import React, { useState } from 'react';
import File from './File';
import SubSubFolder from './SubSubFolder';
import { AiFillFolder } from 'react-icons/ai';
import { AiFillFolderOpen } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import styled from 'styled-components';
const SubFolderStyles = styled.ul`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const FolderStyles = styled.div`
  display: flex;
  align-items: center;
`;
function SubFolder({ folder, toggle }) {
  const [subToggle, setSubToggle] = useState(true);
  const handleSubFolderClick = () => {
    setSubToggle(!subToggle);
  };
  return (
    <div>
      {!toggle &&
        folder.children.map((file) => (
          <SubFolderStyles>
            {file.type === 'file' ? (
              <File file={file} />
            ) : (
              <FolderStyles onClick={handleSubFolderClick}>
                {subToggle ? <IoIosArrowForward /> : <IoIosArrowDown />}
                {subToggle ? <AiFillFolder /> : <AiFillFolderOpen />}
                <p>{folder.children[0].name}</p>
              </FolderStyles>
            )}
          </SubFolderStyles>
        ))}
      <SubSubFolder
        folder={folder}
        handleSubFolderClick={handleSubFolderClick}
        subToggle={subToggle}
      />
    </div>
  );
}

export default SubFolder;
