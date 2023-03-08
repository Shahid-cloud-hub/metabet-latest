import "../RecentTrade/TradedropdownActive";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { metaMaskConnection } from "../../redux/walletConnect/walletConnectSlice";
import { useState, useEffect } from "react";
import MetabetMask from "../../abis/MetabetMask.json";
import BEP20 from "../../abis/ERC20.json";
import {
  BET_ADDRESS,
  ZERO_ADDRESS,
  METABET_ADDRESS,
  BET_ADDRESS2,
} from "../../constants";
import Utils from "../../utilities";

function Dropdown({ id, token, img, amount, name, win, betWinId }) {
  const metaMaskAddress = useSelector((state) => state.wallet);
  const dispatch = useDispatch();
  const [enterAmount, setEnterAmount] = useState("");
  const [teamT, setTeamT] = useState(0);
  const [allBetData, setAllBetData] = useState();
  const [Data_size, setDataSize] = useState(null);
  const [Data_total, setDataTotal] = useState(null);
  const [load_win, setLoad_Win] = useState(false);

  console.log("Window load", load_win, enterAmount);

  // console.log("Bet Amount", betWinId);
  const total = Number(enterAmount) + Number(Data_total);

  if (betWinId !== "") {
    // then is used to check if id is exist then the next function will run
    // data is an anonymous function
    Utils.EventOdd(id, betWinId, token).then(function (data) {
      setTeamT(Number(data / 1e18));
    });
  }
  const details = () => {
    Utils.PoolSize(id, token).then(function (data) {
      setDataSize(data);
    });
    Utils.PoolTotal(id, token).then(function (data) {
      setDataTotal((data / 1e18).toFixed(2));
    });
  };

  const multiplier = total / (teamT + Number(enterAmount));
  const payout = multiplier * Number(enterAmount);
  console.log("Multiplier", multiplier);
  console.log("Multiplier", isFinite(multiplier));
  console.log("Payout", payout);

  const BetNow = async (_id, _token, _amount, userResult) => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        let chainId = await ethereum.request({ method: "eth_chainId" });
        console.log("Connecteds to chains " + chainId);

        // String, hex code of the chainId of the bsc test network
        const testnetChainId = "0x61";
        const goerli = "0x5";
        const polygon = "0x89";
        const bsc = "0x38";
        if (_token === "") {
          if (chainId !== goerli) {
            alert("You are not connected to the Goerli Network!");
            return;
          } else {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const connectedContract = new ethers.Contract(
              BET_ADDRESS2,
              MetabetMask2.abi,
              signer
            );

            console.log("yes, Im here up");
            console.log("Going to pop wallet now to pay gas...");

            let Txn = await tokenContract.approve(
              BET_ADDRESS2,
              ethers.utils.parseUnits(_amount)
            );
            console.log(await signer.getAddress(), "your on right");
            setEnterAmount(0);
            alert("Working up");

            Txn = await connectedContract.bet(
              _id,
              _token,
              ethers.utils.parseUnits(_amount),
              userResult
            );
            await Txn.wait();
            setLoad_Win(true);
            return;
          }
        }
        if (chainId !== testnetChainId) {
          alert("You are not connected to the bsc Test Network!");
          return;
        } else {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          const tokenContract = new ethers.Contract(_token, BEP20.abi, signer);
          const connectedContract = new ethers.Contract(
            BET_ADDRESS,
            MetabetMask.abi,
            signer
          );

          if (_token === ZERO_ADDRESS) {
            const Txn = await connectedContract.betBNB(
              _id,
              ethers.utils.parseEther(_amount),
              userResult,
              { value: ethers.utils.parseEther(_amount) }
            );
            await Txn.wait();
            return;
          }

          console.log("Going to pop wallet now to pay gas...");
          console.log("yes, Im here down");

          let Txn = await tokenContract.approve(
            BET_ADDRESS,
            ethers.utils.parseUnits(_amount)
          );
          console.log(await signer.getAddress(), "down side");

          Txn = await connectedContract.bet(
            _id,
            name,
            ethers.utils.parseUnits(_amount),
            userResult
          );
          await Txn.wait();
          setLoad_Win(true);
          setEnterAmount("");
          alert("Working down");
          if (_token == METABET_ADDRESS) {
            await Utils.Airdrop(address);
            alert("you've successfully gotten free token");
          }
          return;
        }
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("Window load", load_win);
    details();
  }, [Data_size, Data_total, load_win, enterAmount]);

  console.log("payout", payout);

  return (
    <>
      <div className="payments-inputs-wrapper">
        <label>
          <div className="status">
            <div>
              <img src={img} alt="img" />
            </div>
            <span>{amount}</span>
          </div>
          <input
            type="text"
            placeholder="0.0000"
            value={enterAmount}
            onChange={(e) => setEnterAmount(e.target.value)}
          />
        </label>
        <label>
          <div className="status_3">
            <div>
              <img src={img} alt="img" />
            </div>
          </div>
          <input type="text" value={Data_total} disabled />
        </label>
        <label>
          <div className="status_3">
            <div>
              <img src={img} alt="img" />
            </div>
          </div>
          <input type="text" value={Data_size} disabled />
        </label>
        <label>
          <div className="status_4">
            <div>
              <img src={img} alt="img" />
            </div>
            <input
              type="text"
              value={isFinite(multiplier) ? multiplier.toFixed(2) : "0.00"}
              disabled
            />
          </div>
        </label>
        <label>
          <div className="status_5">
            <div>
              <img src={img} alt="img" />
            </div>
            {/* <span>
              {payout.toFixed(2) === "NaN" ? "0.000" : payout.toFixed(2)}
            </span> */}
          </div>
          <input
            type="text"
            value={payout.toFixed(2) === "NaN" ? "0.000" : payout.toFixed(2)}
            disabled
          />
        </label>
        {!metaMaskAddress.metaMaskAddress ? (
          <button
            className="bet-btn"
            id="btn"
            onClick={() => dispatch(metaMaskConnection())}
          >
            Connect Wallet
          </button>
        ) : (
          <button
            className="bet-btn"
            id="btn"
            style={{ background: "#fc4c1e" }}
            onClick={() => BetNow(id, token, enterAmount, betWinId)}
          >
            BET
          </button>
        )}
      </div>
    </>
  );
}

export default Dropdown;
