import React from "react";
import { TRUSCTokenContainer, Container1, Balance } from "./TRUSCToken.styles";
import Trueai from "../../assets/images/TRUSC/Trueai.webp";
import trusc from "../../assets/images/TRUSC/trusc.webp";
import TransferBtn from "../../assets/images/TRUSC/Transfer-btn.webp";
import WithdrawBtn from "../../assets/images/TRUSC/Withdraw-btn.webp";
import { TruscData } from "../../JasonData/FeaturedBannerData";
import TruscTab from "./TruscTab/TruscTab";
import Tether from "../../assets/images/TRUSC/Tether.webp";
import USDC from "../../assets/images/TRUSC/USDC.webp";
import BUSD from "../../assets/images/TRUSC/BUSD.webp";
import liquidityFox from "../../assets/images/TRUSC/liquidityFox.webp";
import foxmini from "../../assets/images/TRUSC/fox-mini.webp";
import usdt from "../../assets/images/TRUSC/usdt-mini.webp";
import icon from "../../assets/images/TRUSC/switch.webp";

const TRUSCToken = () => {
  return (
    <TRUSCTokenContainer>
      <Container1>
        <div className="fox-stats">
          {TruscData?.map((item) => (
            <div className="text">
              <span id="title">{item.title}</span>
              <input type="text" placeholder={item.placeholder} disabled />
            </div>
          ))}
        </div>
      </Container1>
      <Balance>
        <div className="liquidity-pool">
          <div className="heading">
            <span>Liquidity Pools</span>
            <hr />
          </div>
          <div className="balance">
            <div className="icon">
              <img src={Tether} al="Tether" />
              <span>$0.00</span>
            </div>
            <div className="icon">
              <img src={BUSD} al="BUSD" />
              <span>$0.00</span>
            </div>
            <div className="icon">
              <img src={USDC} al="USDC" />
              <span>$0.00</span>
            </div>
            <div className="icon">
              <img src={liquidityFox} al="liquidityFox" />
              <span>$0.00</span>
            </div>
          </div>
        </div>
        <div className="liquidity-pool">
          <div className="heading1">
            <span>TruSwap</span>
            <hr />
          </div>
          <div className="convert">
            <div className="truai">
              <label>
                From: <img src={foxmini} />
                <input placeholder="TRUSC" />
              </label>{" "}
              <span>00.00</span>
              <div className="text">
                <span id="grey">Balance: 25.00</span>
                <span id="blue">MAX</span>
              </div>
            </div>
            <img id="icon" src={icon} alt="icon" />
            <div className="truai">
              <label>
                To: <img src={usdt} />
                <input placeholder="USDC" />
              </label>{" "}
              <span>00.00</span>
              <div className="text">
                <span id="grey">Balance: 25.00</span>
                <span id="blue">MAX</span>
              </div>
            </div>
          </div>
        </div>
      </Balance>
    </TRUSCTokenContainer>
  );
};

export default TRUSCToken;
