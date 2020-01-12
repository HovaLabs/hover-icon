import React from 'react';
import styled from 'styled-components';

import { FaSadCry, FaAdobe } from 'react-icons/fa';

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SlideOutHorizontal = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 160px;
  height: 50px;
  label{
    border-radius: 100%;
    border: 4px solid black;
    background: white;
    cursor: pointer;
    padding: 9px;
    position: absolute;
    z-index: 99999;
  }
  input {
  display: none;
  }
  .iconsWrapper {
    border: 4px solid black;
    border-radius: 0 25px 25px 0;
    position: absolute;
    transition: .5s all;
    left: -107px;
    ul {
      display: flex;
      list-style-type: none;
      margin-block-start: 0;
      margin-block-end: 0;
      padding: 0;
    }
    li{
      padding: 0 5px;
    }
  }
  input:checked ~ div.iconsWrapper {
    left: 20px;
  }
`;

const MainLabel = styled.div`
`;



const SadCry = styled(FaSadCry)`
`;

const Adobe = styled(FaAdobe)`
`

const App: React.FC = () => {
  return (
    <Container>
      <SlideOutHorizontal>
        <input type="checkbox" id="togglebox2" />
        <label htmlFor="togglebox2">
          <FaAdobe />
        </label>
        <div className="iconsWrapper">
          <ul>
            <li><SadCry /></li>
            <li><SadCry /></li>
            <li><SadCry /></li>
            <li><SadCry /></li>
          </ul>
        </div>
      </SlideOutHorizontal>
    </Container>
  );
}

export default App;
