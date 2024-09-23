function setCursorLocation() {
    const element = document.getElementById('your-element-id'); // Use your actual element identifier
    if (element) { // Check if element is not null
      element.style.cursor = 'pointer'; // Example action
    } else {
      console.error('Element not found');
    }
  }
  

export default setCursorLocation;