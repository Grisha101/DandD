import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { NUMBER_STATS_KEYS } from './App.constants';
import { NumberInput } from './components/NumberInput';

const GlobalStyle = createGlobalStyle`
  * { 
    box-sizing: border-box;
  }

  html {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
    font-size: 16px;
  }
`;

const UIContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 2px dashed red;
`;

const UITitle = styled.h2`
  width: 100%;
  margin: 0.2rem 0 0.8rem;
  font-size: 1.5rem;
  border-bottom: 1px solid black;
`;

const UIColumn = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.7rem;
`;

function App() {
  const [characterData, setCharacterData] = useState<CharacterStats>({
    name: '',
    class: '',
    race: '',
    age: 0,
    level: 0,
    image: '',
    armor: 0,
    charc: 0,
    fast: 0,
    mind: 0,
    power: 0,
    state: 0,
    wise: 0,
  });



  const setCharacterImage = (value: string) => {
    setCharacterData({
      ...characterData,
      image: value
    });
  };

  const setCharacterStat = (statName: keyof NumberStats, value: number) => {
    if (NUMBER_STATS_KEYS.indexOf(statName) !== -1) {
      setCharacterData({
        ...characterData,
        [statName]: value
      });
    }
  }

  return (
    <div>
      <GlobalStyle />
      Character generator
      <div>{characterData.name}</div>
      <div>
        <input type="file"
          onChange={(event) => {
            if (event.target) {
              // @ts-ignore
              const file = event.target.files[0];
              const reader = new FileReader();
              reader.onload = () => {
                setCharacterImage(reader.result as string);
              };
              reader.readAsDataURL(file);
            }
          }}
          accept={"image/png, image/jpeg"}
        />
        <input value={characterData.name} type="text" onChange={(e) => {
          setCharacterData({
            ...characterData,
            name: e.target.value
          });
        }} />
      </div>
      <UIContainer>
        <UITitle>Stats:</UITitle>
        <UIColumn>
          <NumberInput
            label={'armor'}
            value={1}
            onChange={value => setCharacterStat('armor', value)}
          />
          <NumberInput
            label={'power'}
            value={1}
            onChange={value => setCharacterStat('power', value)}
          />
          <NumberInput
            label={'fast'}
            value={1}
            onChange={value => setCharacterStat('fast', value)}
          />
          <NumberInput
            label={'state'}
            value={1}
            onChange={value => setCharacterStat('state', value)}
          />
        </UIColumn>
        <UIColumn>
          <NumberInput
            label={'mind'}
            value={1}
            onChange={value => setCharacterStat('mind', value)}
          />
          <NumberInput
            label={'charc'}
            value={1}
            onChange={value => setCharacterStat('charc', value)}
          />
          <NumberInput
            label={'wise'}
            value={1}
            onChange={value => setCharacterStat('wise', value)}
          />
        </UIColumn>
      </UIContainer>
      <UIContainer>
        <textarea value={'test'}></textarea>
      </UIContainer>

    </div>
  );
}

export default App;
