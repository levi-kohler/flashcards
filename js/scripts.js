$(document).ready(function() {
  $("#js").click(function() {
    $("#js-definition").toggle();
    $("#hide-js").toggle();
  });

  $("#operator").click(function() {
    $("#operator-definition").toggle();
    $("#hide-operator").toggle();
  });

  $("#variable").click(function() {
    $("#variable-definition").toggle();
    $("#hide-variable").toggle();
  });
});
