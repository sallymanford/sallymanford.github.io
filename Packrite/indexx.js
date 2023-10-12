document.getElementById("open-popup-btn").addEventListener("click",function(){
    document.getElementById("open-popup-btn").style.display = "none";
    document.getElementsByClassName("popup")[0].classList.add("active");
  });
   
  document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
    document.getElementById("open-popup-btn").style.display = "block";
    document.getElementsByClassName("popup")[0].classList.remove("active");
  });

  document.getElementById("myForm").addEventListener("submit", function(event) {
    var nameInput = document.getElementById("name");
    var phoneInput = document.getElementById("phone");
    var numberInput = document.getElementById("number");
    var atimeInput = document.getElementById("atime");
    var dtimeInput = document.getElementById("dtime");
    var slotInput = document.getElementById("slot");
    

    
    if (!nameInput.value || !phoneInput.value || !numberInput.value || !atimeInput.value || !dtimeInput.value || !slotInput.value) {
      alert("Please fill in all required fields.");
      event.preventDefault(); // Prevent the form from submitting
    }
  });