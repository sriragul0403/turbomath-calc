let table = document.querySelectorAll("table tbody tr ");

let empty;
for (let key of table) {
  key.addEventListener("click", () => {
    if (empty != undefined){
        empty.removeAttribute("style")
    } 
    empty=key;
    key.setAttribute("style", "background-color:lightblue; color:white; font-weight:bold; font-size:20px;");
  });
}

// console.log(table);

// for (let key of table) {
//   let td = document.querySelectorAll(`.${key.className} td`);

//   console.log(`
// name:${td[0].innerText}
// age:${td[1].innerText}
// place:${td[2].innerText}
// year:${td[3].innerText}

// `);

//   console.log("\t iterated finished ");
// }
