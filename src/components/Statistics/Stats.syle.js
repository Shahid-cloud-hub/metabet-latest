import styled from "styled-components";

export const StatisticsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: #0f212e;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 975px;

  .featured-banner-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    .flag_wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 10px;

      span {
        font-weight: 800;
        font-size: ${(props) => props.text};
        color: #ffffff;
      }
      img {
        width: 70px;
      }
    }

    .statistic_rectangle {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: #112533;
      gap: ${(props) => props.textGap};
      padding: 35px 10px;
      min-width: 150px;

      span:nth-child(1) {
        font-weight: 700;
        font-size: 18px;
        color: #ffffff;
      }

      span {
        display: flex;
        flex-direction: column;
        color: #b6b6b6;
        font-weight: 700;
        font-size: 14px;
      }
    }

    .player-VS {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 93px;
      gap: 0px;
      transform: none;

      span:nth-child(1) {
        font-weight: 700;
        font-size: 35px;
        color: #ffffff;
      }
      span {
        display: flex;
        align-items: center;
        text-align: center;
        color: #ffffff;
        font-weight: 700;
        font-size: 12px;
        padding: 10px;
      }
      #val {
        font-size: 14px;
      }
    }

    .time {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: #ffffff;

      span:nth-child(1) {
        font-size: 12px;
      }

      span {
        font-size: 16px;
        color: #ffd600;
      }
    }
  }
  @media screen and (max-width: 1080px) {
    max-width: 725px;
    margin: 10px 5px;
    .featured-banner-wrapper {
      gap: 10px;

      .player-VS {
        min-width: 33px;
        gap: 0px;
        span {
          font-size: 9px;
          padding: 5px;
        }

        span:nth-child(1) {
          font-size: 12px; /* font-size: 10px; */
        }
        #demo_1 {
          font-size: 9px;
        }
        #val {
          font-size: 12px;
        }
      }

      .time {
        font-size: 9px;

        span:nth-child(1) {
          font-size: 9px;
        }

        span {
          font-size: 12px;
          color: #ffd600;
        }
      }

      .portfolio {
        /* img {
          max-width: 20px;
        } */

        span {
          font-size: 10px;
        }
      }

      .vs {
        max-width: 30px;
        span:nth-child(1) {
          font-size: 12px;
        }

        .time {
          span:nth-child(1) {
            font-size: 9px;
          }

          span {
            font-size: 9px;
          }
        }
      }

      .rectangle {
        max-width: 25px;

        span:nth-child(1) {
          font-size: 10px;
        }

        span {
          font-size: 9px;
        }
      }

      .statistic_rectangle {
        padding: 25px 5px;
        min-width: 50px;
        gap: 5px;

        span:nth-child(1) {
          font-size: 12px;
          color: #ffffff;
        }

        span {
          font-weight: 500;
          font-size: 9px;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    max-width: 655px;
    margin: 10px 5px;
  }
  @media screen and (max-width: 820px) {
    max-width: 450px;
    margin: 10px 5px;
    .featured-banner-wrapper {
      gap: 10px;
      .flag_wrapper {
        img {
          width: 50px;
        }
        span {
          font-size: 10px;
        }
      }
      .player-VS {
        min-width: 33px;
        gap: 0px;
        span {
          font-size: 7px;
          padding: 5px;
        }

        span:nth-child(1) {
          font-size: 10px; /* font-size: 10px; */
        }
        #demo_1 {
          font-size: 7px;
        }
        #val {
          font-size: 10px;
        }
      }

      .time {
        font-size: 7px;

        span:nth-child(1) {
          font-size: 7px;
        }

        span {
          font-size: 9px;
          color: #ffd600;
        }
      }

      .portfolio {
        img {
          max-width: 20px;
        }

        span {
          font-size: 7px;
        }
      }

      .vs {
        max-width: 30px;
        span:nth-child(1) {
          font-size: 10px;
        }

        .time {
          span:nth-child(1) {
            font-size: 7px;
          }

          span {
            font-size: 7px;
          }
        }
      }

      .rectangle {
        max-width: 25px;

        span:nth-child(1) {
          font-size: 7px;
        }

        span {
          font-size: 6px;
        }
      }

      .statistic_rectangle {
        padding: 25px 5px;
        min-width: 70px;
        gap: 5px;

        span:nth-child(1) {
          font-size: 10px;
          color: #ffffff;
        }

        span {
          font-weight: 500;
          font-size: 7px;
        }
      }
    }
  }

  @media screen and (max-width: 620px) {
    .portfolio {
      img {
        max-width: 95px;
      }

      span {
        font-size: 20px;
      }
    }

    .vs {
      max-width: 90px;
      span:nth-child(1) {
        font-size: 50px;
      }
    }

    .rectangle {
      max-width: 105px;
    }
  }
  @media screen and (max-width: 520px) {
    .portfolio {
      img {
        max-width: 75px;
      }

      span {
        font-size: 16px;
      }
    }

    .vs {
      max-width: 90px;
      span:nth-child(1) {
        font-size: 45px;
      }
    }

    .rectangle {
      max-width: 90px;

      span:nth-child(1) {
        font-size: 10px;
      }

      span {
        font-size: 12px;
      }
    }
  }
  @media screen and (max-width: 420px) {
    max-width: 405px;
    .featured-banner-wrapper {
      gap: 10px;
      .flag_wrapper {
        img {
          width: 50px;
        }
        span {
          font-size: 10px;
        }
      }
      .player-VS {
        min-width: 33px;
        gap: 0px;
        span {
          font-size: 7px;
          padding: 5px;
        }

        span:nth-child(1) {
          font-size: 10px; /* font-size: 10px; */
        }
        #demo_1 {
          font-size: 7px;
        }
        #val {
          font-size: 10px;
        }
      }

      .time {
        font-size: 7px;

        span:nth-child(1) {
          font-size: 7px;
        }

        span {
          font-size: 9px;
          color: #ffd600;
        }
      }

      .portfolio {
        img {
          max-width: 20px;
        }

        span {
          font-size: 7px;
        }
      }

      .vs {
        max-width: 30px;
        span:nth-child(1) {
          font-size: 10px;
        }

        .time {
          span:nth-child(1) {
            font-size: 7px;
          }

          span {
            font-size: 7px;
          }
        }
      }

      .rectangle {
        max-width: 25px;

        span:nth-child(1) {
          font-size: 7px;
        }

        span {
          font-size: 6px;
        }
      }

      .statistic_rectangle {
        padding: 25px 5px;
        min-width: 70px;
        gap: 5px;

        span:nth-child(1) {
          font-size: 10px;
          color: #ffffff;
        }

        span {
          font-weight: 500;
          font-size: 7px;
        }
      }
    }
  }
  @media screen and (max-width: 375px) {
    max-width: 360px;
    .featured-banner-wrapper {
      gap: 10px;
      .flag_wrapper {
        img {
          width: 50px;
        }
        span {
          font-size: 10px;
        }
      }
      .player-VS {
        min-width: 33px;
        gap: 0px;
        span {
          font-size: 7px;
          padding: 5px;
        }

        span:nth-child(1) {
          font-size: 10px; /* font-size: 10px; */
        }
        #demo_1 {
          font-size: 7px;
        }
        #val {
          font-size: 10px;
        }
      }

      .time {
        font-size: 7px;

        span:nth-child(1) {
          font-size: 7px;
        }

        span {
          font-size: 9px;
          color: #ffd600;
        }
      }

      .portfolio {
        img {
          max-width: 20px;
        }

        span {
          font-size: 7px;
        }
      }

      .vs {
        max-width: 30px;
        span:nth-child(1) {
          font-size: 10px;
        }

        .time {
          span:nth-child(1) {
            font-size: 7px;
          }

          span {
            font-size: 7px;
          }
        }
      }

      .rectangle {
        max-width: 25px;

        span:nth-child(1) {
          font-size: 7px;
        }

        span {
          font-size: 6px;
        }
      }

      .statistic_rectangle {
        padding: 25px 5px;
        min-width: 70px;
        gap: 5px;

        span:nth-child(1) {
          font-size: 10px;
          color: #ffffff;
        }

        span {
          font-weight: 500;
          font-size: 7px;
        }
      }
    }
  }
  @media screen and (max-width: 375px) {
    .player-VS {
      min-width: 33px;
      gap: 0px;

      span:nth-child(1) {
        font-weight: 500;
        font-size: 12px;
      }
      span {
        font-weight: 500;
        font-size: 7px;
        padding: 10px;
      }

      .time {
        font-size: 7px;

        span:nth-child(1) {
          font-size: 7px;
        }

        span {
          font-size: 9px;
          color: #ffd600;
        }
      }
    }
    .portfolio {
      img {
        max-width: 35px;
      }

      span {
        font-size: 7px;
      }
    }

    .vs {
      max-width: 30px;
      span:nth-child(1) {
        font-size: 20px;
      }

      .time {
        span:nth-child(1) {
          font-size: 7px;
        }

        span {
          font-size: 7px;
        }
      }
    }

    .rectangle {
      max-width: 25px;

      span:nth-child(1) {
        font-size: 7px;
      }

      span {
        font-size: 6px;
      }
    }
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-around;
  background: #112533;
  border-radius: 10px;
  padding: 10px 15px;
  gap: 10px;

  .win_wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .betStat {
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: #0a1a25;
    border-radius: 10px;
    padding: 10px;
    max-width: 135px;
    width: 100%;
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    span {
      font-family: "Inter";
      font-size: 10px;
      color: #ffffff;
      font-weight: 700;
    }
    #clr {
      color: #fc4c1e;
    }
    label {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    input {
      border: none;
      background: none;
      text-align: end;
    }
  }

  @media screen and (max-width: 420px) {
    padding: 10px;
  }

  @media screen and (max-width: 375px) {
    padding: 10px;
  }

  .WIN {
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #0a1a25;
    border-radius: 10px;
    padding: 10px;
    max-width: 133px;
    width: 100%;
    gap: 10px;
    .title {
      display: flex;
      gap: 2px;
    }
    .bet-btn {
      background: #fc4c1e;
    }

    p {
      text-align: center;
      font-weight: 700;
      font-size: 16px;
      color: #ffffff;
    }
    button {
      align-items: center;
      max-width: 163.8px;
      min-height: 37px;
      background: #fc4c1e;
      border-radius: 6px;
      color: #ffffff;
      border: none;
      font-size: 14px;
      cursor: pointer;
      padding: 10px 55px;
    }
    span {
      font-weight: 500;
      font-size: 10px;
      color: #d6d6d6;
    }
  }

  @media screen and (max-width: 1080px) {
    max-width: 690px;
    margin: 0px 5px;

    .WIN {
      padding: 10px;
      max-width: 145px;

      p {
        font-size: 12px;
      }

      button {
        font-size: 10px;
        padding: 5px 55px;
        min-height: 20px;
      }
    }
  }

  @media screen and (max-width: 820px) {
    max-width: 420px;
    margin: 0px 5px;

    .WIN {
      padding: 5px;
      max-width: 76px;
      gap: 5px;
      border-radius: 3.75px;

      p {
        font-size: 9px;
      }

      button {
        padding: 0px 25px;
        font-size: 7px;
        border-radius: 2.25px;
        min-height: 15px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .WIN {
      padding: 10px;
      max-width: 150px;

      p {
        font-size: 12px;
      }

      button {
        font-size: 10px;
        padding: 5px 45px;
        min-height: 20px;
      }
    }
  }
  @media screen and (max-width: 620px) {
    .WIN {
      padding: 5px 5px;
      max-width: 115px;

      p {
        font-size: 9px;
      }

      button {
        font-size: 8.386px;
        padding: 0px 35px;
        min-height: 20px;
      }
    }
  }
  @media screen and (max-width: 420px) {
    .WIN {
      padding: 5px;
      max-width: 76px;
      gap: 5px;
      border-radius: 3.75px;

      p {
        font-size: 6px;
      }

      button {
        padding: 0px 25px;
        font-size: 5.25px;
        border-radius: 2.25px;
        min-height: 15px;
      }
    }
  }
  @media screen and (max-width: 375px) {
    max-width: 340px;
    margin: 0 auto;

    .WIN {
      padding: 5px;
      max-width: 76px;
      gap: 5px;
      border-radius: 3.75px;

      p {
        font-size: 6px;
      }

      button {
        padding: 0px 25px;
        font-size: 5.25px;
        border-radius: 2.25px;
        min-height: 15px;
      }
    }
  }
`;
