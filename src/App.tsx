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
  label{
    border: 4px solid black;
    cursor: pointer;
    position: absolute;
    z-index: 99999;
  }
  input {
    display: none;
  }
  .iconsWrapper {
    position: absolute;
    ul {
      display: none;
      list-style-type: none;
    }
    li{
      padding: 0 5px;
    }
  }
  input:checked ~ div.iconsWrapper {
    ul {
      display: flex;
    }
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
