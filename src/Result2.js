import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import dolphin from './assets/dolphin.jpeg';

function Result2() {
  return (
    <Container>
      <MediumText>당신의 소울메이트 해양생물 친구는 바로!</MediumText>
      <LargeText>'바키타돌고래'</LargeText>
      <CharacterImage
        src={dolphin}
        alt="바키타돌고래 캐릭터 이미지"
      ></CharacterImage>
      <SmallText>
        {' '}
        <br />
        사교적이고 사람들과 어울리는 것을 즐기는 당신! <br />
        새로운 경험과 지식을 쌓는 것이 좋고 지능적인 성격을 가졌군요. 당신은
        '바키타돌고래'와 비슷한 성향을 가지고 있습니다.
        <br />
        <br />
        바키타돌고래는 소통과 놀이를 즐기는 지능적이고 사교적인 친구에요! 높은
        학습 능력을 가지고 있습니다. <br />
      </SmallText>
    </Container>
  );
}

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: #0e0e0e;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;
const LargeText = styled.div`
  width: 80vw;
  color: white;
  font-family: 'SejongBold';
  font-size: 40px;
  margin: 10px;
  text-align: center;
`;

const MediumText = styled.div`
  width: 80vw;
  color: white;
  font-family: 'SejongLight';
  font-size: 30px;
  margin: 10px;
  margin-top: 30px;
  text-align: center;
`;

const SmallText = styled.div`
  width: 50vw;
  color: white;
  font-family: 'SejongLight';
  font-size: 20px;
  margin: 10px;

  margin-bottom: 30px;
`;

const CharacterImage = styled.img`
  width: 70vw;
  height: 70vw;
  margin-top: 30px;
  margin-bottom: 30px;
  @media (min-width: 380px) {
    width: 350px;
    height: 350px;
  }
`;

export default Result2;
