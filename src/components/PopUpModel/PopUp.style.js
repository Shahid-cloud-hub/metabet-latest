import styled from "styled-components";

export const PopUpContainer = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .popup-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    background-image: url(${(props) => props.bg});
    min-width: 333px;
    min-height: 177px;
    padding: 15px;
    background-repeat: no-repeat;
    transition: all 0.5s ease-out;
  }
  .close-btn {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    cursor: pointer;
  }

  img {
    position: absolute;
  }

  .message-wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    height: 176px;
  }

  .cong-wrapper {
    img {
      transform: translate(10px, 10px);
    }
  }
`;
