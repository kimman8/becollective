import React from 'react';
import { BsFileEarmarkTextFill } from 'react-icons/bs';
import styled from 'styled-components';

const FileStyles = styled.div`
  display: flex;
  align-items: center;
`;
const FileSizeStyles = styled.p`
  margin-left: 10px;
`;

function File({ file }) {
  return (
    <FileStyles>
      <BsFileEarmarkTextFill />
      <p>{file.name}</p>
      <FileSizeStyles> {Math.floor(file.size / 1000000)}MB</FileSizeStyles>
    </FileStyles>
  );
}

export default File;
