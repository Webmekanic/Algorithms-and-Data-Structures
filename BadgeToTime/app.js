const BadgeDays = [
    "Monday: 11:00AM - 7:00PM",
    "Tuesday: 11:00AM - 7:00PM",
    "Wednesday: 11:00AM - 7:00PM",
    "Thursday: 11:00AM - 7:00PM",
    "Sunday: 11:00AM - 7:00PM",
    "Saturday: 11:00AM - 7:00PM",
    "friday: 11:00AM - 7:00PM"
  ];
  
  const modifiedArray = BadgeDays.map(day => {
    const colonIndex = day.indexOf(':');
    const timeString = day.substring(colonIndex + 2);
    return timeString.trim(); 
  });
  console.log(modifiedArray);