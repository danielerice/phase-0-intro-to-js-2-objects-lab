const employee = {
    name:`Sam`,
    streetAddress:`12 Broadway`
}
function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
        ...obj,
        [key]:value
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;

    return employee;
}
function deleteFromEmployeeByKey(employee, key){
   const  newEmployee={...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}