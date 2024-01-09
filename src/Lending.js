import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import poster from './assets/poster.jpeg';

function Lending() {
  return (
    <Container>
      <BigTitle>멸종위기 해양생물 성격유형 TEST</BigTitle>
      <SmallTitle>
        7가지 해양생물 중 나와 소울 메이트인 친구를 찾아라!
      </SmallTitle>
      <Poster src={poster} alt="해양생물 캐릭터 사진"></Poster>
      <HintButtonBox>
        <HintButton>
          {' '}
          <Link to="/Test" style={{ textDecoration: 'none', color: 'black' }}>
            1번 문항
          </Link>
        </HintButton>
      </HintButtonBox>

      <HintButtonBox>
        <HintButton>
          {' '}
          <Link to="/Test2" style={{ textDecoration: 'none', color: 'black' }}>
            2번 문항
          </Link>
        </HintButton>
      </HintButtonBox>

      <HintButtonBox>
        <HintButton>
          {' '}
          <Link to="/Test3" style={{ textDecoration: 'none', color: 'black' }}>
            3번 문항
          </Link>
        </HintButton>
      </HintButtonBox>

      <HintButtonBox>
        <HintButton>
          {' '}
          <Link to="/Test4" style={{ textDecoration: 'none', color: 'black' }}>
            4번 문항
          </Link>
        </HintButton>
      </HintButtonBox>

      <HintButtonBox>
        <HintButton>
          {' '}
          <Link to="/Test5" style={{ textDecoration: 'none', color: 'black' }}>
            5번 문항
          </Link>
        </HintButton>
      </HintButtonBox>

      <HintButtonBox>
        <HintButton>
          {' '}
          <Link to="/Test7" style={{ textDecoration: 'none', color: 'black' }}>
            7번 문항
          </Link>
        </HintButton>
      </HintButtonBox>

      <HintButtonBox>
        <HintButton>
          {' '}
          <Link to="/Result" style={{ textDecoration: 'none', color: 'black' }}>
            만타가오리 결과페이지
          </Link>
        </HintButton>
      </HintButtonBox>

      <HintButtonBox>
        <HintButton>
          {' '}
          <Link
            to="/Result2"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            바키타돌고래 결과페이지
          </Link>
        </HintButton>
      </HintButtonBox>

      <HintButtonBox>
        <HintButton>
          {' '}
          <Link
            to="/Result3"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            태평양몽크바다표범 결과페이지
          </Link>
        </HintButton>
      </HintButtonBox>
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

const BigTitle = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 800;
  margin-top: 60px;
  margin-bottom: 30px;
  font-family: 'SejongBold';
`;

const SmallTitle = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 30px;
  font-family: 'SejongLight;';
`;

const Poster = styled.img`
  width: 100vw;
  height: 100vw;
  margin-top: 30px;
  margin-bottom: 30px;
  @media (min-width: 380px) {
    width: 350px;
    height: 350px;
  }
`;

const HintButtonBox = styled.div`
  max-width: 100vw;
  background-color: #0e0e0e;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

const HintButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: white;
  margin: 20px;
  font-family: 'SejongLight';
`;

export default Lending;
