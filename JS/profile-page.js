displayInformation();
generatePopUpEmail();
generatePopUpPassword();
listenEditEmail();
ListenCloseEmail();
listenEditPassword();
listenClosePassword();
listenSubmitEmail();
listenSubmitPassword();
ListenEditMembership();

function generatePopUpEmail() {
  let divContainer = document.getElementById("pop-up-email");
  divContainer.innerHTML = `
                            <p class = "profile-close-btn" id="email-close-btn" >X</p>
                            <div class="text">
                                Change Email Form
                            </div>
                            <form action="">
                                <div class="login-data">
                                <label>Email</label>
                                <input type="email" id="input-profile-change-email" required>
                                </div>
                                <div class="login-btn">
                                <div class="inner"></div>
                                <button type="button" id="btn-profile-change-email">Change Email</button>
                                </div>
                            </form> `;
}

function generatePopUpPassword() {
  let divContainer = document.getElementById("pop-up-password");
  divContainer.innerHTML = `
                            <p class = "profile-close-btn" id="password-close-btn" >X</p>
                            <div class="text">
                                Change Email Form
                            </div>
                            <form action="">
                                <div class="login-data">
                                <label>Old Password</label>
                                <input type="password" id="input-profile-change-password" required>
                                </div>
                                <div class="login-data">
                                <label>New Password</label>
                                <input type="password" id="input-profile-change-password-new1" required>
                                </div>
                                <div class="login-data">
                                <label>Confirm New Password</label>
                                <input type="password" id="input-profile-change-password-new2" required>
                                </div>
                                <div class="login-btn">
                                <div class="inner"></div>
                                <button type="button" id="btn-profile-change-password">Change Password</button>
                                </div>
                            </form> `;
}

function listenEditEmail() {
  clearAllInputField();
  let editEmail = document.getElementById("btn-profile-email");
  if (editEmail) {
    editEmail.addEventListener("click", function () {
      elem = document.getElementById("glass-login-register");
      if (!elem.classList.contains("display-glass-container")) {
        elem.classList.add("display-glass-container");
      }
      let divContainer = document.getElementById("pop-up-email");
      divContainer.classList.add("display-login-container");
    });
  }
}
function listenEditPassword() {
  clearAllInputField();
  let editPassword = document.getElementById("btn-profile-password");
  if (editPassword) {
    editPassword.addEventListener("click", function () {
      elem = document.getElementById("glass-login-register");
      if (!elem.classList.contains("display-glass-container")) {
        elem.classList.add("display-glass-container");
      }
      let divContainer = document.getElementById("pop-up-password");
      divContainer.classList.add("display-login-container");
    });
  }
}

function listenSubmitEmail() {
  let btnSubmit = document.getElementById("btn-profile-change-email");
  btnSubmit.addEventListener("click", function () {
    let inputEmail = document.getElementById(
      "input-profile-change-email"
    ).value;
    if (inputEmail.length < 1) {
      alert("Please fill new email field");
      return;
    }
    let currentUser = localStorage.getItem("currentUser");
    let oldInputEmail = JSON.parse(localStorage.getItem("email"));
    let idxMatch = 0;
    for (let i = 0; i < oldInputEmail.length; i++) {
      let dbEmail = oldInputEmail[i];
      if (dbEmail === currentUser) {
        idxMatch = i;
        break;
      }
    }

    // set localstorage currentUser and email di id match
    oldInputEmail[idxMatch] = inputEmail;
    let newEmail = JSON.stringify(oldInputEmail);
    localStorage.setItem("email", newEmail);
    localStorage.setItem("currentUser", inputEmail);
    // update display
    displayInformation();
    let divGlass = document.getElementById("glass-login-register");
    divGlass.classList.remove("display-glass-container");

    let divContainer = document.getElementById("pop-up-email");
    divContainer.classList.remove("display-login-container");
    alert("Email successfully changed");
  });
}

function listenSubmitPassword() {
  let btnSubmit = document.getElementById("btn-profile-change-password");
  btnSubmit.addEventListener("click", function () {
    let inputOldPassword = document.getElementById(
      "input-profile-change-password"
    ).value;
    let inputPasswordNew1 = document.getElementById(
      "input-profile-change-password-new1"
    ).value;
    let inputPasswordNew2 = document.getElementById(
      "input-profile-change-password-new2"
    ).value;
    // check semua keisi
    if (
      inputOldPassword.length < 1 ||
      inputPasswordNew1.length < 1 ||
      inputPasswordNew2.length < 1
    ) {
      alert("Please fill all field");
      return;
    }
    // check old password sama atau gk
    let currentUser = localStorage.getItem("currentUser");
    let oldInputEmail = JSON.parse(localStorage.getItem("email"));
    let oldInputPassword = JSON.parse(localStorage.getItem("password"));
    let idxMatch = 0;
    for (let i = 0; i < oldInputEmail.length; i++) {
      let dbEmail = oldInputEmail[i];
      if (dbEmail === currentUser) {
        idxMatch = i;
        break;
      }
    }
    if (oldInputPassword[idxMatch] !== inputOldPassword) {
      alert("Wrong password!");
      return;
    }
    // check new1 === new 2
    if (inputPasswordNew1 !== inputPasswordNew2) {
      alert("New password not match with confirmation new password");
      return;
    }
    oldInputPassword[idxMatch] = inputPasswordNew1;
    let newPassword = JSON.stringify(oldInputPassword);
    localStorage.setItem("password", newPassword);
    alert("Password successfully changed");
  });
}

function ListenCloseEmail() {
  let pCloseEmail = document.getElementById("email-close-btn");
  if (pCloseEmail) {
    pCloseEmail.addEventListener("click", function () {
      let divGlass = document.getElementById("glass-login-register");
      divGlass.classList.remove("display-glass-container");

      let divContainer = document.getElementById("pop-up-email");
      divContainer.classList.remove("display-login-container");
    });
  }
}

function listenClosePassword() {
  let pClosePassword = document.getElementById("password-close-btn");
  if (pClosePassword) {
    pClosePassword.addEventListener("click", function () {
      let divGlass = document.getElementById("glass-login-register");
      divGlass.classList.remove("display-glass-container");

      let divContainer = document.getElementById("pop-up-password");
      divContainer.classList.remove("display-login-container");
    });
  }
}

function ListenEditMembership() {
  let editMembership = document.getElementById("btn-profile-membership");
  if (editMembership) {
    editMembership.addEventListener("click", function () {
      window.location.href = "membership-wisnu.html";
    });
  }
}

function displayInformation() {
  [currentMembership, currentPassword] = getCurrentInformation();
  let currentUser = localStorage.getItem("currentUser");
  let displayEmail = document.getElementById("display-profile-email");
  displayEmail.innerText = currentUser;
  let displayMembership = document.getElementById("display-profile-membership");
  displayMembership.innerText = currentMembership;
}

function getCurrentInformation() {
  let currentMembership = "Not a Member";
  let currentPassword;
  let currentUser = localStorage.getItem("currentUser");
  let oldInputEmail = JSON.parse(localStorage.getItem("email"));
  let oldInputMembership = JSON.parse(localStorage.getItem("membership"));
  let oldInputPassword = JSON.parse(localStorage.getItem("password"));

  for (let i = 0; i < oldInputEmail.length; i++) {
    let dbEmail = oldInputEmail[i];
    if (dbEmail === currentUser) {
      currentMembership = oldInputMembership[i];
      currentPassword = oldInputPassword[i];
      break;
    }
  }
  return [currentMembership, currentPassword];
}

function clearAllInputField() {
  document.getElementById("input-profile-change-email").value = "";
  document.getElementById("input-profile-change-password").value = "";
  document.getElementById("input-profile-change-password-new1").value = "";
  document.getElementById("input-profile-change-password-new2").value = "";
}
