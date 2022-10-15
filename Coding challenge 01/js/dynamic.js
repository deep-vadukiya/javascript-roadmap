// ======== New Costa Bank ========

// Data ...
const account1 = {
  owner: "Deepak Patel",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2021-12-18T17:01:17.194Z",
    "2021-12-19T23:36:17.929Z",
    "2021-12-21T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

// Elements ...
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// const displayMovements = function(movements) {
//     // console.log(movements);
//     movements.forEach(function(mov, i) {
//         // console.log(i, mov);
//         const type = mov > 0 ? 'deposit' : 'withdrawal';

//         const html = `
//         <div class="movements__row">
//             <div class="movements__type movements__type--${type}">${i+3} ${type}</div>
//             <div class="movements__value">${mov}€</div>
//         </div>`;

//         containerMovements.insertAdjacentHTML('afterbegin', html);

//     });
// }

/// date formats ...
const formatDate = function (date, locale) {
  const calcDaysPassed = function (date1, date2) {
    return Math.round(Math.abs((date2 - date1) / (24 * 60 * 60 * 1000)));
  };

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

// currency formater ...
const currencyFormater = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const displayMovement = function (acc, sort = false) {
  containerMovements.innerHTML = "";
  // console.log(acc.movements);

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  // console.log(movs);

  movs.forEach(function (mov, i) {
    // console.log(mov, i);
    // containerMovements.innerHTML = '';
    const type = mov > 0 ? "deposit" : "withdrawal";

    const date = new Date(acc.movementsDates[i]);
    const newDate = formatDate(date, acc.locale);

    const formatedCurrencyMov = currencyFormater(mov, acc.locale, acc.currency);

    const html = `            
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
            <div class="movements__date">${newDate}</div>
            <div class="movements__value">${formatedCurrencyMov}</div>
        </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => {
    return acc + mov;
  }, 0);
  const formatedCurrencyMov = currencyFormater(
    acc.balance,
    acc.locale,
    acc.currency
  );
  labelBalance.textContent = `${formatedCurrencyMov}`;
};

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter((movements) => movements > 0)
    .reduce((acc, mov) => acc + mov, 0);
  // console.log(income);
  labelSumIn.textContent = currencyFormater(
    acc.balance,
    acc.locale,
    acc.currency
  );

  const outcome = acc.movements
    .filter((movements) => movements < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = currencyFormater(
    acc.balance,
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter((movements) => movements > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((deposit) => deposit >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = currencyFormater(
    acc.balance,
    acc.locale,
    acc.currency
  );
};

const createUserName = function (accs) {
  accs.forEach(function (accs) {
    accs.userName = accs.owner
      .toLowerCase()
      .split(" ")
      .map((name) => {
        return name[0];
      })
      .join("");
    // console.log(accs.userName);
  });
};

createUserName(accounts);

// update UI ...
const updateUI = function (acc) {
  // display movements ...
  displayMovement(acc);
  // display balance ...
  calcDisplayBalance(acc);
  // display summary ...
  calcDisplaySummary(acc);
  console.log("UI updated");
};

// LogOut Timer ...
const startLogOutTimer = function () {
  // 1. set the initial time to 5:00 minutes ...
  // 2. start the timer as soon as user successfully logs in ...
  // 3. iterate function each second ...
  // 4. when it completes 5:00 minutes, logs out user automatically ...
  let time = 300;

  const timer = setInterval(function () {
    const min = time / 60;
    const sec = time % 60;
    labelTimer.textContent =
      `${Math.floor(min)}`.padStart(2, 0) + `:` + `${sec}`.padStart(2, 0);
    // console.log(`hello ${time}`);

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = "Log in to get started";
      containerApp.style.opacity = 0;
    }
    time = time - 1;
  }, 1000);

  // to clear the tiimer ...
  return timer;
};

// console.log(accounts);
let currentAccount, timer;
// Login success ...
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log('login');
  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);
  console.log(accounts);
  if (currentAccount.pin === Number(inputLoginPin.value)) {
    // display UI and welcome message ...
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 1;
    // clear the input fields ...
    inputLoginPin.value = inputLoginUsername.value = "";
    inputLoginPin.blur();
    updateUI(currentAccount);

    // Create current date ...
    const now = new Date();
    const date = `${now.getDate()}`.padStart(2, 0);
    const day = now.getDay();
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    labelDate.textContent = `${date}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

    // console.log('Congratulations, You are logged in.');
  } else {
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `Log in to get started`;
  }

  // to clear the timer, if we login for new account ...
  if (timer) clearInterval(timer);
  timer = startLogOutTimer();
});

// Transfer Money ...
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const recieverAcc = accounts.find(
    (acc) => acc.userName === inputTransferTo.value
  );
  // console.log(recieverAcc);
  const amount = Number(inputTransferAmount.value);
  // console.log(amount);
  // && amount <= currentAccount.Balance && recieverAcc.userName !== currentAccount.userName
  // console.log(currentAccount);
  // console.log(currentAccount.balance);
  // console.log(recieverAcc.userName);
  // console.log(currentAccount.userName);
  // console.log(recieverAcc.userName != currentAccount.userName);

  inputTransferTo.value = inputTransferAmount.value = "";
  inputTransferTo.blur();

  if (
    amount > 0 &&
    recieverAcc.userName != currentAccount.userName &&
    currentAccount.balance >= amount
  ) {
    // console.log('Validate, You can transact.');
    // do the transaction ...
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);

    // Add date to movements dates ...
    currentAccount.movementsDates.push(new Date().toISOString());
    recieverAcc.movementsDates.push(new Date().toISOString());

    // update UI ...
    updateUI(currentAccount);
    // console.log(currentAccount);
    // console.log(recieverAcc);

    // Reset the timer ...
    clearInterval(timer); // clear ...
    timer = startLogOutTimer(); // set new timer ...
  }
});

// to take loan ...
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const enteredLoanAmount = inputLoanAmount.value;
  if (
    inputLoanAmount.value > 0 &&
    currentAccount.movements.some((mov) => mov >= enteredLoanAmount * 0.1)
  ) {
    setTimeout(function () {
      currentAccount.movements.push(Number(enteredLoanAmount));
      // console.log(currentAccount.movements);
      // add loan date ...
      currentAccount.movementsDates.push(new Date());

      updateUI(currentAccount);
    }, 3000);
  }
  inputLoanAmount.value = "";

  // Reset the timer ...
  clearInterval(timer); // clear ...
  timer = startLogOutTimer(); // set new timer ...
});

// to close the account ...
btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  // btnClose.
  if (
    currentAccount.userName === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    // console.log(currentAccount);
    // delete(currentAccount);
    const index = accounts.findIndex(
      (acc) => acc.userName === currentAccount.userName
    );
    // console.log(index);
    accounts.splice(index, 1);
    console.log(accounts);
    containerApp.style.opacity = 0;
    console.log("if executed ...");
  } else {
    console.log("bro, something is wrong ...");
  }

  inputCloseUsername.value = inputClosePin.value = "";
  inputCloseUsername.blur();
  // inputClosePin.style = 'cursor: none';
});

// to sort the movements ...
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovement(currentAccount, !sorted);
  sorted = !sorted;

  // Reset the timer ...
  clearInterval(timer); // clear ...
  timer = startLogOutTimer(); // set new timer ...
});

labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace("€", ""))
  );
  // console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll(".movements_value")];
  // console.log(movementsUI2);
});

// to zigzag line from the random method ...
labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = "#FEC303";
  });
});
