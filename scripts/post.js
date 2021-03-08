var postTitle = document.getElementById("post-header");
var postContent = document.getElementById("content");
var numberOfClick = 0;

function myFunction(button) {
  if (postTitle.contentEditable == "true") {
    postTitle.contentEditable = "false";
    postContent.contentEditable = "false";
    postTitle.style.border = "none";
    postContent.style.border = "none";
    button.innerHTML = "Edit <i class=\"fa fa-pencil-square-o\"></i>";
    postTitle.classList.remove("editable");
    postContent.classList.remove("editable");

  } else {
    postTitle.contentEditable = "true";
    postContent.contentEditable = "true";
    postTitle.style.border = "1px solid pink";
    postContent.style.border = "1px solid pink";
    button.innerHTML = "Save <i class=\"fa fa-floppy-o\"></i>";
    postTitle.classList.add("editable");
    postContent.classList.add("editable");

  }
}


function addLike() {
  var likeButton = document.getElementById("add-like");
  likeButton.innerHTML =
    '<i class="fa fa-thumbs-up ">' + "</i>" + "&nbsp;" + "Liked";
  likeButton.style.border = "none";
  numberOfClick += 1;
  if (numberOfClick != 0) {
    if (numberOfClick == 1) {
      document.getElementById("like-count").innerHTML =
        numberOfClick + " person likes this!";
    } else {
      document.getElementById("like-count").innerHTML =
        numberOfClick + " people like this!";
    }
  }
}

// Method to add user comments
function addComment(comment) {
  if (comment.value.length > 0) {
    var commentBox = document.getElementById("comment-list");
    commentBox.style.display = "flex";
    document.getElementById("comment-list").innerHTML +=
        '<p id="comment-posted">' + comment.value + "</p>";
    var userComment = document.getElementById("userComment");
    userComment.value = userComment.defaultValue;
  } else {
    alert("Please enter some comment");
  }
}
