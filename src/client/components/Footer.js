import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <ul className="footer-container">
        <li>
          <div className="footer-content">
            <div className="">
                <h4>Meal Sharing</h4>
                <p>Enghavevej 80,</p>
                <p>2450 København</p>
            </div>
          </div>
        </li>

        <li>
          <div className="footer-content">
            <ul className="footer-contact">                
            <h4>Contact</h4>
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
          </div>
        </li>

        <li>
          <div className="footer-content">
            <h4>Services</h4>
                <ul class="links-wrapper" style={{ padding:"unset"}}>
                    <li><a>About</a></li>
                    <li><a>Meals</a></li>
                    <li><a>Sharing</a></li>
                </ul>
          </div>
        </li>
        
      </ul>
    </Container>
  );
}

const Container = styled.div`
    list-style-type: none;
    height: 100%;
    width: 100vw;
    margin: unset;

    a {
        text-decoration: unset;
        color: white;    
        line-height: 2rem;    
    }

    li {
        list-style-type: none;
    }

    .footer-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #b1d8bb;
        color: white;
        list-style-type: none;
        max-width: 1300px;
        height: 250px;
        margin: unset;

    }

    .footer-content {
        align-items: center;
        flex-direction: column;
        justify-content: flex-start;
        align-content: flex-start;

    }
`;
