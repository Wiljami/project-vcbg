import React from 'react'
import GameState from './GameState'
import GameButton from './GameButton'

class App extends React.Component {
    constructor(props) {
        super(props)
        if (localStorage.getItem('points') === null) {
            localStorage.setItem('points', 20)
        }
        this.state = {'points' :localStorage.getItem('points'),
            'clicksToNextWin' : '?',
            'lastWin' : '?'}
    }

    render() {
        let button;
        let data = []
        const points = localStorage.getItem('points')
        if (points <= 0) {
            button = <GameButton text='Reset Game' color='secondary' click={this.resetGame}/>;
        } else {
            button = <GameButton text='Play Game' color='primary' click={this.playGame}/>
        }
        data.push(<GameState
            points={this.state.points}
            lastWin={this.state.lastWin}
            clicksToNextWin={this.state.clicksToNextWin}
            button={button}
        />)

        return data
    }

    playGame = () => {
        fetch('/game').then(data => data.json()).then(this.updatePage)
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
        const points = 20
        localStorage.setItem('points', points)
        this.setState({'points' : points})
    }
}

export default App;
