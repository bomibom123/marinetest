import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

function Test5() {
  const Amount = 75;
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
        <Done>75%</Done>
        <Left></Left>
      </ProcessCheck>
      <Question>
        [질문5] <br />
        <br />
        당신은 자신이 감상적인 편이라고 생각하시나요?
      </Question>
      <TestButton>매우 그렇다.</TestButton>
      <TestButton>그런 편이다.</TestButton>
      <TestButton>보통이다.</TestButton>
      <TestButton>그렇지 않다.</TestButton>
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

export default Test5;
