const a = document.querySelector('.searchButton')
const input = document.querySelector('.searchInput')

let url = "/post"

function runScript() {
    a.href += input.value
    console.log("working")

}

input.addEventListener('input', runScript)

