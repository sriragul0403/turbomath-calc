// let feedbackel = document.forms.feedback;

// let button = document.querySelector("#button");

// let button2 = document.querySelector("#button2");

// button.addEventListener("click", (e) => {
//   let datas = JSON.parse(JSON.stringify([...new FormData(feedbackel)]));

//   localStorage.setItem(
//     "details",
//     JSON.stringify([
//       ...JSON.parse(localStorage.getItem("details") || "[]"),
//       { details: datas },
//     ])
//   );
// });

// button2.addEventListener("click", (e) => {
//   let gettingEl = [...JSON.parse(localStorage.getItem("details"))];

//   gettingEl.map((i) => {
//     console.log("student number one\n");

//     for (let j = 0; j < i.details.length; j++) {
//       console.log(`${i.details[j][0]}:${i.details[j][1]}`);
//     }
//     console.log(`\n`);

//     // console.log()
//   });
//   // for(let i=0;i<=gettingEl.length;i++){
//   //   console.log(gettingEl[i]);

//   // }

//   // console.log(gettingEl);
// });


function differentiate(func) {
  const terms = func.split('+');
  const derivative = [];

  terms.forEach(term => {
      term1 = term.trim().split("");
      const [coeff, varPart] = term.trim().split('x');
      const coeffNum = coeff ? parseFloat(coeff) : 1;
      const exp = varPart ? parseInt(varPart.replace('^', '')) : 1;

      if (exp > 1) {
          derivative.push(`${coeffNum * exp}x ^ ${exp - 1}`);
      }
      else if (term1.includes("x") === false) {
          derivative.push("0")
      }

      else if (exp === 1) {
          derivative.push(coeffNum);
      }
  });
  return derivative.join(" + ")
}
const func = "3x^2+3x+3";
console.log("Derivative of the function: ", differentiate(func))
// console.log("enter");
