(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* Υποχρεωτικό πεδίο",
                    "alertTextCheckboxMultiple": "* Παρακαλώ επιλέξτε",
                    "alertTextCheckboxe": "* Υποχρεωτικό πεδίο",
                    "alertTextDateRange": "* Και τα δύο πεδία ημ/νίας είναι υποχρεωτικά"
                },
                "requiredInFunction": {
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* Field must equal test"
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "* Invalid ",
                    "alertText2": "Date Range"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "* Invalid ",
                    "alertText2": "Date Time Range"
                },
                "fourdigitnumber": {
                    "regex": /^\d{4}$/,
                    "alertText":  "* Εισάγετε έναν τετραψήφιο αριθμητικό κωδικό"
                },
                "fivedigitnumber": {
                    "regex": /^\d{5}$/,
                    "alertText":  "* Εισάγετε έναν πενταφήφιο αριθμητικό κωδικό"
                },
                "tendigitnumber": {
                    "regex": /^\d{10}$/,
                    "alertText":  "* Εισάγετε έναν δεκαψήφιο αριθμητικό κωδικό"
                },
                "fourtotwelvedigitnumber": {
                    "regex": /^\d{4,12}$/,
                    "alertText":  "* Εισάγετε έναν κωδικό με 4 έως 12 αριθμητικά ψηφία"
                },
                "fixedPhone": {
                	"regex": /^2\d{9}$/,
                    "alertText":  "* Το μήκος του πεδίου πρέπει να είναι 10 αριθμητικά ψηφία και ο αριθμός να ξεκινάει από 2."
                },
                "fixedPhoneSpace": {
               	 	"regex": /^[ ]*2\d{9}[ ]*$/,
                    "alertText":  "* Το μήκος του πεδίου πρέπει να είναι 10 αριθμητικά ψηφία και ο αριθμός να ξεκινάει από 2."
                },
                "mobilePhone": {
                	"regex": /^69\d{8}$/,
                    "alertText":  "* Το μήκος του πεδίου πρέπει να είναι 10 αριθμητικά ψηφία και ο αριθμός να ξεκινάει από 69."
                },
                "ticket": {
                	"regex": /^1-.*/,
                    "alertText":  "* Λάθος αριθμός ticket."
                },
                "size": {
                	"regex": "none",
                    "alertText": "* Το μήκος του πεδίου πρέπει να είναι ",
                    "alertText2": " χαρακτήρες"
                },
                "allowedFileAttachmentExtensions": {
                	"regex": "none",
                    "alertText": "* Το αρχείο παραβιάζει την πολιτική ασφαλείας του ΟΤΕ"
                },
                "oteAccountNumber": {
                	"regex": "none",
                    "alertText": "* Μη αποδεκτός αριθμός λογαριασμού"
                },
                "idmValidatePassword": {
                	"regex": "none",
                    "alertText": "* Μη έγκυρος κωδικός πρόσβασης. Συμβουλευτείτε τις οδηγίες στο διπλανό εικονίδιο πληροφοριών"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* Ελάχιστο μήκος ",
                    "alertText2": " χαρακτήρες"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* Μέγιστο μήκος ",
                    "alertText2": " χαρακτήρες"
                },
				"groupRequired": {
                    "regex": "none",
                    "alertText": "* Πρέπει να επιλέξετε τουλάχιστον μια τιμή"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* Η ελάχιστη τιμή είναι "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* Η μέγιστη τιμή είναι "
                },
                "past": {
                    "regex": "none",
                    "alertText": "* Date prior to "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* Date past "
                },
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* Maximum ",
                    "alertText2": " options allowed"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* Παρακαλώ διαλέξτε τουλάχιστον ",
                    "alertText2": " επιλογή"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* Τα πεδία δεν είναι όμοια"
                },
                "before": {
                    "regex": "none",
                    "alertText": "* Η ημ/νία πρέπει να είναι πριν την "
                },
				"after": {
                    "regex": "none",
                    "alertText": "* Η ημ/νία πρέπει να είναι μετά την "
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* Μη αποδεκτή πιστωτική κάρτα"
                },
                "vatNumber": {
                	"regex": "none",
                	"alertText": "* Μη αποδεκτός Α.Φ.Μ."
            	},
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}[\ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9\ \.\-\/]{3,20})((x|ext|extension)[\ ]?[0-9]{1,4})?$/,
                    "alertText": "* Μη έγκυρος αριθμός"
                },
                "email": {
                    // HTML5 compatible email regex ( http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#    e-mail-state-%28type=email%29 )
                	//original -> "regex": /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i, ///^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                	"regex": /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+\.)+([a-zA-Z]{2,5})$/,
                    "alertText": "* Μη έγκυρο e-mail. To e-mail πρέπει να περιέχει μόνο λατινικούς χαρακτήρες και κανέναν από τους χαρακτήρες !#$%^&amp;*()&gt;&lt;?:;\'\"\\|[]{}± ."
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* Μη έγκυρος ακέραιος"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* Μη έγκυρος δεκαδικός "
                },
                "date": {
                    //	Check if date is valid by leap year
                	"func": function (field) {
						var pattern = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[\/\-\.](\d{4})$/);
						var match = pattern.exec(field.val());
						if (match == null)
						   return false;

						var day = match[1]*1;
						var month = match[2]*1;
						var year = match[3];
						var date = new Date(year, month - 1, day); // because months starts from 0.

						return (date.getFullYear() == year && date.getMonth() == (month - 1) && date.getDate() == day);
					},
					"alertText": "* Μη έγκυρη ημ/νία. Πρέπει να είναι της μορφής DD/MM/YYYY"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* Invalid IP address"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* Invalid URL"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* Επιτρέπονται μόνο αριθμοί"
                },
                "onlyLetterSp": {
                	"regex": /^[a-zA-Zα-ωΑ-ΩάέήίόύώΆΈΉΊΌΎΏϊϋΪΫΐΰ\ \']+$/,
                    "alertText": "* Επιτρέπονται μόνο γράμματα"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* No special characters allowed"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
				"ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This username is available",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* This name is already taken",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This name is available",
                    // speaks by itself
                    "alertTextLoad": "* Validating, please wait"
                },
				 "ajaxNameCallPhp": {
	                    // remote json service location
	                    "url": "phpajax/ajaxValidateFieldName.php",
	                    // error
	                    "alertText": "* This name is already taken",
	                    // speaks by itself
	                    "alertTextLoad": "* Validating, please wait"
	                },
                "validate2fields": {
                    "alertText": "* Please input HELLO"
                },
	            //tls warning:homegrown not fielded
                "dateFormat":{
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "* Invalid Date"
                },
                //tls warning:homegrown not fielded
				"dateTimeFormat": {
	                "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    "alertText": "* Invalid Date or Date Format",
                    "alertText2": "Expected Format: ",
                    "alertText3": "mm/dd/yyyy hh:mm:ss AM|PM or ",
                    "alertText4": "yyyy-mm-dd hh:mm:ss AM|PM"
	            },
	            "username": {
                    "regex": /^([a-zA-Z0-9_\-\.]+)$/,
                    "alertText": "* Μη έγκυρο όνομα χρήστη. To όνομα χρήστη πρέπει να περιέχει μόνο λατινικούς χαρακτήρες, κανέναν από τους χαρακτήρες !#$%^&amp;*()&gt;&lt;?:;\'\"\\|[]{}±@, και να μην είναι της μορφής email."
                },
	            "companyName": {
                    "regex": /^([a-zA-Zα-ωΑ-ΩάέήίόύώΆΈΉΊΌΎΏϊϋΪΫΐΰ0-9\ \'\-\.,\&]+)$/,
                    "alertText": "* Επιτρέπονται μόνο γράμματα, αριθμοί και οι χαρακτήρες '-' '.' ',' και '&amp;'."
                }
            };

        }
    };

    $.validationEngineLanguage.newLang();

})(jQuery);
