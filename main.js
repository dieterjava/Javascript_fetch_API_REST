// console.log('hello');
let postsList = document.querySelector(".posts-list");

let addPostForm = document.querySelector(".add-post-form");
//let postsList = document.getElementsByName('posts-list');
const titleValue = document.getElementById('title-value');
const bodyValue = document.getElementById('body-value');

let url = "http://localhost:3000/users";

let output = "";

// 1 show response
// fetch(url)
//  .then(response => console.log(response));
// 2 response in json, log to console, with forEach
/*   fetch(url)
     .then(response => response.json())
     .then(data => {
         data.forEach(user => {
             console.log(user)
         });
     }); */

fetch(url)
  .then((response) => response.json())
  .then((data) => renderPosts(data))

  const renderPosts = (posts) => {
    posts.forEach((user) => {
      output += `
        <div class="card mt-4 col-md-6 bg-light">
        <div class="card-body">
          <h5 class="card-title">${user.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted"></h6>
          <p class="card-text">${user.username}</p>
          <a href="${url}/${user.id}" class="card-link">Edit</a>
          <a href="${url}/${user.id}" class="card-link">Delete</a>
        </div>
      </div> `;
      console.log(user.name);
    });
    postsList.innerHTML = output;
    console.log(postsList);
  }



  addPostForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submitted!');

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: titleValue.value,
        username: bodyValue.value
      })

    })
      .then(response => response.json())
      .then(data =>{
        const dataArray = [];
        dataArray.push(data);
        renderPosts(dataArray);
      }) 
})

