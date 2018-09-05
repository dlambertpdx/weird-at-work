$(document).ready(() => {
  $.getJSON("/api/posts").then(addPosts);
});

function addPosts(posts) {
  // Add posts to page
  posts.forEach(post => {
    let newPost = $("<li>" + post.title + "</li>");
    $(".post-item").append(newPost);
  });
}
