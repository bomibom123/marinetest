import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

function Test4() {
  const Amount = 50;
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
        <Done>60%</Done>
        <Left></Left>
      </ProcessCheck>
      <Question>
        [질문4] <br />
        <br />
        당신은 평소 어떤 방식으로 계획을 세우시나요?
      </Question>
      <TestButton>계획을 무조건 세우는 편이며 꼭 지켜야 한다.</TestButton>
      <TestButton>계획을 세우는 편이지만 지키지 않아도 된다.</TestButton>
      <TestButton>계획을 세울 때도 있고 아닐 때도 있다.</TestButton>
      <TestButton>계획을 세우고 행동하지 않는다.</TestButton>
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

export default Test4;
