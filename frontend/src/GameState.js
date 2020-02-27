import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function GameState(props) {
    return (
        <Box style={{textAlign : 'center'}}>
            <Typography color="textSecondary">
                Your points: {props.points}
            </Typography>
            {props.button}
            <Typography color="textSecondary">
                Your last win: {props.lastWin}
            </Typography>
            <Typography color="textSecondary">
                Clicks to next win: {props.clicksToNextWin}
            </Typography>
        </Box>
    )
}
