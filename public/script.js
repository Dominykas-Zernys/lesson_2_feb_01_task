// KINTAMUJU SUSIKURIMAS

const titleButton = document.querySelector('#title-button')
const postsButton = document.querySelector('#posts-button')
const townsButton = document.querySelector('#towns-button')

// PAVADINIMO MYGTUKAS

const createTitleElement = document.createElement('div')
titleButton.after(createTitleElement)
titleButton.addEventListener('click', ()=>{      
    fetch('http://localhost:3000/')
        .then(res => res.json())
        .then(data => {
            createTitleElement.innerHTML = data
    })
})

// POSTU MYGTUKAS

const createPostsWrapper = document.createElement('div')
createPostsWrapper.id = 'posts-wrapper'
postsButton.after(createPostsWrapper)
postsButton.addEventListener('click', ()=>{      
    fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then(data => {
            createPostsWrapper.innerHTML = ''
            data.forEach(post=>{
                const createPost = document.createElement('div')
                createPost.innerHTML += `<h1>${post.Title}</h1><p>${post.Text}</p>`
                createPostsWrapper.append(createPost)                
            })
            
        })
})

// MIESTU MYGTUKAS

const createTownsElement = document.createElement('div')
townsButton.after(createTownsElement)
townsButton.addEventListener('click', ()=>{      
    fetch('http://localhost:3000/api/towns')
        .then(res => res.json())
        .then(data => {
            createTownsElement.innerHTML = data
    })
})

