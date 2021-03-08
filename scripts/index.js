function loadAllPosts() {
    window.location.href = "./html/postslist.html";
}

function showCreatePost() {
    var createPostModal = document.getElementById("createpost-modal");
    createPostModal.style.display = "flex";
}

function hideCreatePost() {
    var createPostModal = document.getElementById("createpost-modal");
    document.getElementById("createpost-form").reset();
    createPostModal.style.display = "none";
}