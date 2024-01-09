import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

function Test7() {
  const Amount = 80;
  const RemainingAmount = 90 - Amount;

  const Done = styled.div`
    width: ${Amount}vw;
    height: 30px;
    background-color: blue;
    color: white;
    font-family: 'SejongLight';
    text-align: center;
    line-height: 30px;
    margin-left: 10px;
  `;

  const Left = styled.div`
    width: ${RemainingAmount}vw;
    height: 30px;
    background-color: gray;
    margin-right: 10px;
  `;

  return (
    <Container>
      <ProcessCheck>
        <Done>90%</Done>
        <Left></Left>
      </ProcessCheck>
      <Question>
        [질문7] <br />
        <br />
        당신은 혼자 있는 시간을 어떻게 활용하시나요?
      </Question>
      <TestButton>새로운 것을 배우거나 탐험하는 데 사용한다.</TestButton>
      <TestButton>독서, 예술 또는 창조적인 활동에 시간을 투자한다.</TestButton>
      <TestButton>사고하고 고뇌하며 내적 탐구를 즐긴다.</TestButton>
      <TestButton>조용한 환경에서 고요한 시간을 보낸다.</TestButton>
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

const ProcessCheck = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  margin-top: 60px;
`;

const Question = styled.div`
  width: 90vw;
  color: white;
  font-family: 'SejongLight';
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const TestButton = styled.button`
  width: 60vw;
  height: 50px;
  background-color: white;
  margin: 10px;
  font-family: 'SejongLight';
`;

export default Test7;
