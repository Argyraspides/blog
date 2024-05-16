export const formatDate = (dateString) => {
    const date = new Date(dateString);

    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    let daySuffix;
    if (day % 10 === 1 && day !== 11) {
        daySuffix = "st";
    } else if (day % 10 === 2 && day !== 12) {
        daySuffix = "nd";
    } else if (day % 10 === 3 && day !== 13) {
        daySuffix = "rd";
    } else {
        daySuffix = "th";
    }

    const formattedDate = `${day}${daySuffix} of ${monthNames[monthIndex]}, ${year}`;

    return formattedDate;
};

