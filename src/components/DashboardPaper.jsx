import { Box, Paper } from "@material-ui/core";

function DashboardPaper({ title, value, width }) {
  return (
    <Box className="hero-metrics" fontSize="20px" width={width}>
      <Paper className="ohm-card">
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
          <Box mt="10px" color={title !== "LET THE GAMES BEGIN:" ? "rgb(135,139,156)" : "black"} fontSize="16px">
            {title}
          </Box>
          <Box mt="10px" fontWeight="bold" color={title !== "APY" ? "black" : "rgb(171,146,245)"}>
            {value}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default DashboardPaper;
