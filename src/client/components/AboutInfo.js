import React from "react";
import styled from "styled-components";

export default function AboutInfo() {
  return (
    <Container>
      <div className="about-container">
        <div className="about-mealsharing">
          <h1>
            What is <br /> 'meal sharing'?
          </h1>
          <p>
            Every one has their own specialty! <nr />
            Meal sharing is sharing your own speical recipe and also learning
            about other culture.
            <br />
            Are you ready to share yours?
          </p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 800px;
  height: 1000px;
  margin: 0 auto;
  width: 1000px;
  height: 500px;

  .about-container {
    background-image: url("https://assets.livelifegetactive.com/20200221121118/Sharing-food-with-friends.jpg");
    width: 1000px;
    height: 500px;
    background-size: cover;
    margin: 0 auto;
    z-index: 1;
  }

  .about-mealsharing {
    position: absolute;
    width: 380px;
    height: 500px;
    background-color: black;
    opacity: 0.8;
    color: white;
    text-align: center;
    margin: auto;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      margin: 0.5rem;
      padding: unset;
      line-height: 3rem;
    }

    p {
      margin: 1.4rem;
      line-height: 1.725rem;
    }
  }
`;
