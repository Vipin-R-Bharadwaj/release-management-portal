document.addEventListener("DOMContentLoaded", function () {
  const options = [];
  var elems = document.querySelectorAll(".dropdown-trigger");
  var instances = M.Dropdown.init(elems, options);
});

document.addEventListener("DOMContentLoaded", function () {
  const options = [
    {
      setDefaultDate: "true",
    },
  ];
  var elems = document.querySelectorAll(".datepicker");
  var instances = M.Datepicker.init(elems, options);
});

document.addEventListener("DOMContentLoaded", function () {
  const options = [];
  var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems, options);
});
