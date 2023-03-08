import styled from "styled-components";

export const TRUSCTokenContainer = styled.div`
  display: flex;
  margin: 20px;
  flex-direction: column;
  gap: 80px;
  img {
    cursor: pointer;
  }
`;

export const Container1 = styled.div`
  width: 100%;
  margin: 20px 10px;
  display: flex;
  gap: 20px;

  .fox-stats {
    display: flex;
    gap: 20px;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 7px;
    max-width: 108px;
    min-height: 72px;
    background: linear-gradient(180deg, #1c1c1c 39.58%, #28516b 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px #1e90ff;
    border-radius: 8px;

    #title {
      font-family: "MostraNuova";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #5f9ea0;
    }
    input {
      background-color: transparent;
      width: 100%;
      max-width: 75px;
      padding: 5px 5px;
      text-align: center;
      border: none;
    }
    input::placeholder {
      font-family: "MostraNuova";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 143.7%;
      color: #0070c0;
      text-shadow: 0px 0px 30px #000000;
    }
  }
`;

export const Balance = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .liquidity-pool {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 100%;
    max-width: 473px;
    min-height: 225px;
    background: linear-gradient(180deg, #1f313d 24.68%, #1c1c1c 63.46%);
    border: 1px solid #5f9ea0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    gap: 60px;

    .heading {
      padding-top: 10px;
      text-align: center;
      span {
        font-family: "MostraNuova";
        font-style: normal;
        font-weight: 900;
        font-size: 21px;
        line-height: 95%;
        color: #5f9ea0;
      }
      hr {
        height: 2px;
        width: 433px;
        background: #5f9ea0;
        box-shadow: 0px 0px 0px #ffffff;
        border: none;
        margin-top: 10px;
      }
    }
    .heading1 {
      padding-top: 10px;
      text-align: center;
      span {
        font-family: "MostraNuova";
        font-style: normal;
        font-weight: 900;
        font-size: 21px;
        line-height: 95%;
        color: #1e90ff;
      }
      hr {
        height: 2px;
        width: 433px;
        background: #1e90ff;
        box-shadow: 0px 0px 0px #ffffff;
        border: none;
        margin-top: 10px;
      }
    }
    .convert {
      display: flex;
      align-items: center;
    }
    .balance {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 0px 35px;

      .icon {
        span {
          font-family: "Junegull";
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 140%;
          color: #ffffff;
        }
      }
    }

    content {
      position: absolute;
      display: none;
    }

    .truai {
      display: flex;
      flex-direction: column;
      gap: 10px;

      label {
        font-size: 15px;
        color: #637592;
        display: flex;
        gap: 5px;

        input {
          border: none;
          background: transparent;
          padding-left: 10px;
          max-width: 89px;
        }
        input::placeholder {
          font-size: 15px;
          color: #ffffff;
        }
        #icon {
          margin-right: 40px;
        }
      }

      span {
        font-family: "MostraNuova";
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 95%;
        color: #ffffff;
      }

      #grey {
        font-weight: 500;
        font-size: 15px;
        line-height: 95%;
        color: #637592;
      }
      #blue {
        font-weight: 700;
        font-size: 12px;
        line-height: 95%;
        color: #3d6eff;
      }
    }
  }

  .currency {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    .item {
      display: flex;
      flex-direction: column;
      gap: 10px;
      #currency {
        font-family: "junegull";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        color: #ffffff;
      }
    }
  }
  .fox-stats {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 5px;
    span {
      font-size: 12px;
      color: #999999;
      font-family: "MostraNuova";
    }

    #rate {
      font-family: "Junegull";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      color: #ffffff;
    }
  }
`;
