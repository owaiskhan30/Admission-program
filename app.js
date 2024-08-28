function admission(name, age) {
  if (age >= 18) {
    console.log("Welcome to the Gym" + " " + name);
  } else if (age >= 15) {
    console.log(
      name +
        " " +
        "ap ka admission ho jaye ga magar ap ko extra pay krna ho ga....."
    );
  } else {
    console.log(name + " " + "Ap ki Age kam hai...");
  }
}

var user_name = prompt("Enter Your Name:");
var user_age = prompt("Enter Your Age:");

admission(user_name, user_age);
