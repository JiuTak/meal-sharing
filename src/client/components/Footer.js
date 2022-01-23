import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <ul className="footer-container">
        <li>
          <ul className="footer-content">
            <h3>Meal Sharing</h3>
            <p>Enghavevej 80,</p>
            <p>2450 København</p>
          </ul>
        </li>

        <li>
          <ul className="footer-content">
            <h3>Contact</h3>
            <li>
              <a href="tel:004561608800">+45 00 11 22 33</a>
            </li>
            <li>
              <a href="mailto:info@itkartellet.dk">info@mealsharing.dk</a>
            </li>
            <li>
              <a href="/support">Customer Support</a>
            </li>
          </ul>
        </li>

        <li>
          <ul className="footer-content">
            <h3>Services</h3>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/meals">Meals</a>
            </li>
            <li>
              <a href="/sharing">Sharing</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="copyright">
        <span>©Copyright | 2021 Jiu Tak, HYF Copenhagen, Denmark</span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  list-style-type: none;
  height: 100%;
  width: 100vw;
  margin: unset;
  background-color: #b1d8bb;

  h3 {
    color: #138b87;
  }

  a {
    text-decoration: unset;
    color: white;
    line-height: 2rem;
    transition: all 0.6s linear;

    &:hover {
      cursor: pointer;
      color: #49945e;
      transition: all 0.3 ease;
      text-decoration: overline;
    }
  }

  p {
    text-align: left;
    width: 210px;
  }

  li {
    list-style-type: none;
    width: 210px;
  }

  .footer-container {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    background-color: #b1d8bb;
    color: white;
    list-style-type: none;
    height: 250px;
    margin: unset;

    @media (max-width: 960px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 100%;
    }
  }

  .footer-content {
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    padding: unset;
  }

  .copyright {
    text-align: center;
    color: #fff;
    padding: 2rem;
  }
`;
