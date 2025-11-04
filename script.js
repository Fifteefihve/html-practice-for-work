function showPosts() {
    const postListElement = document.getElementById("postList");
    const posts = JSON.parse(localStorage.getItem("posts") || "[]");

    if (posts.length === 0) return;

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        const postElement = document.createElement("user-post");

        const usernameNode = document.createElement("span");
        usernameNode.slot = "username";
        usernameNode.textContent = post.username;

        const messageNode = document.createElement("span");
        messageNode.slot = "message";
        messageNode.textContent = post.message;

        const dateNode = document.createElement("span");
        dateNode.slot = "date";
        dateNode.textContent = new Date(post.createdAt).toLocaleString();

        postElement.append(usernameNode, messageNode, dateNode);

        postListElement.appendChild(postElement);
    }
}

showPosts();