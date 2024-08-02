import React from "react";



// Function to delete data from db.json
function deleteDataFromDbJson(id) {
  fs.readFile('flights.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading flights.json:', err);
      return;
    }

    try {
      // Parse the JSON data
      const dbData = JSON.parse(data);

      // Find and remove the item with the specified ID
      const index = dbData.findIndex((item) => item.id === id);
      if (index !== -1) {
        dbData.splice(index, 1);
      }

      // Write the updated data back to the file
      fs.writeFile('flights.json', JSON.stringify(dbData, null, 2), (err) => {
        if (err) {
          console.error('Error writing to flights.json:', err);
        } else {
          console.log('Data deleted successfully');
        }
      });
    } catch (err) {
      console.error('Error parsing flights.json:', err);
    }
  });
}


export default deleteDataFromDbJson