import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import manta from './assets/manta.jpeg';

function Result() {
  return (
    <Container>
      <MediumText>당신의 소울메이트 해양생물 친구는 바로!</MediumText>
      <LargeText>'만타 가오리'</LargeText>
      <CharacterImage
        src={manta}
        alt="만타 가오리 캐릭터 이미지"
      ></CharacterImage>
      <SmallText>
        {' '}
        <br />
        사람들과 어울리는 것이 좋고 다른 사람을 돕는 것이 좋지만! <br />
        무리지어 교류하는 것보다 소수의 친한 사람과 시간을 보내는 당신은 '만타
        가오리'와 비슷한 성향을 가지고 있습니다.
        <br />
        <br />
        만타 가오리는 대체로 온화하며 사람과 친근하게 지내지만, 소음과 빛에
        민감해 때로는 도망치거나 숨기도 해요. <br />
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

export default Result;
