window.addEventListener('load', () => {
    const button = document.querySelector('#play')
    button.addEventListener('click', () => {
        const fetchLocations = async () => {
            const hr = await fetch('http://localhost:8080/game')
            const data = await hr.json()
            document.querySelector('#points').innerHTML = `Your points: ` + data.points
            document.querySelector('#winnings').innerHTML = `Points from last click: ` + data.lastWin
        }
        fetchLocations()
    })
})
