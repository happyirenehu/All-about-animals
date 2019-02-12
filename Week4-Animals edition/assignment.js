$(document).ready(function(){	

	var category_template, animals_template, modal_template;
	
	var source   = $("#category-template").html();
	var category_template = Handlebars.compile(source);
	
	source = $("#animals-template").html();
    var animals_template = Handlebars.compile(source);

    source = $("#modal-template").html();
    var modal_template = Handlebars.compile(source);
    	
	function showTemplate(template, data){
    	var html = template(data);
		$("#content").html(html);
	};

    $("#category-tab").click(function() {
  	    showTemplate(category_template, animals_data);
   		$(".category-thumbnail").click(function(){
          var index = $(this).data("id");
 	      current_category = animals_data.category[index];
 	      showTemplate(animals_template, current_category);  	  		
	      $(".animal-thumbnail").click(displayModal);
        });  
     });   
 
     function displayModal(event){
        var index = $(this).data("id");
        current_animal = current_category.animals[index];
		var html = modal_template(current_category.animals[index]);
        $('#modal-container').html(html);
        $("#imageModal").modal('show');       
     };
     
     $("#category-tab").click();

     $(".thumbnail").click(displayModal);

 })
