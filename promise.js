let promise = fetch("https://jsonplaceholder.typicode.com/posts").then(angel => angel.json()).then(value => {
    let result = value.map(user => `<li>${user.title}</li>`)
    document.body.innerHTML = result.join("")
})
console.log(promise);