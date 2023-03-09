import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import Nav from "../Components/Nav/Nav";
import useBreakpoint from "../hooks/useBreakpoints";
import Sidebar from "../components/Sidebar/Sidebar";
import { useEffect } from "react";
import PopUpModel from "../components/PopUpModel/PopUpModel";
import { Context } from "../Context";
import Confetti from "react-confetti";

const ContainerWrapper = styled("div")`
  display: flex;
  position: relative;

  .popup-model {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    position: absolute;
  }
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .wrapper-main {
    display: flex;
    flex-direction: row;
  }

  header {
    grid-column-start: 1;
    grid-column-end: 4;
    z-index: 9;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  }

  .left-sidebar {
    grid-row-start: 2;
    grid-row-end: 3;
    background-color: #081d2a;
  }

  .main {
    background: ${(props) => props.bgColorVal};
    width: 100%;
    position: relative;

    .main-wrapper-parent {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: space-between;

      .pie {
        display: flex;
        justify-content: center;
        background: #223542;
        border-radius: 8px;
        width: 100%;
        max-width: 630px;
        height: 400px;
        margin: 50px auto;
        filter: drop-shadow(0px 2.404px 2.404px rgba(0, 0, 0, 0.25));
      }
    }
  }

  .active-popup {
    filter: blur(8px);
  }

  footer {
    grid-column: 1 / span 3;
  }

  @media screen and (max-width: 768px) {
    .left-sidebar {
      display: none;
    }
  }
`;

const Dashboard = () => {
  const { isDesktop, isTablet } = useBreakpoint();
  const { items } = useContext(Context);
  const [celebRemove] = useState(true);

  console.log(items, "dashboard");

  const availableWidth = window?.screen?.availWidth;

  return (
    <>
      <ContainerWrapper>
        {items?.betMessage ||
          (items?.airDropBetMessage && celebRemove && (
            <Confetti width={availableWidth} height={1200} gravity={0.77} />
          ))}
        <div
          className={
            items?.betMessage || items?.airDropBetMessage
              ? "container active-popup"
              : "container"
          }
        >
          <header>
            <Nav />
          </header>
          <div className="wrapper-main">
            {(isDesktop || isTablet) && (
              <div className="left-sidebar">
                <Sidebar />
              </div>
            )}
            <div className="main" id="detail">
              <Outlet />
              <ToastContainer />
            </div>
          </div>
        </div>
        {items?.betMessage && (
          <div className="popup-model">
            <PopUpModel />
          </div>
        )}
        {items?.airDropBetMessage && (
          <div className="popup-model">
            <PopUpModel />
          </div>
        )}
      </ContainerWrapper>
    </>
  );
};

export default Dashboard;
