window.addEventListener('load', () => {
    const button = document.querySelector('#play')
    button.addEventListener('click', () => {
        const fetchLocations = async () => {
            const hr = await fetch('http://localhost:8080/game')
            const data = await hr.json()
            let points = localStorage.getItem('points')
            points = points - 1 + data.lastWin
            localStorage.setItem('points', points)
            document.querySelector('#points').innerHTML = `Your points: ` + points
            document.querySelector('#winnings').innerHTML = `Points from last click: ` + data.lastWin
            document.querySelector('#nextWin').innerHTML = `Clicks to next win: ` + data.clicksToNextWin
        }
        fetchLocations()
    })
})

if (localStorage.getItem('points') === null) {
    localStorage.setItem('points', 20)
}
