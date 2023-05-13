function showPopup() {
    document.getElementById("popup").style.display = "block";
    setTimeout(function() {
      hidePopup();
    }, 3000); // Close popup automatically after 3 seconds
  }
  
  function hidePopup() {
    document.getElementById("popup").style.display = "none";
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    showPopup();
  });
  
  document.querySelector(".close-btn").addEventListener("click", function() {
    hidePopup();
  });
  
  document.getElementById("popup").addEventListener("click", function() {
    hidePopup();
  });
  