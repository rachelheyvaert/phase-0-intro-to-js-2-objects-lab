// Write your solution in this file!
//1
const employee = {
    name: "Rachel",
    streetAddress: "835 Nettlebrook lane",
};

employee;
//2
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = {...obj};
    newEmployee[key] = value;
    return newEmployee;
};
const newEmployee = updateEmployeeWithKeyAndValue(
    ...employee,
    "Benjamin",
    "9 Old Windsor Way",
);
//3
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}
const updateEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "Thomas", "100 Bluebonnet");
updateEmployee;

//4 
function deleteFromEmployeeByKey(obj, key) {
    const employee2 = {...obj}
    delete employee2[key]
    return employee2
};
//5
function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
  obj[key] = value;
  delete obj.key
  return obj;
}
const modEmployee = destructivelyDeleteFromEmployeeByKey(obj);
modEmployee;

