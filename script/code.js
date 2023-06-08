let featured = document.querySelector('section#featured .row');
let featuredContent = [
    {
        id:1,
        image:'https://i.postimg.cc/3NqDm1f1/new.jpg',
        title:'State in JavaScript explained by cooking a simple meal',
        author:'Kevin Kononenko',
        date:'Apr 29, 2019',
        readmore:'https://medium.com/free-code-camp/state-in-javascript-explained-by-cooking-a-simple-meal-2baf10a787ee',

    },
    {
        id:2,
        image:'https://i.postimg.cc/JnNLbzT2/1ed7119f2d02de539321234b29b8fcca.jpg',
        title:'Quirky Things That Programmers Say',
        author:'Timothy Mugayi',
        date:'Sep 8, 2019',
        readmore:'https://betterprogramming.pub/quirky-things-programmers-say-98c05b858f72',

    },
    {
        id:3,
        image:'https://i.postimg.cc/JnNLbzT2/1ed7119f2d02de539321234b29b8fcca.jpg',
        title:'Quirky Things That Programmers Say',
        author:'Timothy Mugayi',
        date:'Sep 8, 2019',
        readmore:'https://betterprogramming.pub/quirky-things-programmers-say-98c05b858f72',

    },
]

    featuredContent.forEach((content)=>{
        featured.innerHTML += `
        <div class="card" style="width: 25rem; margin:10px; margin-left:70px;">
      <img src="${content.image}" class="card-img-top" alt="..." style="height:250px;">
      <div class="card-body">
        <h5 class="card-title">${content.title}title</h5>
        <p class="card-text">${content.description}</p><span>${content.author}, ${content.date}</span>
        <a href="${content.readmore}" class="btn btn-primary">ReadMore</a>
      </div>
    </div>`
    })