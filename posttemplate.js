customElements.define(
    "user-post",
    class extends HTMLElement {
        constructor() {
            super();

            let template = document.getElementById("post-template");
            let templateContent = template.content;

            const shadowRoot = this.attachShadow({ mode: "open" });
            shadowRoot.appendChild(templateContent.cloneNode(true));
        }
    }
)