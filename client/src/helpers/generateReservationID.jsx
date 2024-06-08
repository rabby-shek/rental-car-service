
export const generateReservationID = ({
    customerFirstName,
    customerLastName,
  }) => {
    // Get the first letter of the first name and last name
    const firstInitial = customerFirstName.charAt(0);
    const lastInitial = customerLastName.charAt(0);
  
    // Get the current date
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // January is 0, so we add 1
    const year = currentDate.getFullYear() % 100; // Get last two digits of the year
  
    // Format day and month to have leading zeros if needed
    const formattedDay = String(day).padStart(2, "0");
    const formattedMonth = String(month).padStart(2, "0");
  
    // Generate a random number between 1000 and 9999
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
  
    // Combine the initials, date, and random number to create the reservation ID
    const reservationID = `#${firstInitial}${lastInitial}${formattedDay}${formattedMonth}${year}${randomNumber}`;
  
    return reservationID;
  };