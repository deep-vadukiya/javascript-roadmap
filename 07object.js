//

// Hii, before you start practicing. Please go threw the given "mohoBranding" example. it will helps you get a much more idea about how Objects are really usefull and where we will use them with realtime application ...
// Predict the output of log messages and then check the output by uncommenting them ...
// It will helps you a lot ...

const mohoBranding = {
  // properties ...
  name: `The Grand Montano`,
  location: `Mohave`,
  categories: [
    `Sand Papers`,
    `Corale Paper`,
    `Business Card`,
    `Press Printing`,
  ],
  clients: [
    `David jackson`,
    `Michael Guetta`,
    `Dongo Bruce`,
    `Griffin Larson`,
    `Ellie Goulding`,
  ],

  // methods ...
  // Function to return two values, from the different objects of the array ...
  open: function (catIndex, cliIndex) {
    return [this.categories[catIndex], this.clients[cliIndex]];
  },
};

// console.log(mohoBranding.categories[2]);
const moho = mohoBranding;
// console.log(moho.categories);

// console.log(mohoBranding.categories[2]);
// console.log(mohoBranding.ret(2, 2));
const newArray = mohoBranding;
// console.log(newArray.categories[4]);
// console.log(newArray);

// console.log(mohoBranding.open(2, 3));

// const [cat, cli] = mohoBranding.open(3, 2);
// console.log(cat, ` - `, cli);

//
//
// You can start practicing now ✈️ ...
// ============================
//// 01...
// statement: use the below object for Bob01 and print the expected output as mentioned using template literal.
// test case 01:
let Bob01 = {
  name: "Bob Miller",
  age: 23,
  role: "React Developer",
  project: [
    { name: "Test Project - India", project_experience: 3 },
    { name: "Test Project - Japan", project_experience: 2 },
  ],
};
// Expected output: Hello, My name is Bob Miller. I'm a 23 old React Developer. i've worked on Test Project - India for 3 years and on Test Project - Japan for 2 yesrs.

// write your code here ...
// []

// test case 02:
let Frode02 = {
  name: "Frode Larson",
  role: "Front-End Web Developer",
  experience: 2,
  graduation: "Computer Science",
  skills: ["HTML5", "CSS3", "Bootstrap", "Javascript", "jquery", "React JS"],
};

// Expected output: Hi There, I’m Frode Larson and i am Front-End Web Developer. It's been 2 years, I’m working as web developer. I have done my graduation in Computer Science. My skills are HTML5, CSS3, Bootstrap, Javascript, jquery and React JS.

// write your code here ...
// []

//
// ============================
//// 02...
// statement: use the below object for Bob02 and add the new property location: "Califormia".
// test case 01:
let Bob02 = {
  name: "Bob Miller",
  age: 23,
  role: "React Developer",
  project: [
    { name: "Test Project - India", project_experience: 3 },
    { name: "Test Project - Japan", project_experience: 2 },
  ],
};

// write your code here ...
// []

//
// ============================
//// 03...
// statement: use the below object for Bob03 and remove the role property from it and add designation: "Web Developer" into it.
// test case 01:
let Bob03 = {
  name: "Bob Miller",
  age: 23,
  role: "React Developer",
  project: [
    { name: "Test Project - India", project_experience: 3 },
    { name: "Test Project - Japan", project_experience: 2 },
  ],
};

// write your code here ...
// []

//
// ============================
//// 04...
// statement: use the below object for Bob04 and edit the property role to role: "Web Designer" adn print.
// test case 01:
let Bob04 = {
  name: "Bob Miller",
  age: 23,
  role: "React Developer",
  project: [
    { name: "Test Project - India", project_experience: 3 },
    { name: "Test Project - Japan", project_experience: 2 },
  ],
};

// write your code here ...
// []

//
// ============================
//// 05...
// statement: use the below object for codes05 and run for in loop in it, and print the string mentioned below.
// test case 01:
let codes05 = {
  "+1": "USA",
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  "+91": "India",
};
// Expected output:
// USA has +1 phone code ...
// Germany has +49 phone code ...
// India has +91 phone code ...

// write your code here ...
// []

//
// ============================
//// 06...
// statement: write a Javascript program to concat the given objects in new object variable, and print the value of new object ...
// test case 01:
let obj061 = {
  firstName: "SOFTICES",
  lastName: "ACADEMY",
  currentYear: 2022,
};
let obj062 = {
  location: "SURAT",
  technology: "JAVASCRIPT",
};

// write your code here ...
// []

// test case 02:
let obj0612 = {
  firstName: "SOFTICES",
  lastName: "ACADEMY",
  currentYear: 2022,
};
let obj0622 = {
  firstName: "Softices",
  lastName: "Academy",
  location: "Surat",
  tech: "JavaScript",
};
