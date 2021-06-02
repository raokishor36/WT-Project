import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Team Number: 4</h1>
          <PText>
            Team Members: 
            <br></br>
            Kishor R Rao 01FE18BCS095
            <br></br> 
            Kaustubh Borgavi 01FE18BCS091
            <br></br>
            Kartik Prajapat 01FE18BCS089
            <br></br>
            Koustav Ghosh 01FE18BCS099
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: "Home",
                path: "/",
                type: "Link",
              },
              {
                type: "Link",
                title: "Kishor",
                path: "/about",
              },
              {
                type: "Link",
                title: "Kaustubh",
                path: "/projects",
              },
              {
                type: "Link",
                title: "Kartik",
                path: "/contact",
              },
              {
                type: "Link",
                title: "Koustav",
                path: "/contact",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright" />
      <div className="container" />
    </FooterStyle>
  );
}
