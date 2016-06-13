$(function () {
	$("#CI_subscribeForm").validate({
		rules: {
			CI_email:{email:true},
			CI_custom7: {
		        required: function(element) {
		          	return $("#othersel").is(":selected");
		        }
		    }
		},
		validClass: "success",
		errorClass: "error",
		errorElement:"em",
		submitHandler: function( form ) {
            var tmp = $("#CI_custom2").val(),
                cachingfields,
                bustype;
            if( tmp !== 'Finance' && tmp !== 'Media/PR' && tmp !== 'Other' ){
                form.submit();
                // console.log("submit to:", tmp);
            } else {
                if(tmp === 'Finance'){
                    bustype = 0;
                } else if (tmp === 'Media/PR') {
                    bustype = 1;
                } else {
                    bustype = 2;
                }
                cachingfields = '&em='+$("#CI_email").val()+'&zip='+$("#CI_custom1").val()+'&comp='+$("#CI_custom11").val()+'&bus=14116'+bustype;
                $(form).attr('action','https://msh.sub-forms.com/dragon/init.do?site=MSH12_QXnew&version=0&page=1&demo2627210'+cachingfields);
                form.submit();
                // window.location = 'http://www.winespectator.com/sitesearch?query='+tmp;
                // console.log('redirecting because:',tmp);
            }
        },
		success: function(label, element){
			// console.log( "test2: ", label, element );
			var _this = $(element).parent();
			if( $(_this).hasClass("has-error") ){
				$(_this).removeClass("has-error").addClass("has-success");
				$(_this).find("span.glyphicon").removeClass("glyphicon-remove").addClass("glyphicon-ok");
			}
		},
		invalidHandler: function(event, validator){
			// console.log("test:", validator, event, validator.invalid);
			$.each( validator.invalid, function( key, value ) {
				// console.log( key + ": " + value );
				var _this = $("#"+key).parent();
				$(_this).addClass("has-success");
				$(_this).addClass("has-error has-feedback");
                $(_this).find("span.glyphicon").removeClass("glyphicon-ok").addClass("glyphicon-remove");
				$(_this).find(".form-control-feedback").css("display","block");
			});
		}
	});
	// console.log(window.location.search);
	var workWithThisFormIfExist = $("#CI_subscribeForm.forfillingout").length;

	// Pre-populates input fields via link
	if(workWithThisFormIfExist){
		var url = window.location.search.split('&'),
			tmp;

		for(var i = 0; i < url.length; i++){
		   tmp = url[i].split('=');
		   // console.log(tmp[1]);
		   if ( tmp[0] === "email" || tmp[0] === "?email"){
				$("#CI_email").val(tmp[1]);
			}
			if ( tmp[0] === "zipcode" || tmp[0] === "?zipcode" ){
				$("#CI_custom1").val(tmp[1]);
			}
			if ( tmp[0] === "source" || tmp[0] === "?source" ){
				$("#CI_custom5").val(tmp[1]);
			}
		}
	}

	// Adds an input field when other (type of industry select field) is selected
	$("#CI_custom2").change( function(){
		// console.log($(this).val());
		if( $(this).val() === "Other" ){
			$(".form-group.hide").removeClass("hide");
		} else {
			$('#CI_custom7').parent().addClass("hide");
		}
	} );
});
