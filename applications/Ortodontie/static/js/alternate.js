$(function() {

  $('section').attr('class', function(){
    if($(this).prev().prop("tagName")==='HEADER'){
      $(this).attr('class','general-section-white');
      $(this).find('p').css('color','#72736e');
      $(this).find('h1').css('color','#034b81');
      $(this).find('h2').css('color','#72736e');
      $(this).find('h3').css('color','#72736e');
      $(this).find('h4').css('color','#72736e');
      $(this).find('h5').css('color','#72736e');

    }
    else {
      var nm = $(this).prevAll('section').first();
      if (nm.attr('class')==='general-section-white'){
        $(this).attr('class','general-section-blue');
        $(this).find('p').css('color','#fff');
      	$(this).find('h1').css('color','#fff');
      	$(this).find('h2').css('color','#fff');
      	$(this).find('h3').css('color','#fff');
      	$(this).find('h4').css('color','#fff');
      	$(this).find('h5').css('color','#fff');
      }
      else {
        $(this).attr('class','general-section-white');
        $(this).find('p').css('color','#72736e');
      	$(this).find('h1').css('color','#034b81');
      	$(this).find('h2').css('color','#72736e');
      	$(this).find('h3').css('color','#72736e');
      	$(this).find('h4').css('color','#72736e');
      	$(this).find('h5').css('color','#72736e');
      }
    }
  });

	$('#footer').attr('class', function(){

		var nmm=$(this).prevAll('section').first();
		var varClass = nmm.attr('class');

		switch(varClass){
		case 'general-section-white':
    		$(this).attr('class','general-section-blue');
    		$(this).find('p').css('color','#fff');
    		$(this).find('h1').css('color','#fff');
    		$(this).find('h2').css('color','#fff');
    		$(this).find('h3').css('color','#fff');
    		$(this).find('h4').css('color','#fff');
    		$(this).find('h5').css('color','#fff');
    		return 'general-section-blue';
    		break;
		case 'general-section-blue':
			$(this).attr('class','general-section-white');
        	$(this).find('p').css('color','#72736e');
      		$(this).find('h1').css('color','#034b81');
      		$(this).find('h2').css('color','#72736e');
      		$(this).find('h3').css('color','#72736e');
      		$(this).find('h4').css('color','#72736e');
      		$(this).find('h5').css('color','#72736e');
      		return 'general-section-white';
      		break;
      	}
    }); 
 });   

