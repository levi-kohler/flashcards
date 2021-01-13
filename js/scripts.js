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

  $("#variable-nc").click(function() {
    $("#variable-nc-definition").toggle();
    $("#hide-variable-nc").toggle();
  });

  $("#function").click(function() {
    $("#function-definition").toggle();
    $("#hide-function").toggle();
  });
});
