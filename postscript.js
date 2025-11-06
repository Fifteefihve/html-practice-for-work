const charCountElement = document.getElementById("charcount");
const textareaElement = document.getElementById("textarea");
const usernameInputElement = document.getElementById("username");
const sendButtonElement = document.getElementById("sendButton");

const MAX_CHAR_COUNT = 500;
const MAX_POST_COUNT = 10;

textareaElement.addEventListener("input", (ev) => {
  console.log(ev.target.value);
  charCountElement.innerText = `${ev.target.value.length}/${MAX_CHAR_COUNT}`;

  if (ev.target.value.length > MAX_CHAR_COUNT) {
    charCountElement.classList.add("redText");
  } else {
    charCountElement.classList.remove("redText");
  }
});

function pushPostToLocalstorage(post) {
  let posts = JSON.parse(localStorage.getItem("posts") || "[]");

  posts.unshift(post);
  if (posts.length > MAX_POST_COUNT) posts.pop()

  localStorage.setItem("posts", JSON.stringify(posts));
}

function handleButtonClick(ev) {
  const username = usernameInputElement.value;
  const message = textareaElement.value;

  if (!username || !message) return;

  const postData = {
    username: username,
    message: message,
    createdAt: Date.now(),
  };

  pushPostToLocalstorage(postData);

  usernameInputElement.value = "";
  textareaElement.value = "";

  window.location.href = "http://127.0.0.1:5500/mainpage.html";
}

sendButtonElement.addEventListener("click", handleButtonClick);