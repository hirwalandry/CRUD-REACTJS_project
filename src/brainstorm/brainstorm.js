const array = [
  {
    id: 1,
    name: "nshuti",
    age: 22,
    status: "single",
    address: "gisozi",
  },
  {
    id: 2,
    name: "shyaka",
    age: 33,
    status: "single",
    address: "gisozi",
  },
  {
    id: 3,
    name: "lionel",
    age: 20,
    status: "single",
    address: "gisozi",
  },
  {
    id: 4,
    name: "jules",
    age: 23,
    status: "single",
    address: "remera",
  },
  {
    id: 5,
    name: "homere",
    age: 21,
    status: "single",
    address: "nyamasaka",
  },
];

 let result;
// count
result = array.reduce((acum, curPerson) => {
  return acum + 1;
}, 0);
//sum ages
result = array.reduce((acum, curPerson) => {
  const { age } = curPerson;
  return acum + age;
}, 0);
//array of names (map)
result = array.reduce((acum, curPerson) => {
  const { name } = curPerson;
  return [...acum, name];
}, []);

//convert to id => person lookup (dict)
result = array.reduce((acum, curPerson) => {
  const { id } = curPerson;

  return { ...acum, [id]: curPerson };
}, {});

//group by age
result = array.reduce((acum, curPerson) => {
  const { age } = curPerson;
  acum[age] = acum[age] || [];

  acum[age].push(curPerson);

  return acum;
}, {});
//max age
result = array.reduce((acum, curPerson) => {
  const { age } = curPerson;

  if (acum === null || age > acum) {
    return age;
  }
  return acum;
}, null);
//find by name
result = array.reduce((acum, curPerson) => {
  const { name } = curPerson;

  if (name === "nshuti") {
    return curPerson;
  }
  return acum;
}, {});
//all over 18
result = array.reduce((acum, curPerson) => {
  const { age } = curPerson;

  if (!acum) return false;
  return age > 18;
}, true);
//any over 18
result = array.reduce((acum, curPerson) => {
  const { age } = curPerson;

  if (acum) return true;
  return age > 23;
}, false);
//Promise chainng
let functions = [
  async function () {
    return 1;
  },
  async function () {
    return 2;
  },
  async function () {
    return 3;
  },
];
result = functions.reduce((promise, fn) => promise.then(fn), Promise.resolve());

// removing duplicates in an array
let dupes = [1, 2, 3, "a", "a", "f", 3, 4, 2, "d", "d"];
result = dupes.reduce((noDupes, curVal) => {
  if (noDupes.indexOf(curVal) === -1) {
    noDupes.push(curVal);
  }
  return noDupes;
}, []);
//Validating parenthesis
result = [..."(())()(()())"].reduce((a, i) => (i === "(" ? a + 1 : a - 1), 0);
//filtering and counting
let data = [1, 2, "a", "b", 3, "c", 4, "d"];
result = data.reduce((accum, curr) => {
  if (typeof curr === "number") accum.push(curr);
  return accum;
}, []);
//flattening a Nested Array
let datas = [
  [1, 2],
  [3, 4],
  [5, 6],
];
result = datas.reduce((accum, curr) => accum.concat(curr), []);
//counting occurrences of elements
let datass = [
  { status: "pending" },
  { status: "pending" },
  { status: "skiped" },
  { status: "canceled" },
  { status: "canceled" },
  { status: "canceled" },
];
result = datass.reduce((accum, curr) => {
  const { status } = curr;
  if (!accum[status]) {
    accum[status] = 0;
  }
  accum[status] = accum[status] + 1;

  return accum;
}, {});
//reverse a string
result = (str) => [...str].reduce((a, v) => v + a);
//binary to decimal
result = (str) => {
  return [...String(str)].reduce((accum, curr) => {
    return +curr + accum * 2;
  }, 0);
};

console.log(result(10111));
