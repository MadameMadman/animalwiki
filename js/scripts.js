


$(document).ready(function(){
     $("#dropdown").submit(function(event){
      var animal = parseInt($("#dropdown_change").val());

      if (animal === 1) {
        $("#dog").show();
      } else {
        $("#dog").hide();
      }
      if (animal === 2) {
        $("#bird").show()
      } else {
        $("#bird").hide();
      } if (animal === 3) {
        $("#cow").show()
      } else {
        $("#cow").hide();
      }

      console.log(animal);
      event.preventDefault();
     });

   });
