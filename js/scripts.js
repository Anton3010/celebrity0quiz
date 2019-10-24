$(document).ready(function() {

  $("form#quiz").submit(function(event) {
    $("#result").hide();
    $(".early").hide();
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();


      if (gender === 'male' && age >= 19) {

        $("#celebrity").text("Alla Pugacheva");
        $("#result").show();


      } else if (gender === "female" && age >= 19) {
        $("#celebrity").text("Filip Kirkorov");
        $("#result").show();
      } else if (age <= 18) {
        $(".early").show();
      }




    event.preventDefault();
  });
});
//   $("form#insurance").subbmit(function(event) {
//     var age = parseInt($("input#age").val());
//     var gender = $("select#gender").val();
//
//     if (age >= 21) {
//       $("")
//     }
//   });
// });
