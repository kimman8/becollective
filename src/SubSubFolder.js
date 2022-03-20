import React, { useState, useEffect } from 'react';
import File from './File';
import { AiFillFolder } from 'react-icons/ai';
import { AiFillFolderOpen } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import styled from 'styled-components';
const SubFolderStyles = styled.ul`
  display: flex;
  align-items: center;
`;

const FolderStyles = styled.div`
  display: flex;
  align-items: center;
`;
function SubSubFolder({ folder, subToggle, handleSubFolderClick }) {
  return (
    <div>
      {!subToggle &&
        folder.children.map((file) => (
          <SubFolderStyles>
            {file.type === 'file' ? (
              <File file={file} />
            ) : (
              <FolderStyles>
                {subToggle ? (
                  <IoIosArrowForward onClick={handleSubFolderClick} />
                ) : (
                  <IoIosArrowDown onClick={handleSubFolderClick} />
                )}
                {subToggle ? (
                  <AiFillFolder onClick={handleSubFolderClick} />
                ) : (
                  <AiFillFolderOpen onClick={handleSubFolderClick} />
                )}
                <p>{folder.children[0].children[0].name}</p>
              </FolderStyles>
            )}
          </SubFolderStyles>
        ))}
    </div>
  );
}

export default SubSubFolder;