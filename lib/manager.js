const Employee = require("./Employee");
/*calling the methods out of the parent class Employee*/
class Manager extends Employee {

  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole(){
    return "Manager";
  }
}
module.exports = Manager;
