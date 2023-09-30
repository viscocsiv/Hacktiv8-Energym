listenBtnSilver();
listenBtnGold();
listenBtnPlatinum();

function listenBtnSilver() {
  let btnSubmit = document.getElementById("btn-membership-silver");
  btnSubmit.addEventListener("click", function () {
    isAlreadyLogin = validateLogin();
    let membershipClick = "Silver";
    if (isAlreadyLogin) {
      let userMembership = getCurrentMembership();
      if (userMembership === membershipClick) {
        alert(`you are already ${membershipClick} member`);
      } else {
        if (
          confirm(`Are you sure, want to become ${membershipClick} member?`)
        ) {
          setCurrentMembership(membershipClick);
          window.location.reload();
        } else {
          return;
        }
      }
    }
  });
}

function listenBtnGold() {
  let btnSubmit = document.getElementById("btn-membership-gold");
  btnSubmit.addEventListener("click", function () {
    isAlreadyLogin = validateLogin();
    let membershipClick = "Gold";
    if (isAlreadyLogin) {
      let userMembership = getCurrentMembership();
      if (userMembership === membershipClick) {
        alert(`you are already ${membershipClick} member`);
      } else {
        if (
          confirm(`Are you sure, want to become ${membershipClick} member?`)
        ) {
          setCurrentMembership(membershipClick);
          window.location.reload();
        } else {
          return;
        }
      }
    }
  });
}

function listenBtnPlatinum() {
  let btnSubmit = document.getElementById("btn-membership-platinum");
  btnSubmit.addEventListener("click", function () {
    isAlreadyLogin = validateLogin();
    let membershipClick = "Platinum";
    if (isAlreadyLogin) {
      let userMembership = getCurrentMembership();
      if (userMembership === membershipClick) {
        alert(`you are already ${membershipClick} member`);
      } else {
        if (
          confirm(`Are you sure, want to become ${membershipClick} member?`)
        ) {
          setCurrentMembership(membershipClick);
          window.location.reload();
        } else {
          return;
        }
      }
    }
  });
}

function validateLogin() {
  let isAlreadyLogin = JSON.parse(localStorage.getItem("isLogin"));
  if (isAlreadyLogin === false) {
    alert("Please Login to get membership");
  }
  return isAlreadyLogin;
}

function getCurrentMembership() {
  let currentMembership = "Not a Member";
  let currentUser = localStorage.getItem("currentUser");
  let oldInputEmail = JSON.parse(localStorage.getItem("email"));
  let oldInputMembership = JSON.parse(localStorage.getItem("membership"));

  for (let i = 0; i < oldInputEmail.length; i++) {
    let dbEmail = oldInputEmail[i];
    if (dbEmail === currentUser) {
      currentMembership = oldInputMembership[i];
      break;
    }
  }
  return currentMembership;
}

function setCurrentMembership(currentMembership) {
  let currentUser = localStorage.getItem("currentUser");
  let oldInputEmail = JSON.parse(localStorage.getItem("email"));
  let oldInputMembership = JSON.parse(localStorage.getItem("membership"));
  let indexUser = 0;
  for (let i = 0; i < oldInputEmail.length; i++) {
    let dbEmail = oldInputEmail[i];
    if (dbEmail === currentUser) {
      indexUser = i;
      break;
    }
  }
  oldInputMembership[indexUser] = currentMembership;
  let newMembership = JSON.stringify(oldInputMembership);
  localStorage.setItem("membership", newMembership);
}
