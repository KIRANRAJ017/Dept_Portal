import React from 'react';
import styled from 'styled-components';
import cand1 from "../assests/images/user3.jpg"

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const TeamLogo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 10px;
  border-radius: 50%;
`;

const TeamName = styled.h2`
  margin: 0;
`;

const Coach = styled.p`
  margin: 5px 0;
`;

const Players = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Player = styled.li`
  margin-bottom: 5px;
`;

const Achievements = styled.div`
  margin-top: 20px;
`;

const AchievementTitle = styled.h3`
  margin: 0;
`;

const AchievementList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const AchievementItem = styled.li`
  margin-bottom: 5px;
`;

const Sports = () => {
  const achievements1 = [
    "Champions of the Engineering College Basketball Tournament 2023",
    "Runner-up in the State Basketball Championship 2022",
    "Best Player Award: Player 1 (State Basketball Championship 2022)"
  ];

  const achievements2 = [
    "Champions of the Engineering College Football Tournament 2023",
    "Runner-up in the State Football Championship 2022",
    "Best Player Award: Player 1 (State Football Championship 2022)"
  ];

  return (
    <Container>
      <Title>Department Sports</Title>
      <Card>
        <TeamLogo src={cand1} alt="Team Logo" />
        <TeamName> Basketball Team</TeamName>
        <Coach>Coach: John Doe</Coach>
        <Coach>Assistant Coach: Jane Doe</Coach>
        <p>Players:</p>
        <Players>
          <Player>Player 1</Player>
          <Player>Player 2</Player>
          <Player>Player 3</Player>
          <Player>Player 4</Player>
          <Player>Player 5</Player>
        </Players>
        <Achievements>
          <AchievementTitle>Achievements</AchievementTitle>
          <AchievementList>
            {achievements1.map((achievement, index) => (
              <AchievementItem key={index}>{achievement}</AchievementItem>
            ))}
          </AchievementList>
        </Achievements>
      </Card>
      <Card>
        <TeamLogo src={cand1} alt="Team Logo" />
        <TeamName>Football Team</TeamName>
        <Coach>Coach: John Smith</Coach>
        <Coach>Assistant Coach: Jane Smith</Coach>
        <p>Players:</p>
        <Players>
          <Player>Player 1</Player>
          <Player>Player 2</Player>
          <Player>Player 3</Player>
          <Player>Player 4</Player>
          <Player>Player 5</Player>
        </Players>
        <Achievements>
          <AchievementTitle>Achievements</AchievementTitle>
          <AchievementList>
            {achievements2.map((achievement, index) => (
              <AchievementItem key={index}>{achievement}</AchievementItem>
            ))}
          </AchievementList>
        </Achievements>
      </Card>
    </Container>
  );
};

export default Sports;
