function showPost() {
  window.location.href = "../html/post.html";
}

var deleteModal = document.getElementById("delete-modal");
var postId;
function deletePost(id) {
  postId=document.getElementById(id);
  deleteModal.style.display = "flex";
}

function closeDeleteModal() {
  deleteModal.style.display = "none";
}

function deletePostConfirm() {
  postId.remove();
  deleteModal.style.display = "none";
}
