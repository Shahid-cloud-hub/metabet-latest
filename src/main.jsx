import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "./Font/Cabinet-Medium/CabinetGrotesk-Bold.ttf";
import { RouterProvider } from "react-router";

// Routes //
import Dashboard from "./routes/Dashboard";

// Pages //
import UFC from "./pages/UFC";
import POLITICS from "./pages/Polities";
import DXYPage from "./pages/DXYPage";

// Components //
import WORLDCUPLANDINGPAGE from "./components/WorldcupLandingPage/WorldcupLandingPage";
import BITCOIN from "./components/BitcoinPrice/Bitcoin";
import ETHEREUM from "./components/Ethereum/Ethereum";
import CIRCKET from "./components/CricketBanners/CricketLandingPage";
import CRICKETEVENT from "./components/CricketBanners/CricketEvent";
import POLITICSDETAILS from "./components/Politics/PoliticsDetails";
import HOWITWORKS from "./components/HowItsWork/HowItWorks";
import MYACTIVEBETS from "./components/ActiveBet/ActiveBet";
import MYBETHISTORY from "./components/BETHistory/BETHistory";
import WHITEPAPER from "./components/WhitePaper/WhitePaper";
import AIRDROP from "./components/Airdrop/AirDrop";
import BUGBOUNTY from "./components/BugBounty/BugBounty";
import INVESTORDECK from "./components/InvestorDeck/InvestorDeck";
import CONTACTUS from "./components/Contact/Contact";
import SPONSORSHIP from "./components/Sponsorship/Sponsorship";
import COOKIES from "./components/Cookies/Cookies";
import PRIVACY from "./components/Privacy/Privacy";
import TERMS from "./components/Terms/Terms";
import GETEVENT from "./components/UFcComponents/GetEvent";
import STATSCOMPONENT from "./components/Statistics/StatsComponent";
import TRUTH2EARN from "./components/Truth2earn/Truth2earn";
import TRUSCTOKEN from "./components/TRUSCToken/TRUSCToken";

// Football Events Section //
import REGFOOTBALL from "./pages/RegFootball";

// Leagues Section //
import ALLFOOTBALLEVENTS from "./components/FootballLeagues/Football";
import GetStatistics from "./components/Statistics/GetStatistics";

let persistor = persistStore(store);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <WORLDCUPLANDINGPAGE />,
      },
      {
        path: "/how-it-works",
        element: <HOWITWORKS />,
      },
      {
        path: "/my-active-bets",
        element: <MYACTIVEBETS />,
      },
      {
        path: "/my-bet-history",
        element: <MYBETHISTORY />,
      },
      {
        path: "/truth-2-earn",
        element: <TRUTH2EARN />,
      },
      {
        path: "/trusc-token",
        element: <TRUSCTOKEN />,
      },
      {
        path: "/dxy",
        element: <DXYPage />,
      },
      {
        path: "/bitcoin",
        element: <BITCOIN />,
      },
      {
        path: "/ethereum",
        element: <ETHEREUM />,
      },
      {
        path: "/football",
        element: <REGFOOTBALL />,
        children: [
          {
            path: "champions-league",
            element: <ALLFOOTBALLEVENTS group_type="champions-league" />,
          },
          {
            path: "ligue-1",
            element: <ALLFOOTBALLEVENTS group_type="ligue-1" />,
          },
          {
            path: "laliga",
            element: <ALLFOOTBALLEVENTS group_type="laliga" />,
          },
          {
            path: "premier-league",
            element: <ALLFOOTBALLEVENTS group_type="premier-league" />,
          },
          {
            path: "serie-a",
            element: <ALLFOOTBALLEVENTS group_type="serie-a" />,
          },
          {
            path: "bundesliga",
            element: <ALLFOOTBALLEVENTS group_type="bundesliga" />,
          },
        ],
      },
      {
        path: ":group/:title/stats/:id",
        element: <STATSCOMPONENT />,
      },
      {
        path: "/cricket",
        element: <CIRCKET />,
      },
      {
        path: "/cricket-event",
        element: <CRICKETEVENT />,
      },
      {
        path: "/ufc",
        element: <UFC />,
        children: [
          {
            path: "ufc-fight-night",
            element: <ALLFOOTBALLEVENTS group_type="ufc-fight-night" />,
          },
          {
            path: "ufc-285",
            element: <ALLFOOTBALLEVENTS group_type="ufc-285" />,
          },
          {
            path: "ufc-286",
            element: <ALLFOOTBALLEVENTS group_type="ufc-286" />,
          },
        ],
      },
      {
        path: "/event/:group/:title",
        element: <GETEVENT />,
      },
      {
        path: "/stats/:group/:title/:id",
        element: <STATSCOMPONENT />,
      },
      {
        path: ":group/:title/statistics/:id",
        element: <GetStatistics />,
      },
      {
        path: "/politics",
        element: <POLITICS />,
      },
      {
        path: "/politics-details",
        element: <POLITICSDETAILS />,
      },
      {
        path: "/whitepaper",
        element: <WHITEPAPER />,
      },
      {
        path: "/airdrops",
        element: <AIRDROP />,
      },
      {
        path: "/bug-bounty",
        element: <BUGBOUNTY />,
      },
      {
        path: "/investordeck",
        element: <INVESTORDECK />,
      },
      {
        path: "/contact",
        element: <CONTACTUS />,
      },
      {
        path: "/sponsorship",
        element: <SPONSORSHIP />,
      },
      {
        path: "/cookies",
        element: <COOKIES />,
      },
      {
        path: "/privacy",
        element: <PRIVACY />,
      },
      {
        path: "/terms",
        element: <TERMS />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
