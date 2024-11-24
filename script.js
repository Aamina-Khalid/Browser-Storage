// Function to save data to Local Storage
function saveToLocal() {
  const key = document.getElementById("key").value;
  const value = document.getElementById("value").value;

  if (key && value) {
    localStorage.setItem(key, value); // Save key-value pair to local storage
    alert(`Saved "${key}: ${value}" to Local Storage.`);
  } else {
    alert("Please provide both key and value.");
  }
}

// Function to save data to Session Storage
function saveToSession() {
  const key = document.getElementById("key").value;
  const value = document.getElementById("value").value;

  if (key && value) {
    sessionStorage.setItem(key, value); // Save key-value pair to session storage
    alert(`Saved "${key}: ${value}" to Session Storage.`);
  } else {
    alert("Please provide both key and value.");
  }
}

// Function to retrieve data from Local Storage
function retrieveFromLocal() {
  const key = document.getElementById("key").value;

  if (key) {
    const value = localStorage.getItem(key); // Retrieve value by key
    document.getElementById("output").innerText = value
      ? `Local Storage: ${key} = ${value}`
      : `No data found for key "${key}" in Local Storage.`;
  } else {
    alert("Please provide a key.");
  }
}

// Function to retrieve data from Session Storage
function retrieveFromSession() {
  const key = document.getElementById("key").value;

  if (key) {
    const value = sessionStorage.getItem(key); // Retrieve value by key
    document.getElementById("output").innerText = value
      ? `Session Storage: ${key} = ${value}`
      : `No data found for key "${key}" in Session Storage.`;
  } else {
    alert("Please provide a key.");
  }
}

// Function to clear both Local and Session Storage
function clearStorage() {
  localStorage.clear(); // Clear local storage
  sessionStorage.clear(); // Clear session storage
  alert("All storage cleared.");
  document.getElementById("output").innerText = "";
}
