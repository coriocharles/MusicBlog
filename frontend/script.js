const posts = document.querySelector(".posts")
let currentlyViewing = ""

function addPosts(allPosts) {
    // Adds all of the gifs to the dom
    allPosts.innerHTML = ''
    allPosts.forEach(post => {
        const postNode = document.createElement('button')
        postNode.innerText = (`${post.Song} reviewed by ${post.Author}`)
        posts.appendChild(postNode)
        postNode.addEventListener("click", () => {
            currentlyViewing = post._id
            console.log(currentlyViewing)
            window.location.href = "http://www.google.com"
        })
    })
}

axios.get('http://localhost:4000/posts/all').then(response => {
    // gets the initial data
    console.log(response)
    addPosts(response.data)
})

