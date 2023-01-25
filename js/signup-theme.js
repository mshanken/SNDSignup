$(function() {
    $("#CI_subscribeForm").validate({
        ignore: '.ignore',
        rules: {
            CI_email: { email: true },
            CI_custom7: {
                required: function(element) {
                    return $("#othersel").is(":selected");
                }
            },
            CI_custom26: {
                required: function(element) {
                    return $("#othertsel").is(":selected");
                }
            },
            CI_proactive_agree_to_receive_emails: {
                required: function(element) {
                    return $("#CI_custom25").is(":checked");
                }
            }
        },
        validClass: "success",
        errorClass: "error",
        errorElement: "em",
        submitHandler: function(form) {
            var tmp = $("#CI_custom2").val(),
                cachingfields,
                bustype;

            switch (tmp) {
                case 'Importer':
                    bustype = '207';
                    cachingfields = '&zip=' + $("#CI_custom1").val() + '&comp=' + $("#CI_custom11").val() + '&ctry=' + $("#CI_custom28").val() + '&title=' + $("#CI_custom4").val() + '&bus=' + bustype;
                    $(form).attr('action', 'https://portal.mshanken.com/wc/wc_verify.cfm?omedasite=QXnew30d1d_b&PK=SND081921' + encodeURIComponent(cachingfields));
                    break;
                case 'Distiller':
                    bustype = '208';
                    cachingfields = '&zip=' + $("#CI_custom1").val() + '&comp=' + $("#CI_custom11").val() + '&ctry=' + $("#CI_custom28").val() + '&title=' + $("#CI_custom4").val() + '&bus=' + bustype;
                    $(form).attr('action', 'https://portal.mshanken.com/wc/wc_verify.cfm?omedasite=QXnew30d1d_b&PK=SND081921' + encodeURIComponent(cachingfields));
                    break;
                case 'Winery':
                    bustype = '209';
                    cachingfields = '&zip=' + $("#CI_custom1").val() + '&comp=' + $("#CI_custom11").val() + '&ctry=' + $("#CI_custom28").val() + '&title=' + $("#CI_custom4").val() + '&bus=' + bustype;
                    $(form).attr('action', 'https://portal.mshanken.com/wc/wc_verify.cfm?omedasite=QXnew30d1d_b&PK=SND081921' + encodeURIComponent(cachingfields));
                    break;
                case 'Wine/Spirits Distributor':
                    bustype = '210';
                    cachingfields = '&zip=' + $("#CI_custom1").val() + '&comp=' + $("#CI_custom11").val() + '&ctry=' + $("#CI_custom28").val() + '&title=' + $("#CI_custom4").val() + '&bus=' + bustype;
                    $(form).attr('action', 'https://portal.mshanken.com/wc/wc_verify.cfm?omedasite=QXnew30d1d_b&PK=SND081921' + encodeURIComponent(cachingfields));
                    break;
                case 'Beer Distributor':
                    bustype = '211';
                    cachingfields = '&zip=' + $("#CI_custom1").val() + '&comp=' + $("#CI_custom11").val() + '&ctry=' + $("#CI_custom28").val() + '&title=' + $("#CI_custom4").val() + '&bus=' + bustype;
                    $(form).attr('action', 'https://portal.mshanken.com/wc/wc_verify.cfm?omedasite=QXnew30d1d_b&PK=SND081921' + encodeURIComponent(cachingfields));
                    break;
                case 'Brewer':
                    bustype = '212';
                    cachingfields = '&zip=' + $("#CI_custom1").val() + '&comp=' + $("#CI_custom11").val() + '&ctry=' + $("#CI_custom28").val() + '&title=' + $("#CI_custom4").val() + '&bus=' + bustype;
                    $(form).attr('action', 'https://portal.mshanken.com/wc/wc_verify.cfm?omedasite=QXnew30d1d_b&PK=SND081921' + encodeURIComponent(cachingfields));
                    break;
                case 'Restaurant':
                    bustype = '213';
                    cachingfields = '&em=' + $("#CI_email").val() + '&zip=' + $("#CI_custom1").val() + '&comp=' + $("#CI_custom11").val() + '&ctry=' + $("#CI_custom28").val() + '&title=' + $("#CI_custom4").val() + '&bus=' + bustype;
                    $(form).attr('action', 'https://portal.mshanken.com/wc/wc_verify.cfm?omedasite=QXnew30d1d_b&PK=SND081921' + encodeURIComponent(cachingfields));
                    $('#CI_thankyou').val('https://msh.dragonforms.com/MSH12_comp&PK=SNDfree21&em=%%CI_email%%&zip=%%CI_custom1%%&comp=%%CI_custom11%%');
                    $('#CI_thankyou2').val('https://msh.dragonforms.com/MSH12_comp&PK=SNDfree21&em=%%CI_email%%&zip=%%CI_custom1%%&comp=%%CI_custom11%%');
                    break;
                case 'Bar':
                    bustype = '214';
                    cachingfields = '&em=' + $("#CI_email").val() + '&zip=' + $("#CI_custom1").val() + '&comp=' + $("#CI_custom11").val() + '&ctry=' + $("#CI_custom28").val() + '&title=' + $("#CI_custom4").val() + '&bus=' + bustype;
                    $(form).attr('action', 'https://portal.mshanken.com/wc/wc_verify.cfm?omedasite=QXnew30d1d_b&PK=SND081921' + encodeURIComponent(cachingfields));
                    $('#CI_thankyou').val('https://msh.dragonforms.com/MSH12_comp&PK=SNDfree21&em=%%CI_email%%&zip=%%CI_custom1%%&comp=%%CI_custom11%%');
                    $('#CI_thankyou2').val('https://msh.dragonforms.com/MSH12_comp&PK=SNDfree21&em=%%CI_email%%&zip=%%CI_custom1%%&comp=%%CI_custom11%%');
                    break;
                case 'Hotel':
                    bustype = '215';
                    cachingfields = '&em=' + $("#CI_email").val() + '&zip=' + $("#CI_custom1").val() + '&comp=' + $("#CI_custom11").val() + '&ctry=' + $("#CI_custom28").val() + '&title=' + $("#CI_custom4").val() + '&bus=' + bustype;
                    $(form).attr('action', 'https://portal.mshanken.com/wc/wc_verify.cfm?omedasite=QXnew30d1d_b&PK=SND081921' + encodeURIComponent(cachingfields));
                    $('#CI_thankyou').val('https://msh.dragonforms.com/MSH12_comp&PK=SNDfree21&em=%%CI_email%%&zip=%%CI_custom1%%&comp=%%CI_custom11%%');
                    $('#CI_thankyou2').val('https://msh.dragonforms.com/MSH12_comp&PK=SNDfree21&em=%%CI_email%%&zip=%%CI_custom1%%&comp=%%CI_custom11%%');
                    break;
                case 'Independent Retailer (Wine/Spirits/Beer)':
                    bustype = '216';
                    cachingfields = '&em=' + $("#CI_email").val() + '&zip=' + $("#CI_custom1").val() + '&comp=' + $("#CI_custom11").val() + '&ctry=' + $("#CI_custom28").val() + '&title=' + $("#CI_custom4").val() + '&bus=' + bustype;
                    $(form).attr('action', 'https://portal.mshanken.com/wc/wc_verify.cfm?omedasite=QXnew30d1d_b&PK=SND081921' + encodeURIComponent(cachingfields));
                    $('#CI_thankyou').val('https://msh.dragonforms.com/MSH12_comp&PK=SNDfree21&em=%%CI_email%%&zip=%%CI_custom1%%&comp=%%CI_custom11%%');
                    $('#CI_thankyou2').val('https://msh.dragonforms.com/MSH12_comp&PK=SNDfree21&em=%%CI_email%%&zip=%%CI_custom1%%&comp=%%CI_custom11%%');
                    break;
                case 'Chain Retailer (Wine/Spirits/Beer)':
                    bustype = '217';
                    cachingfields = '&em=' + $("#CI_email").val() + '&zip=' + $("#CI_custom1").val() + '&comp=' + $("#CI_custom11").val() + '&ctry=' + $("#CI_custom28").val() + '&title=' + $("#CI_custom4").val() + '&bus=' + bustype;
                    $(form).attr('action', 'https://portal.mshanken.com/wc/wc_verify.cfm?omedasite=QXnew30d1d_b&PK=SND081921' + encodeURIComponent(cachingfields));
                    $('#CI_thankyou').val('https://msh.dragonforms.com/MSH12_comp&PK=SNDfree21&em=%%CI_email%%&zip=%%CI_custom1%%&comp=%%CI_custom11%%');
                    $('#CI_thankyou2').val('https://msh.dragonforms.com/MSH12_comp&PK=SNDfree21&em=%%CI_email%%&zip=%%CI_custom1%%&comp=%%CI_custom11%%');
                    break;
                case 'Club (Private, Country)':
                    bustype = '218';
                    cachingfields = '&em=' + $("#CI_email").val() + '&zip=' + $("#CI_custom1").val() + '&comp=' + $("#CI_custom11").val() + '&ctry=' + $("#CI_custom28").val() + '&title=' + $("#CI_custom4").val() + '&bus=' + bustype;
                    $(form).attr('action', 'https://portal.mshanken.com/wc/wc_verify.cfm?omedasite=QXnew30d1d_b&PK=SND081921' + encodeURIComponent(cachingfields));
                    $('#CI_thankyou').val('https://msh.dragonforms.com/MSH12_comp&PK=SNDfree21&em=%%CI_email%%&zip=%%CI_custom1%%&comp=%%CI_custom11%%');
                    $('#CI_thankyou2').val('https://msh.dragonforms.com/MSH12_comp&PK=SNDfree21&em=%%CI_email%%&zip=%%CI_custom1%%&comp=%%CI_custom11%%');
                    break;
                case 'Duty Free Operator':
                    bustype = '219';
                    cachingfields = '&zip=' + $("#CI_custom1").val() + '&comp=' + $("#CI_custom11").val() + '&ctry=' + $("#CI_custom28").val() + '&title=' + $("#CI_custom4").val() + '&bus=' + bustype;
                    $(form).attr('action', 'https://portal.mshanken.com/wc/wc_verify.cfm?omedasite=QXnew30d1d_b&PK=SND081921' + encodeURIComponent(cachingfields));
                    break;
                case 'Finance':
                    bustype = '220';
                    cachingfields = '&zip=' + $("#CI_custom1").val() + '&comp=' + $("#CI_custom11").val() + '&ctry=' + $("#CI_custom28").val() + '&title=' + $("#CI_custom4").val() + '&bus=' + bustype;
                    $(form).attr('action', 'https://portal.mshanken.com/wc/wc_verify.cfm?omedasite=QXnew30d1d_b&PK=SND081921' + encodeURIComponent(cachingfields));
                    break;
                case 'Media/PR':
                    bustype = '221';
                    cachingfields = '&zip=' + $("#CI_custom1").val() + '&comp=' + $("#CI_custom11").val() + '&ctry=' + $("#CI_custom28").val() + '&title=' + $("#CI_custom4").val() + '&bus=' + bustype;
                    $(form).attr('action', 'https://portal.mshanken.com/wc/wc_verify.cfm?omedasite=QXnew30d1d_b&PK=SND081921' + encodeURIComponent(cachingfields));
                    break;
                case 'Other':
                    bustype = '222';
                    cachingfields = '&zip=' + $("#CI_custom1").val() + '&comp=' + $("#CI_custom11").val() + '&ctry=' + $("#CI_custom28").val() + '&title=' + $("#CI_custom4").val() + '&bus=' + bustype;
                    $(form).attr('action', 'https://portal.mshanken.com/wc/wc_verify.cfm?omedasite=QXnew30d1d_b&PK=SND081921' + encodeURIComponent(cachingfields));
                    break;
            }
            // console.log(cachingfields);
            form.submit();
        },
        success: function(label, element) {
            // console.log( "test2: ", label, element );
            var _this = ($(element).hasClass('form-check-input')) ? $(element).parent().parent() : $(element).parent();
            if ($(_this).hasClass("has-error")) {
                $(_this).removeClass("has-error").addClass("has-success");
                $(_this).find("span.glyphicon").removeClass("glyphicon-remove").addClass("glyphicon-ok");
            }
        },
        invalidHandler: function(event, validator) {
            // console.log("test:", validator, event, validator.invalid);
            $.each(validator.invalid, function(key, value) {
                // console.log( key + ": " + value );
                var _this = ($("#" + key).hasClass('form-check-input')) ? $("#" + key).parent().parent() : $("#" + key).parent();
                $(_this).addClass("has-success");
                $(_this).addClass("has-error has-feedback");
                $(_this).find("span.glyphicon").removeClass("glyphicon-ok").addClass("glyphicon-remove");
                $(_this).find(".form-control-feedback").css("display", "block");
            });
        }
    });
    // console.log(window.location.search);
    var workWithThisFormIfExist = $("#CI_subscribeForm.forfillingout").length;

    // Pre-populates input fields via link
    if (workWithThisFormIfExist) {
        var url = window.location.search.split('&'),
            tmp;

        for (var i = 0; i < url.length; i++) {
            tmp = url[i].split('=');
            // console.log(tmp[1]);
            if (tmp[0] === "email" || tmp[0] === "?email") {
                $("#CI_email").val(tmp[1]);
            }
            if (tmp[0] === "zipcode" || tmp[0] === "?zipcode") {
                $("#CI_custom1").val(tmp[1]);
            }
            if (tmp[0] === "source" || tmp[0] === "?source") {
                $("#CI_custom5").val(tmp[1]);
            }
        }
    }

    // Adds an input field when other (type of industry select field) is selected
    $("#CI_custom2").change(function() {
        // console.log($(this));
        if ($(this).val() === "Other") {
            $('#CI_custom7').parent().removeClass("hide");
        } else {
            $('#CI_custom7').parent().addClass("hide");
        }
    });

    $("#CI_custom4").change(function() {
        // console.log($(this));
        if ($(this).val() === "Other") {
            $('#CI_custom26').parent().removeClass("hide");
        } else {
            $('#CI_custom26').parent().addClass("hide");
        }
    });

    $("input[type=checkbox]").change(function() {
        if ($(this).prop('checked')) {
            $(this).prev().removeClass('glyphicon-unchecked').addClass('glyphicon-check');
        } else {
            $(this).prev().removeClass('glyphicon-check').addClass('glyphicon-unchecked');
        }
    });

    $("#CI_custom25").change(function() {
        if ($(this).prop('checked')) {
            $('#CI_subscribeForm').attr('action', '//portal.mshanken.com/wc/wc7_verify.cfm');
            $(this).val('Y');
            // $('#CI_pproactive_agree_to_receive_emails').attr('required','required');
            $("#GDPRContent").removeClass('hidden');
        } else {
            $('#CI_subscribeForm').attr('action', '//portal.mshanken.com/wc/wc_verify.cfm');
            $(this).val('N');
            // $('#CI_pproactive_agree_to_receive_emails').prop('required',false);
            $('#GDPRContent').addClass('hidden');
        }
    });
});