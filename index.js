

// Question 3: Username Gatekeeper
function validateUsername(username) {
    if (username.length < 4) {
        return "Too Short";
    }

    if (username.includes(" ")) {
        return "No Space Allowed";
    }

    if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }

    return "Available";
}







// // Question 2: Bangladesh Weekend Machine
// function getDayType(day) {
//     switch (day.toLowerCase()) {
//         case "friday":
//         case "saturday":
//             return "Weekend";

//         case "sunday":
//         case "monday":
//         case "tuesday":
//         case "wednesday":
//         case "thursday":
//             return "Working Day";

//         default:
//             return "Invalid Day";
//     }
// }





// // Question 1: 
// function describeValue(value) {
//     const type = typeof value;
//     const truthiness = value ? "truthy" : "falsy";

//     return `${type} | ${truthiness}`;
// }

