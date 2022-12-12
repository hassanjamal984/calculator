let my_numbers = document.querySelectorAll("#item");
let item_equal = document.querySelectorAll("#item_equal");
let btn_id_result = document.querySelector("#btn_id_result");
let reset = document.querySelector("#reset");
let opposite_no = document.querySelector("#opposite_num");
let sum_id = document.querySelector("#sum_id");
let error_message = document.querySelector("#test");
let i;
// operator_items
let item_sum = document.querySelector("#item_sum");
let item_subtract = document.querySelector("#item_subtract");
let item_multible = document.querySelector("#item_multible");
let item_divide = document.querySelector("#item_divide");
// currencies
let sh_to_dollar = document.querySelector("#sh_to_dollar");
let dollar_to_sh = document.querySelector("#dollar_to_sh");
let sh_to_eur = document.querySelector("#sh_to_eur");
let eur_to_sh = document.querySelector("#eur_to_sh");
// bmi
let weight = document.querySelector("#weight");
let height = document.querySelector("#height");
let bmi_result = document.querySelector("#bmi_result");
let form = document.querySelector("#form");
// stop watch
let tens_id = document.querySelector("#tens");
let seconds_id = document.querySelector("#seconds");
let start_btn = document.querySelector("#start_btn");
let pause_btn = document.querySelector("#pause_btn");
let clear_btn = document.querySelector("#clear_btn");

// calculator
let operator_item = "";
let values = { before: null, after: null };
const function_get = (num) => {
  btn_id_result.value = num;
  // اذا البيفور كانت نلل
  if (values.before) {
    values.after = num;
  } else {
    values.before = num;
  }

  console.log(values);
};

const function_operator = (operator) => {
  operator_item = operator;
};

const calculate = () => {
  if (values.after && values.before && operator_item) {
    if (operator_item === "+") {
      let updateValue = values.before + values.after;
      btn_id_result.value = updateValue;
      values.before = updateValue;
    }
    if (operator_item === "-") {
      let updateValue = values.before - values.after;
      btn_id_result.value = updateValue;
      values.before = updateValue;
    }
    if (operator_item === "*") {
      let updateValue = values.before * values.after;
      btn_id_result.value = updateValue;
      values.before = updateValue;
    }
    if (operator_item === "/") {
      let updateValue = values.before / values.after;
      btn_id_result.value = updateValue;
      values.before = updateValue;
    }
  }
  // divied on zero
  if (values.after === 0 && operator_item === "/") {
    btn_id_result.value = "Error";
  }
  let k = btn_id_result.value.length;
  console.log(k);
};

// function_reset
let x = 0;
const reset_fn = () => {
  btn_id_result.value = x;
  updateValue = 0;
  values.before = 0;
  values.after = 0;
};

// currencies_function
let sh_to_dollar_value = 0.29;
const sh_to_dollar_fn = () => {
  btn_id_result.value = btn_id_result.value * sh_to_dollar_value;
};

let doller_to_sh_value = 3.43;
const dollar_to_sh_fn = () => {
  btn_id_result.value = btn_id_result.value * doller_to_sh_value;
};

let sh_to_eur_value = 0.28;
const sh_to_eur_fn = () => {
  btn_id_result.value = btn_id_result.value * sh_to_eur_value;
};

let eur_to_sh_value = 3.62;
const eur_to_sh_fn = () => {
  btn_id_result.value = btn_id_result.value * eur_to_sh_value;
};

// bmi_function
const bmi_fn = () => {
  let cm = 0.01;
  let w_value = weight.value;
  let h_value = height.value * cm;
  let calculate_bmi = w_value / Math.pow(h_value, 2);

  let create_element = document.createElement("p");
  form.appendChild(create_element);
  create_element.setAttribute("class", "result-bmi");

  if (calculate_bmi <= 18.5) {
    create_element.innerHTML = calculate_bmi + " is Underweight";
  } else if (calculate_bmi <= 25.0) {
    create_element.innerHTML = calculate_bmi + " is Normal";
  } else if (calculate_bmi <= 30.0) {
    create_element.innerHTML = calculate_bmi + " is Overweight";
  } else if (calculate_bmi >= 31.0) {
    create_element.innerHTML = calculate_bmi + " is Obese";
  } else {
    create_element.innerHTML = "Please Enter values";
  }
};
// stop watch
let tens = 00;
let seconds = 00;
let interval;

const start_watch = () => {
  tens++;

  if (tens <= 9) {
    tens_id.innerHTML = "0" + tens;
  }
  if (tens >= 9) {
    tens_id.innerHTML = tens;
  }
  if (tens >= 99) {
    seconds++;
    seconds_id.innerHTML = "0" + seconds;
    tens = 0;
    tens_id.innerHTML = "0" + 0;
  }
  if (seconds >= 9) {
    seconds_id.innerHTML = seconds;
  }
};

const start_function = () => {
  interval = setInterval(start_watch);
};

const stop_function = () => {
  clearInterval(interval);
};

const clear_function = () => {
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  tens_id.innerHTML = tens;
  seconds_id.innerHTML = seconds;
};

// extra-code-js-comment
// let p = values.after = 0;
// console.log(p);

// for (i = 0; i < my_numbers.length; i++) {
//   my_numbers[i].onclick = function () {
//     btn_id_result.value += this.value;
//   };
// }

// console.log(document.getElementById("item").value);

// const sumation = () => {
//   const number1 = my_numbers.value;
//   const number2 = my_numbers.value;
//   const result = number1 + number2;
//   document.getElementById("test").innerHTML = result;
// };

// const operator_fn = () => {
//   v();
// };

// const operator_fn = (h) => {
//   for (i = 0; i < my_numbers.length; i++) {
//     switch (h) {
//       case "+":
//         result = my_numbers[i] + my_numbers[i];
//         console.log("Result is :" + result);
//         break;

//       case "-":
//         result = my_numbers[i] - my_numbers[i];
//         console.log("Result is :" + result);
//         break;

//       case "*":
//         result = my_numbers[i] * my_numbers[i];
//         console.log("Result is :" + result);
//         break;

//       case "/":
//         result = my_numbers[i] / my_numbers[i];
//         console.log("Result is :" + result);
//         break;
//     }
//   }
// };

// .onclick = function ()
// btn_id_result.value = this.value;

// function_zero
// const funNum0 = () => {
//   btn_id_result.innerHTML = zero_id.innerHTML;
// };
// // function_one
// const funNum1 = () => {
//   btn_id_result.innerHTML = one_id.innerHTML;
// };
// // function_two
// const funNum2 = () => {
//   btn_id_result.innerHTML = two_id.innerHTML;
// };
// // function_three
// const funNum3 = () => {
//   btn_id_result.innerHTML = three_id.innerHTML;
// };
// // function_four
// const funNum4 = () => {
//   btn_id_result.innerHTML = four_id.innerHTML;
// };
// // function_five
// const funNum5 = () => {
//   btn_id_result.innerHTML = five_id.innerHTML;
// };
// // function_six
// const funNum6 = () => {
//   btn_id_result.innerHTML = six_id.innerHTML;
// };
// // function_seven
// const funNum7 = () => {
//   btn_id_result.innerHTML = seven_id.innerHTML;
// };
// // function_eight
// const funNum8 = () => {
//   btn_id_result.innerHTML = eight_id.innerHTML;
// };
// // function_nine
// const funNum9 = () => {
//   btn_id_result.innerHTML = nine_id.innerHTML;
// };

// function_operations

// const results = function (h, x, y, c) {
//   switch (h) {
//     case "+":
//       result = x + y;
//       console.log("Result is :" + result);
//       break;

//     case "-":
//       result = x - y;
//       console.log("Result is :" + result);
//       break;

//     case "*":
//       result = x * y;
//       console.log("Result is :" + result);
//       break;

//     case "/":
//       result = x / y;
//       console.log("Result is :" + result);
//       break;

//     default:
//       console.log("Invalid Choice:" + h);
//   }
// };

// console.log(results("*", x, y, c));

// // // // // function_opposite_num
// let y = -1;
// const opposite_num = () => {
//   opposite_num0();
//   opposite_num1();
//   opposite_num2();
//   opposite_num3();
//   opposite_num4();
//   opposite_num5();
//   opposite_num6();
//   opposite_num7();
//   opposite_num8();
//   opposite_num9();
// };

// const opposite_num0 = () => {
//   btn_id_result.innerHTML = zero_id.innerHTML * y;
// };
// const opposite_num1 = () => {
//   btn_id_result.innerHTML = one_id.innerHTML * y;
// };
// const opposite_num2 = () => {
//   btn_id_result.innerHTML = two_id.innerHTML * y;
// };
// const opposite_num3 = () => {
//   btn_id_result.innerHTML = three_id.innerHTML * y;
// };
// const opposite_num4 = () => {
//   btn_id_result.innerHTML = four_id.innerHTML * y;
// };
// const opposite_num5 = () => {
//   btn_id_result.innerHTML = five_id.innerHTML * y;
// };
// const opposite_num6 = () => {
//   btn_id_result.innerHTML = six_id.innerHTML * y;
// };
// const opposite_num7 = () => {
//   btn_id_result.innerHTML = seven_id.innerHTML * y;
// };
// const opposite_num8 = () => {
//   btn_id_result.innerHTML = eight_id.innerHTML * y;
// };
// const opposite_num9 = () => {
//   btn_id_result.innerHTML = nine_id.innerHTML * y;
// };
