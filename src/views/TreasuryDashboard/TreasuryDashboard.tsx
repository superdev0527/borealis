import { memo } from "react";
import "./treasury-dashboard.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { useSelector } from "react-redux";

import { Paper, Grid, Box, Zoom, Container, useMediaQuery } from "@material-ui/core";
import DashboardPaper from "src/components/DashboardPaper";
import {
  MarketCap,
  OHMPrice,
  WSOHMPrice,
  CircSupply,
  BackingPerOHM,
  CurrentIndex,
  Price,
  TVL,
  APY,
  TreasuryMarketValue,
} from "./components/Metric/Metric";

const TreasuryDashboard = memo(() => {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  // const marketPrice = useSelector(state => {
  //   return state.app.marketPrice;
  // });
  // const circSupply = useSelector(state => {
  //   return state.app.circSupply;
  // });
  // const totalSupply = useSelector(state => {
  //   return state.app.totalSupply;
  // });
  // const marketCap = useSelector(state => {
  //   return state.app.marketCap;
  // });

  return (
    <div id="treasury-dashboard-view" className={`${isSmallScreen && "smaller"} ${isVerySmallScreen && "very-small"}`}>
      <Container
        style={{
          paddingLeft: isSmallScreen || isVerySmallScreen ? "10%" : "10%",
          paddingRight: isSmallScreen || isVerySmallScreen ? "10%" : "10%",
        }}
      >
        <Box fontSize="20px" display="flex" justifyContent="center" mb="30px">
          <Box display="flex" justifyContent="space-between" width="80%">
            <Box className="dashbutton">BUY</Box>
            <Box className="dashbutton">BOND</Box>
          </Box>
        </Box>
        <DashboardPaper title="LET THE GAMES BEGIN:" value="18d 9h 0m 18s" width="100%" />
        <Box display="flex" justifyContent="space-between" flexDirection={isSmallScreen ? "column" : "row"}>
          <DashboardPaper title="" value={APY} width="calc(35% - 30px)" />
          <DashboardPaper title="" value={Price} width="calc(35% - 30px)" />
          <DashboardPaper title="" value={MarketCap} width="calc(35% - 30px)" />
        </Box>
        <Box display="flex" justifyContent="space-between" flexDirection={isSmallScreen ? "column" : "row"}>
          <DashboardPaper title="" value={TVL} width="calc(35% - 30px)" />
          <DashboardPaper title="" value={TreasuryMarketValue} width="calc(35% - 30px)" />
          <DashboardPaper title="" value={CircSupply} width="calc(35% - 30px)" />
        </Box>
        <Box display="flex" justifyContent="space-between" flexDirection={isSmallScreen ? "column" : "row"}>
          <DashboardPaper title="" value={BackingPerOHM} width="calc(50% - 20px)" />
          <DashboardPaper title="Staking Return Since Start" value="1.47x" width="calc(50% - 20px)" />
        </Box>
      </Container>
    </div>
  );
});

const queryClient = new QueryClient();

// Normally this would be done
// much higher up in our App.
export default () => (
  <QueryClientProvider client={queryClient}>
    <TreasuryDashboard />
  </QueryClientProvider>
);
