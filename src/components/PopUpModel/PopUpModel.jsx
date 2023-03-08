import React, { useContext, useEffect } from "react";
import { PopUpContainer } from "./PopUp.style";
import CloseImg from "../../assets/images/PopUpMessage/close.png";
import BgImg from "../../assets/images/PopUpMessage/backgroud.png";
import { Context } from "../../Context";
import CongImg from "../../assets/images/PopUpMessage/congra.png";
import CongImg2 from "../../assets/images/PopUpMessage/congra-2.png";

const PopUpModel = ({ messages }) => {
  const { items, setItems } = useContext(Context);

  useEffect(() => {
    console.log("img", messages);
  }, [messages]);

  return (
    <PopUpContainer bg={BgImg}>
      <div className="popup-wrapper">
        <div
          className="close-btn"
          onClick={() =>
            setItems((prevState) => ({
              ...prevState,
              betMessage: false,
              airDropBetMessage: false,
            }))
          }
        >
          <img src={CloseImg} alt="close" />
        </div>
        <div className="message-wrapper">
          <div className="cong-wrapper">
            <img
              src={
                (items?.betMessage && CongImg) ||
                (items?.airDropBetMessage && CongImg2)
              }
              alt="congratulations"
            />
          </div>
        </div>
      </div>
    </PopUpContainer>
  );
};

export default PopUpModel;
