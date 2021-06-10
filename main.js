/*
*    Javascript Code , Web Components
*   for a POST, PATCH, DELETE example
*/
let postsList = document.querySelector(".posts-list");
let addPostForm = document.querySelector(".add-post-form");
const titleValue = document.getElementById('id_title');
const contentValue = document.getElementById('id_content');
const btnSubmit = document.querySelector('.btn');

let url = "http://localhost:3000/posts";

let output = "";

// initial fetch 
fetch(url)
  .then((response) => response.json())
  .then((data) => renderPosts(data))

  const renderPosts = (posts) => {
    posts.forEach((post) => {
      output += `
        <div class="card mt-4 col-md-6 bg-light">
        <div class="card-body" data-id=${post.id}>
          <h5 class="card-title">${post.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted"></h6>
          <p class="card-text">${post.content}</p>
          <a href="#" class="card-link" id="id_edit">Edit</a>
          <a href="#" class="card-link" id="id_delete">Delete</a>
        </div>
      </div> `;
      // console.log(post.content);
    });
    postsList.innerHTML = output;
   // console.log(postsList);
  }

  // listener for submit , new and edit, POST and PATCH
  addPostForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('POST , ....Form submitted!');

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: titleValue.value,
        content: contentValue.value
      })

    })
      .then(response => response.json())
      .then(data =>{
        const dataArray = [];
        dataArray.push(data);
        renderPosts(dataArray);
      }) 
})

// event listener for edit and delete
postsList.addEventListener('click', (e) =>{
 // console.log(e.target.id);
 e.preventDefault();
 let editButtonIsPressed = e.target.id == "id_edit";
 let deleteButtonIsPressed = e.target.id == "id_delete";
 
// console.log(e.target.parentElement.dataset.id);

let id = e.target.parentElement.dataset.id;

if (deleteButtonIsPressed){
  fetch( `${url}/${id}`, 
  {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'}
    })
      .then(result => result.json())
      .then(() => location.reload());
  }


  if (editButtonIsPressed){
    const parent = e.target.parentElement;
    let title = parent.querySelector('.card-title').textContent;
    let content =  parent.querySelector('.card-text').textContent;

    titleValue.value = title;
    contentValue.value = content;

    btnSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('calling PATCH');

      fetch( `${url}/${id}`, 
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            title: titleValue.value,
            content: contentValue.value
        })
        })
          .then(result => result.json())
          .then(() => location.reload());

    })
  }
})

