let time = 0
let score = 0
let gameactive = false
document.getElementById("startthegame").addEventListener('click', function () {

    gameactive = true
    time = 30
    document.getElementById("Timer").innerText = `Time: 30`
    document.getElementById("Score").innerText = `Score: 0`
    document.getElementById("startthegame").innertext = `Reset`

    let timeinterval = setInterval(() => {

        if (time > 0) {
            time--
            document.getElementById("Timer").innerText = `Time: ${time}`
        }
        else {
            gameactive = false
            clearInterval(timeinterval)
            document.getElementById("Timer").innerText = `Times up!`

        }

        console.log(time)
    }, 1000);
    let moleInterval = setInterval(() => {
        if (!gameactive) {
            clearInterval(moleInterval)
            return
        }
        let moles = document.querySelectorAll(".moleHoles")

        let moleactive = Math.floor(Math.random() * moles.length)
        moles[moleactive].classList.add("moles")

        setTimeout(() => {
            console.log(moleactive)
            moles[moleactive].classList.remove("moles")
        }, 750)
    }, 500);

    document.querySelectorAll(".moleHoles").forEach((element) => {
        element.addEventListener('click', function (e) {
            if (!e.target.classList.contains("moles")) {
                score--
                document.getElementById("Score").innerText = `Score: ${score}`
                return
            }
            else {
                score++
                document.getElementById("Score").innerText = `Score: ${score}`

            }

        })
    })

})
