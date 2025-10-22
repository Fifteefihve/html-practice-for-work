const charCountElement = document.getElementById("charcount");
    const textareaElement = document.getElementById("textarea");
    const MAX_CHAR_COUNT = 5000;

    textareaElement.addEventListener("input", (ev) => {
      console.log(ev.target.value);
      charCountElement.innerText = `${ev.target.value.length}/${MAX_CHAR_COUNT}`;

      if (ev.target.value.length > MAX_CHAR_COUNT) {
        charCountElement.classList.add("redText");
      } else {
        charCountElement.classList.remove("redText");
      }
    });