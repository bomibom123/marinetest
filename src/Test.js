import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

function Test() {
  const Amount = 10;
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
        <Done>15%</Done>
        <Left></Left>
      </ProcessCheck>
      <Question>
        [질문1] <br />
        <br />
        당신은 새로운 환경이나 활동을 경험하거나, 다른 사람들과 함께 있을 때
        어떤 모습인가요?
      </Question>
      <TestButton>매우 즐겁고 다양한 것들이 궁금하다.</TestButton>
      <TestButton>기분 좋게 소통에 참여한다.</TestButton>
      <TestButton>기분이 좋지도 나쁘지도 않다.</TestButton>
      <TestButton>
        함께하는 시간을 별로 즐기지 않으며 고요한 시간을 선호한다.
      </TestButton>
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

export default Test;
