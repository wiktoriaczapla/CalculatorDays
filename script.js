function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;
    const resultElement = document.getElementById("result");
  
    if (birthdate) {
      const today = new Date();
      const birthDate = new Date(birthdate);
  
      const timeDifference = today - birthDate;
      const ageDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
      resultElement.innerText = `Jest to ${ageDays} dni.`;
      resultElement.style.color = "#D1648D"; // Set the text color to green
    } else {
      resultElement.innerText = "Proszę wybierz dzień."; // Clear the result if birthdate is not entered
      resultElement.style.color = "red";
    }
  }
  