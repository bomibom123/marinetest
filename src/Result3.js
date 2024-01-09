import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import monk from './assets/monk.jpeg';

function Result3() {
  return (
    <Container>
      <MediumText>당신의 소울메이트 해양생물 친구는 바로!</MediumText>
      <LargeText>'태평양몽크바다표범'</LargeText>
      <CharacterImage
        src={monk}
        alt="태평양몽크바다표범 캐릭터 이미지"
      ></CharacterImage>
      <SmallText>
        {' '}
        <br />
        내성적이고 조용한 성격이지만 새로운 사람을 만나는 것이 <br />
        두렵지는 않은 당신은! 태평양몽크바다표범과 비슷한 성향을 가지고
        있습니다.
        <br />
        <br />
        태평양몽크바다표범은 고립된 섬에서 생활하며, 조용한 분위기의 휴식을
        선호해요. <br />
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
  width: 50vw;
  height: 30vw;
  margin-top: 30px;
  margin-bottom: 30px;
  /* @media (min-width: 380px) {
    width: 350px;
    height: 350px;
  } */
`;

export default Result3;
