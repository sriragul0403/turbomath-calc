let text = document.getElementById("text_input");

let button = document.getElementById("button_input");

let item = document.getElementById("list");

button.addEventListener("click", () => {
  item.innerHTML += `<li class="listinner"  id="li"><div>${text.value}</div> <div onclick="removeitems(event)"><i id="remove" >remove</i></div></li>`;
  text.value = "";
});

let show = document.querySelector("#show");

let list = document.querySelector("#list");

let extra = document.querySelector(".duplicate");

let inner = document.querySelector(".listinner");

show.addEventListener("click", () => {
  extra.innerHTML = "";

  let clone = list.cloneNode(true);

  extra.append(clone);
});

let remove = document.querySelector("#remove");

function removeitems(event) {
  event.target.parentNode.parentNode.remove();
}

let clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
  let get = document.querySelector("#list");
  get.innerHTML = "";
});
