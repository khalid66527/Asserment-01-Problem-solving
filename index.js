function getDayType(day) {
    switch (day.toLowerCase()) {
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}





// // Question 1: 
// function describeValue(value) {
//     const type = typeof value;
//     const truthiness = value ? "truthy" : "falsy";

//     return `${type} | ${truthiness}`;
// }

