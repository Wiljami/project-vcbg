import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)
        if (localStorage.getItem('points') === null) {
            localStorage.setItem('points', 20)
            localStorage.setItem('clicksToNextWin', 0)
            localStorage.setItem('lastWin', 0)
        }
    }

    render() {
        let data = []
        const points = localStorage.getItem('points')
        if (points <= 0) {
            data.push(<GameButton text='Reset Game' click={this.resetGame}/>)
        } else {
            data.push(<GameButton text='Play Game' click={this.playGame}/>)
        }
        data.push(<GameState
            points={points}
            lastWin={localStorage.getItem('lastWin')}
            clicksToNextWin={localStorage.getItem('clicksToNextWin')}/>)
        return data
    }

    playGame = async () => {
        const hr = await fetch('/game')
        const data = await hr.json()
        let points = localStorage.getItem('points')
        points = points - 1 + data.lastWin
        console.log('Points: ' + points)
        localStorage.setItem('points', points)
        localStorage.setItem('clicksToNextWin', data.clicksToNextWin)
        localStorage.setItem('lastWin', data.lastWin)
        this.setState({'points' : points})
    }

    resetGame = () => {
        const points = 20
        localStorage.setItem('points', points)
        this.setState({'points' : points})
    }
}

class GameButton extends React.Component {
    constructor(props) {
        super(props)
        this.click = props.click
        this.text = props.text
    }

    render() {
        return <button onClick={this.props.click} >{this.props.text}</button>
    }
}

class GameState extends React.Component {
    render () {
        let data = []
        data.push(<h1>Your points: {this.props.points}</h1>)
        data.push(<h1>Your last win: {this.props.lastWin}</h1>)
        data.push(<h1>Clicks to next win: {this.props.clicksToNextWin}</h1>)
        return data
    }
}

export default App;
