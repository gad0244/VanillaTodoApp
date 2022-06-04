import "./styles.css";

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "incomplete-list-row";
  const p = document.createElement("p");
  p.innerText = text;
  div.appendChild(p);
  const li = document.createElement("li");
  li.appendChild(div);
  document.getElementById("incomplete-list").appendChild(li);
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(div.parentNode);

    const addTarget = div.parentNode;
    const text = div.firstElementChild.innerText;

    addTarget.textContent = null;

    const completeDiv = document.createElement("div");
    completeDiv.className = "complete-list-row";
    const completePtag = document.createElement("p");
    completePtag.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    backButton.addEventListener("click", () => {
      const deleteTarget = completeDiv.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = completeDiv.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(completeDiv);
    completeDiv.appendChild(completePtag);
    completeDiv.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(div.parentNode);
  });

  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};
