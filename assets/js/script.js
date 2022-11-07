function fetchAPIData() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            const advice = document.querySelector("#wisdom")
            advice.innerHTML = ""
            advice.append(data.slip.advice)
        })
}