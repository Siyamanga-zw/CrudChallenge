let blogs = document.querySelector('section#blogs .row');
let blogsContent = [
    {
        id:1,
        image:'https://i.postimg.cc/3NqDm1f1/new.jpg',
        title:'State in JavaScript explained by cooking a simple meal',
        description:'If you have ever cooked a meal at home, then you can understand how to write stateful code using object-oriented programming methods in JavaScript.When you start writing simple JavaScript programs, you dont need to worry about the number of variables you are using, or how different functions and objects work together.',
        author:'Kevin Kononenko',
        date:'Apr 29, 2019',
        readmore:'https://medium.com/free-code-camp/state-in-javascript-explained-by-cooking-a-simple-meal-2baf10a787ee',

    },
    {
        id:2,
        image:'https://i.postimg.cc/JnNLbzT2/1ed7119f2d02de539321234b29b8fcca.jpg',
        title:'Quirky Things That Programmers Say',
        description:'A list of common reactions programmers have when things go wrong and what they actually mean.Building applications is a time-consuming and sometimes grueling process, so much more if you work on a per-project basis and iteratively have to keep building applications spanning different domains and meeting various clients that have various expectations',
        author:'Timothy Mugayi',
        date:'Sep 8, 2019',
        readmore:'https://betterprogramming.pub/quirky-things-programmers-say-98c05b858f72',

    },

    {
        id:4,
        image:'https://i.postimg.cc/RhvNt8Tw/download.jpg',
        title:'Full Stack Developer Salary Trends in South Africa',
        description:'44.8% of survey respondents in our 2023 State of the Software Developer Nation identify as full stack developers, making it the most common role ahead of backend and frontend developers. Here we’ll look at average full stack developer salaries at each stage of their careers and how that compares to frontend and backend developers...',
        author:' Josh Nel',
        date:'26 May 2023',
        readmore:'https://www.offerzen.com/blog/full-stack-developer-salary-south-africa',

    }, 
    {
        id:5,
        image:'https://i.postimg.cc/3NqDm1f1/new.jpg',
        title:'State in JavaScript explained by cooking a simple meal',
        description:'If you have ever cooked a meal at home, then you can understand how to write stateful code using object-oriented programming methods in JavaScript.When you start writing simple JavaScript programs, you dont need to worry about the number of variables you are using, or how different functions and objects work together.',
        author:'Kevin Kononenko',
        date:'Apr 29, 2019',
        readmore:'https://medium.com/free-code-camp/state-in-javascript-explained-by-cooking-a-simple-meal-2baf10a787ee',

    },
    {
        id:6,
        image:'https://i.postimg.cc/JnNLbzT2/1ed7119f2d02de539321234b29b8fcca.jpg',
        title:'Quirky Things That Programmers Say',
        description:'A list of common reactions programmers have when things go wrong and what they actually mean.Building applications is a time-consuming and sometimes grueling process, so much more if you work on a per-project basis and iteratively have to keep building applications spanning different domains and meeting various clients that have various expectations',
        author:'Timothy Mugayi',
        date:'Sep 8, 2019',
        readmore:'https://betterprogramming.pub/quirky-things-programmers-say-98c05b858f72',

    },

    {
        id:8,
        image:'https://i.postimg.cc/RhvNt8Tw/download.jpg',
        title:'Full Stack Developer Salary Trends in South Africa',
        description:'44.8% of survey respondents in our 2023 State of the Software Developer Nation identify as full stack developers, making it the most common role ahead of backend and frontend developers. Here we’ll look at average full stack developer salaries at each stage of their careers and how that compares to frontend and backend developers...',
        author:' Josh Nel',
        date:'26 May 2023',
        readmore:'https://www.offerzen.com/blog/full-stack-developer-salary-south-africa',

    }, 
]

blogsContent.forEach((content)=>{
    blogs.innerHTML += `
    <div class="card" style="width: 25rem; margin:10px; margin-left:70px;">
  <img src="${content.image}" class="card-img-top" alt="..." style="height:250px;">
  <div class="card-body">
    <h5 class="card-title">${content.title}title</h5>
    <p class="card-text">${content.description}</p><span>${content.author}, ${content.date}</span>
    <a href="${content.readmore}" class="btn btn-primary">ReadMore</a>
  </div>
</div>`
})