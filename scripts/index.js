function loadAllPosts() {
    window.location.href = "./html/postslist.html";
}

function showCreatePost() {
    var createPostModal = document.getElementById("createpost-pop-up-modal");
    createPostModal.style.display = "flex";
}

function hideCreatePost() {
    var createPostModal = document.getElementById("createpost-pop-up-modal");
    document.getElementById("createpost-form").reset();
    createPostModal.style.display = "none";
}