import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import GameState from './GameState'
import GameButton from './GameButton'
import Grid from "@material-ui/core/Grid";
import ErrorDialog from "./ErrorDialog";
import DialogContentText from "@material-ui/core/DialogContentText";

const initialPoints = 20

class App extends React.Component {
    constructor(props) {
        super(props)
        if (localStorage.getItem('points') === null) {
            localStorage.setItem('points', initialPoints.toString())
        }


        this.state = {'points' :localStorage.getItem('points'),
            'clicksToNextWin' : -1,
            'lastWin' : -1,
            'errorDialog' : false,
            'scoreDialog': false
        }
    }

    render() {
        let button;
        const points = localStorage.getItem('points')
        if (points <= 0) {
            button = <GameButton text='Reset Game' color='secondary' click={this.resetGame}/>
        } else {
            button = <GameButton text='Play Game' color='primary' click={this.playGame}/>
        }

        return (
            <Grid
                container
                spacing={10}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                <ErrorDialog
                    state = {this.state.scoreDialog}
                    handleClose={this.resetGame}
                    buttonText='RESET'
                    title='GAME OVER'
                    text='You ran out of points. Click reset to restart the game.'
                />
                <ErrorDialog
                    state = {this.state.errorDialog}
                    handleClose={this.handleClose}
                    buttonText='OK'
                    title='Server Error'
                    text='There is something wrong with connecting to the server. :('
                />
                <Paper elevation={5} style={{padding: 25}}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        The Amazing Button Press Game!
                    </Typography>
                    <GameState
                    points={this.state.points}
                    lastWin={this.state.lastWin}
                    clicksToNextWin={this.state.clicksToNextWin}
                    button={button}/>
                </Paper>
            </Grid>
            )
    }

    playGame = () => {
        fetch('/game').then(data => data.json()).then(this.updatePage).catch(this.serverError)
    }

    serverError = () => {
        this.setState({'errorDialog' : true})
    }

    handleClose = () => {
        this.setState({'errorDialog' : false})
    }

    updatePage = (data) => {
        let points = localStorage.getItem('points')
        points = points - 1 + data.lastWin
        localStorage.setItem('points', points)
        this.setState({'points' : points,
            'clicksToNextWin' : data.clicksToNextWin,
            'lastWin' : data.lastWin})
        if (points === 0) {
            this.setState({'scoreDialog' : true})
        }
    }

    resetGame = () => {
        localStorage.setItem('points', initialPoints.toString())
        this.setState({
            'points' : initialPoints,
            'scoreDialog' : false
        })
    }
}

export default App;
