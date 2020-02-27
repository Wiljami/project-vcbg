import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import GameState from './GameState'
import GameButton from './GameButton'

class App extends React.Component {
    initialPoints = 20
    constructor(props) {
        super(props)
        if (localStorage.getItem('points') === null) {
            localStorage.setItem('points', this.initialPoints.toString())
        }
        this.state = {'points' :localStorage.getItem('points'),
            'clicksToNextWin' : '?',
            'lastWin' : '?'}
    }

    render() {
        let button;
        const points = localStorage.getItem('points')
        if (points <= 0) {
            button = <GameButton text='Reset Game' color='secondary' click={this.resetGame}/>;
        } else {
            button = <GameButton text='Play Game' color='primary' click={this.playGame}/>
        }

        return (
            <Paper>
                <Typography variant="h4" component="h1" gutterBottom>
                    The Amazing Button Press Game!
                </Typography>
                <GameState
                points={this.state.points}
                lastWin={this.state.lastWin}
                clicksToNextWin={this.state.clicksToNextWin}
                button={button}/>
            </Paper>
            )
    }

    playGame = () => {
        fetch('/game').then(data => data.json()).then(this.updatePage).catch(this.serverError)
    }

    serverError = () => {
        console.log("Error connecting to the server.")
        // TODO: Add proper error handling
    }

    updatePage = (data) => {
        let points = localStorage.getItem('points')
        points = points - 1 + data.lastWin
        localStorage.setItem('points', points)
        this.setState({'points' : points,
            'clicksToNextWin' : data.clicksToNextWin,
            'lastWin' : data.lastWin})
    }

    resetGame = () => {
        localStorage.setItem('points', this.initialPoints.toString())
        this.setState({'points' : this.initialPoints})
    }
}

export default App;
