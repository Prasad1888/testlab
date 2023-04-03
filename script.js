function toggleDropdown(dropdownNum) {
  var dropdown = document.getElementById("dropdown-" + dropdownNum);
  dropdown.classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var dropdown = dropdowns[i];
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    }
  }
}
