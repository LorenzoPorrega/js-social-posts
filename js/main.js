const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const container = document.querySelector(".posts-list");
const singlePost = "";
const postId = [];

posts.forEach((singlePost, i) => {
  container.innerHTML += `<div class="post">
                            <div class="post__header">
                                <div class="post-meta">                    
                                    <div class="post-meta__icon">
                                        <img class="profile-pic" src="${singlePost.author.image}" alt="${singlePost.author.name}">                    
                                    </div>
                                    <div class="post-meta__data">
                                        <div class="post-meta__author">${singlePost.author.name}</div>
                                        <div class="post-meta__time">4 mesi fa</div>
                                    </div>                    
                                </div>
                            </div>
                            <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
                            <div class="post__image">
                                <img src="${singlePost.media}" alt="${singlePost.author.name}">
                            </div>
                            <div class="post__footer">
                                <div class="likes js-likes">
                                    <div class="likes__cta">
                                        <a class="like-button  js-like-button" data-postid="${i}">
                                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                            <span class="like-button__label">Mi Piace</span>
                                        </a>
                                    </div>
                                    <div class="likes__counter">
                                        Piace a <b id="like-counter-1" class="js-likes-counter">${singlePost.likes}</b> persone
                                    </div>
                                </div> 
                            </div>            
                          </div>`;
  if(singlePost.author.image === null){
    const profilePic = document.querySelectorAll(".post-meta__icon");
    profilePic[i].classList.add("profile-pic-default");
    const iconDiv = document.querySelector(".profile-pic-default");
    const capitalInitialsFunct =  capitalInitials(singlePost);
    iconDiv.innerHTML = `<span>${capitalInitialsFunct}</span>`;
  }
postId.push(i);                     
});

function capitalInitials(x){
  let authorName = x.author.name;
  const splitName = authorName.split(" ");
  const firstName = splitName[0][0];
  const lastName = splitName[1][0];
  const initials = firstName + lastName;
  return initials;
}

console.log(postId);

const likeButtons = document.querySelectorAll('.like-button');
const likeCounters = document.querySelectorAll('like-counter-1');

for (let i = 0; i < likeButtons.length; i++) {
  const element = likeButtons[i];
  element.addEventListener('click', function (e){
    likeButtons[i].classList.toggle("liked-button");
  });
}