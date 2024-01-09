import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

function Test2() {
  const Amount = 20;
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
        <Done>30%</Done>
        <Left></Left>
      </ProcessCheck>
      <Question>
        [질문2] <br />
        <br />
        새로운 사람이 있는 모임에 참석하는 것에 대해 어떻게 생각하십니까?
      </Question>
      <TestButton>매우 좋아함.</TestButton>
      <TestButton>다소 좋아함.</TestButton>
      <TestButton>보통. 중립적인 입장.</TestButton>
      <TestButton>좋아하지 않음.</TestButton>
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

export default Test2;
