// Opening and Closing Slider Functions____________

let opens = false;

const Open = () => {
  if (opens === false) {
    let container = document.querySelector(".right_slider");
    container.style.display = "block";

    let left = document.querySelector(".left_slider");
    left.style.transform = "translateX(0)";
    left.style.transition = "0.3s";

    left.parentElement.parentElement.parentElement.style = `overflow:hidden`;
  } else {
    let container = document.querySelector(".right_slider");
    container.style.display = "none";

    let left = document.querySelector(".left_slider");
    left.style = `transform:translateX(-700px); transition: 0.5s`;

    opens = false;

    left.parentElement.parentElement.style = `overflow:auto`;
  }
};

const Close = () => {
  let container = document.querySelector(".right_slider");
  container.style.display = "none";

  let left = document.querySelector(".left_slider");
  left.style = `transform:translateX(-700px); transition: 0.5s`;

  opens = false;
  left.parentElement.parentElement.parentElement.style = `overflow:auto`;
};

let opens2 = false;

const Open2 = () => {
  if (opens2 === false) {
    let container = document.querySelector(".container_log");
    container.style.display = "block";

    let container2 = document.querySelector(".Login");
    container2.style.transform = "translateY(0)";

    container.parentElement.parentElement.parentElement.style = `overflow:hidden`;
  } else {
    let container = document.querySelector(".container_log");
    container.style.display = "none";

    let container2 = document.querySelectorAll(".Login");
    container2.forEach((cont) => {
      cont.style = `transform:translateY(-900px); transition: 0.5s`;
    });

    opens2 = false;

    container.parentElement.parentElement.parentElement.style = `overflow:auto`;
  }
};

const Close2 = () => {
  let container = document.querySelector(".container_log");
  container.style.display = "none";

  let container2 = document.querySelectorAll(".Login");
  container2.forEach((cont) => {
    cont.style = `transform:translateY(-900px); transition: 0.5s`;
  });

  opens2 = false;

  container.parentElement.parentElement.parentElement.style = `overflow:auto`;
};

let registerBtn = document.querySelector("#register");

registerBtn.addEventListener("click", () => {
  let register = document.querySelector(".login-2");
  let login = document.querySelector(".login-1");
  register.style.transform = "translateY(0)";
  console.log(register);
  login.style.transform = "translateY(-900px)";
});

let loginBtn = document.querySelector("#login_btn");

loginBtn.addEventListener("click", () => {
  let register = document.querySelector(".login-2");
  let login = document.querySelector(".login-1");
  register.style.transform = "translateY(-900px)";
  login.style.transform = "translateY(0)";
});

const input1 = document.querySelector("#input");
const input2 = document.querySelector("#input2");
const Name = document.querySelector(".user_name");
const logIn = document.querySelector("#login");
let signOut = document.querySelector("#sign_out");

console.log(input1);
console.log(input2);

const signIn = () => {
  if (input1.value === "" || input2.value === "") {
    alert("Fill the input");
  } else {
    let _at = input1.value;
    _at = _at.split("");
    _at = !_at.includes("@");

    if (_at) {
      alert(
        `${input1.value} is missing an '@'.Please include an '@' in the email address and write your full email address`
      );
      location.replace.preventDefault;
    } else {
      localStorage.setItem("Name", input1.value);
      localStorage.setItem("Password:", input2.value);

      location.replace("./home.html");
    }
  }
};

if (localStorage.getItem("Name")) {
  logIn.style.display = "none";
  signOut.style.display = "block";
  Name.style.display = "flex";
}

let gmail = localStorage.getItem("Name");
gmail = gmail.substring(0, gmail.indexOf("@"));
Name.innerHTML = gmail;

signOut.addEventListener("click", () => {
  localStorage.removeItem("Name");
  localStorage.removeItem("Password");
  location.replace("./home.html");
});
