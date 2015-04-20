	var gfk_HeartBeatPath = "/ote-corporate-theme/htm/"; // full path to Heartbeat.htm 
	var gfk_ImagePath = "/ote-corporate-theme/images/"; // path to images on server
	var gfk_TPCPath = "./"; // full path to Third Party Cookie site
	var gfk_TPCproglang = "htm";
		
	var gfk_survey_cookie="gfk_telekom_cookie";
	
	// enter all sites or subsites here - format is URL, incidence (out of 100), template (language), Drive survey ID, cookie domain
	var gfk_Sites= new Array(
				"demoOTE", 100, "ell", "ote_gr","gfknop.co.uk","OTE",
		"democosmotegr",100,"ell", "cosmote_gr","gfknop.co.uk","COSMOTE",
		"ote.gr",4,"ell", "ote_gr","ote.gr","OTE",
		"dev.ote.gr",100,"ell", "ote_gr","ote.gr","OTE",
		"cosmote.gr",1,"ell", "cosmote_gr","cosmote.gr","COSMOTE",
		"mrinterview.gfknop.co.uk/popup",-1,"","","",""

	);

	var gfk_thissite = document.location.href.replace(/\/$/,""); // our current URL
	
		for (gfk_i=0;gfk_i<gfk_Sites.length;gfk_i+=6) { // match current URL against site list 
				 
		 if (gfk_thissite.toLowerCase().indexOf(gfk_Sites[gfk_i].toLowerCase()) > -1) {
			gfk_mySite = gfk_Sites[gfk_i];		// matched site
			gfk_INCIDENCE = gfk_Sites[gfk_i+1];	// matched incidence
			gfk_Template = gfk_Sites[gfk_i+2];	// matched template
			gfk_ExtraParams = gfk_Sites[gfk_i+3];	// matched Drive params
			gfk_cookiedomain = gfk_Sites[gfk_i+4]; // matched cookie domain
			gfk_brandName = gfk_Sites[gfk_i+5]; // matched cookie domain
			if (gfk_debug == true) { gfk_doDebug("matched on " + gfk_mySite) } 
		}
	}

	gfk_keepAlive();
	
	var gfk_ckblank="";
	
	

//---


// start jpu code - search for gfk to get to our stuff
	
function gfk_jpu_keepAlive () { 
	gfk_keepAlive();
}
	
// - end JPU code
	
	if (gfk_TPCproglang != "htm") { 
		// check for support of TPC
	
		var gfkTPCscript = document.createElement("script");
		gfkTPCscript.src = gfk_TPCPath + "gfk_keepalive." + gfk_TPCproglang + "?checkTPC_set=1";
		document.body.appendChild(gfkTPCscript);
	}
	
	
		
	var gfk=true;// to test is on site
	var gfk_referrer = document.referrer;
	
    var gfk_active = true; // disable the script entirely by setting this to false
	var gfk_cookiedomain;
	
	var gfk_heartBeatURL;
	var gfk_intv; //keep alive interval
	var gfk_UID = new Date().getTime() + parseInt(Math.random() * 100000);
	
	var gfk_ExtraParams = "";
	
	var gfk_isMobile = 51; // for Drive, 51 = web, 52 = mobile
	var gfk_brandName;
	
	var gfk_initiate_intv; // checker interveral for pop up initiated
	var gfk_initiated = false;
					
	
	if (navigator.userAgent.match(/android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|meego.+mobile|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i) )
	{ 
		if (navigator.userAgent.match(/ipad|android 4.4/i) && !navigator.userAgent.match(/mobile/i)) { 
			gfk_isMobile=52;
		}
		else { 
			gfk_active=false;
		}
	}
		var gfk_useBackupPopMethod = 0 ;
		if (typeof jQuery == "undefined") {  
			gfk_useBackupPopMethod = 1;
		} 
		else { 
			//if (parseFloat(jQuery.fn.jquery) < 1.7) 
			if (parseInt(jQuery.fn.jquery.replace(/^.\./,"").replace(/\..*$/,"")) < 7 && parseInt(jQuery.fn.jquery) == 1) {
				gfk_doDebug("jQuery too low");
				gfk_useBackupPopMethod = 1;
			}
		}
		
		

	var gfk_popuptype = "c"; // values are nc for non-cookie or c for cookie
	var gfk_track = "nt" ; // values are t to implement tracking across site and nt to not do this
	

	

	// this is the name of the cookie that will drop to stop people getting multiple invites
 
 	var gfk_survey_cookie="gfk_telekom_cookie";

	//var gfk_cookiedomain="gfknop.co.uk";

	// this is the domain of the cookie - mainly important for cookie-based tracking (across subdomains)

	var gfk_theDate;
	var gfk_d;	
	var gfk_debug = false; // if set to true will get informational alerts to show code is working
	var gfk_always_show = false; // if set to true will always show pop up (without alerts)
	var gfk_delete_cookie = false; // if set to true will delete cookie
	
	var gfk_thissite = document.location.href.replace(/\/$/,""); // our current URL
	
	if (gfk_thissite.match(/GFK_DEBUG/)) { 
		gfk_debug = true;
		if (gfk_debug) { gfk_doDebug("Setting debug mode = ON") }
	} // force flag via URL
	
	if (gfk_thissite.match(/GFK_SHOW/)) { 
		gfk_always_show = true;
		if (gfk_debug) { gfk_doDebug("Overriding to always show pop up") } 
	} // force flag via URL
	
	if (gfk_thissite.match(/GFK_DELETE/)) { 
		gfk_delete_cookie = true;
		if (gfk_debug) { gfk_doDebug("Overriding to delete cookie") } 
	} // force flag via URL
	
	if (gfk_active) {
		try {
			$(document).ready(function()  { gfk_init_popup() } ) 
		}
		catch(err) {
			document.body.onload = gfk_init_popup;
		}
	}
	
	function gfk_init_popup() { 
		gfk_keepAlive();
		gfk_intv = window.setInterval(gfk_keepAlive,5000);
		

		if (gfk_debug)  { gfk_doDebug("Running pop up code") } 
		// there can be some problems calling the pop up in a frame / iframe, so we disable it in this case	
		if (self!=top) { 
			if (gfk_debug) { gfk_doDebug("Frame detected - code disabled") } 
			gfk_active = false 
		} 

		
	    	// Check for active flag...
		if (gfk_active) {

			gfk_theDate=new Date();
			var gfk_month=gfk_theDate.getMonth();
			gfk_month=gfk_month+3;
			gfk_theDate.setMonth(gfk_month);   // this is all for the cookie expiry

			var gfk_colorscheme="#99cc33;text-decoration:none;"; // for border and link colour
			gfk_d=document.createElement("div"); // create the invitation layer

			var gfk_winHeight = (document.compatMode=="CSS1Compat")?document.documentElement.clientHeight:document.body.clientHeight;
			
			if (self.innerHeight) { // for Safari (or all but Explorer)
				gfk_winHeight = self.innerHeight;
			}

			// now style it
			gfk_d.id = "gfk_popDiv";
			//gfk_d.style.borderStyle="solid";
//			gfk_d.style.borderWidth="4cpx";
			//gfk_d.style.borderColor="#333333";
			gfk_d.style.width="596px";
			gfk_d.style.height="444px";
			gfk_d.style.fontFamily="Arial,Helvetica,sans-serif";
			gfk_d.style.fontSize="15px";
			gfk_d.style.textAlign="left";
			gfk_d.style.zIndex="5000";
			gfk_d.style.color="#000000";

			gfk_d.style.position="absolute";
			gfk_d.style.left=((document.body.clientWidth/2) - 250)+"px";
			gfk_d.style.top=((gfk_winHeight/2) - 200)+"px";
			//gfk_d.style.backgroundColor="#ffffff";

			gfk_d.style.backgroundImage="url('" + gfk_ImagePath + "gfk_popup_background.png')";//#ffffff";
			gfk_d.style.backgroundRepeat="no-repeat";
			gfk_d.innerHTML="<form id='gfk_popFrm'>TEMPLATE</form>";
			
			if (gfk_useBackupPopMethod == 0) { gfk_d.style.display = "none" } // for fade in
			
			var gfk_mySite = "";

			var gfk_INCIDENCE = -1;

			for (gfk_i=0;gfk_i<gfk_Sites.length;gfk_i+=6) { // match current URL against site list 
				 
				 if (gfk_thissite.toLowerCase().indexOf(gfk_Sites[gfk_i].toLowerCase()) > -1) {
					gfk_mySite = gfk_Sites[gfk_i];		// matched site
					gfk_INCIDENCE = gfk_Sites[gfk_i+1];	// matched incidence
					gfk_Template = gfk_Sites[gfk_i+2];	// matched template
					gfk_ExtraParams = gfk_Sites[gfk_i+3];	// matched Drive params
					gfk_cookiedomain = gfk_Sites[gfk_i+4]; // matched cookie domain
					gfk_brandName = gfk_Sites[gfk_i+5]; // matched cookie domain
					if (gfk_debug == true) { gfk_doDebug("matched on " + gfk_mySite) } 
				}
			}

			if (gfk_delete_cookie) {
				if (gfk_debug) { gfk_doDebug("Deleting survey cookie due to URL parameter") } 
				gfk_erase_cookie(gfk_survey_cookie);
			}
			
			if (typeof gfk_rate_override == "number") { 
				if (gfk_debug) { gfk_doDebug("Override incidence to " + gfk_rate_override) } 
				gfk_INCIDENCE = gfk_rate_override;
			} 
			try { 
				if (gfk_re = $("script[src*=gfk]").prop("src").match(/gfk_rate=(\d+[\.|\,]?\d*)/)) {
					if (gfk_debug) { gfk_doDebug("Override incidence to " + gfk_re[1]) } 
					gfk_INCIDENCE = gfk_re[1];
				}
			}
			catch(err) {
				if (gfk_re = document.body.innerHTML.match(/gfk_rate=(\d+[\.|\,]?\d*)/)) { 
					if (gfk_debug) { gfk_doDebug("Override incidence to " + gfk_re[1]) } 
					gfk_INCIDENCE = gfk_re[1];
				}
			}

			if (gfk_Template == "ell") { 
gfk_d.innerHTML = gfk_d.innerHTML.replace(/TEMPLATE/,"<div style='padding:20px;width: 560px'><p style='font-size:25px;color:#333;font-weight:bold'>" + gfk_brandName + " &#904;&#961;&#949;&#965;&#957;&#945; &#949;&#960;&#953;&#963;&#954;&#949;&#960;&#964;&#974;&#957;</p><p>&#914;&#959;&#951;&#952;&#942;&#963;&#964;&#949; &#956;&#945;&#962; &#957;&#945; &#946;&#949;&#955;&#964;&#953;&#974;&#963;&#959;&#965;&#956;&#949; &#964;&#959;&#957; &#953;&#963;&#964;&#972;&#964;&#959;&#960;&#972; &#956;&#945;&#962;.</p><p>&#928;&#949;&#943;&#964;&#949; &#956;&#945;&#962; &#964;&#951; &#947;&#957;&#974;&#956;&#951; &#963;&#945;&#962; &#945;&#966;&#959;&#973; &#959;&#955;&#959;&#954;&#955;&#951;&#961;&#974;&#963;&#949;&#964;&#949; &#964;&#951;&#957; &#949;&#960;&#943;&#963;&#954;&#949;&#968;&#942; &#963;&#945;&#962; &#963;&#964;&#959;&#957; &#953;&#963;&#964;&#972;&#964;&#959;&#960;&#972; &#956;&#945;&#962;.</p><p>&#916;&#949;&#957; &#952;&#945; &#963;&#945;&#962; &#960;&#940;&#961;&#949;&#953; &#960;&#940;&#957;&#969; &#945;&#960;&#972; 5 &#955;&#949;&#960;&#964;&#940; &#957;&#945; &#945;&#960;&#945;&#957;&#964;&#942;&#963;&#949;&#964;&#949; &#963;&#964;&#953;&#962; &#949;&#961;&#969;&#964;&#942;&#963;&#949;&#953;&#962; &#956;&#945;&#962;.</p><p>&#927;&#953; &#945;&#960;&#945;&#957;&#964;&#942;&#963;&#949;&#953;&#962; &#963;&#945;&#962; &#952;&#945; &#960;&#945;&#961;&#945;&#956;&#949;&#943;&#957;&#959;&#965;&#957; &#945;&#957;&#974;&#957;&#965;&#956;&#949;&#962;.</p><p><center><table><tr><td><div style='background:#333333;width: 100px; padding: 5px; border: solid black 1px;font-size:12px;text-align:center; cursor: pointer; font-weight: bold;color:#fff' onclick='gfk_run_survey()' class='gfk_cmdBtn'>&#925;&#945;&#953;</div></td></tr><tr><td><div style='background:#333333;width: 100px; padding: 5px; border: solid black 1px;font-size:12px;text-align:center; cursor: pointer; font-weight: bold;color:#fff' onclick='gfk_close_popup()' class='gfk_cmdBtn'>&#908;&#967;&#953;</div></div></td></tr></table></center></p></center></p><p id='gfk_no_IpadFF'>&#932;&#959; &#949;&#961;&#969;&#964;&#951;&#956;&#945;&#964;&#959;&#955;&#972;&#947;&#953;&#959; &#952;&#945; &#949;&#956;&#966;&#945;&#957;&#953;&#963;&#964;&#949;&#943; &#945;&#961;&#947;&#972;&#964;&#949;&#961;&#945; &#963;&#949; &#958;&#949;&#967;&#969;&#961;&#953;&#963;&#964;&#942; &#959;&#952;&#972;&#957;&#951;. </p><p id='gfk_IpadFF' style='display:none'>&#932;&#959; &#949;&#961;&#969;&#964;&#951;&#956;&#945;&#964;&#959;&#955;&#972;&#947;&#953;&#959; &#952;&#945; &#945;&#961;&#967;&#943;&#963;&#949;&#953; &#945;&#965;&#964;&#972;&#956;&#945;&#964;&#945; &#945;&#966;&#959;&#973; &#945;&#960;&#959;&#967;&#969;&#961;&#943;&#963;&#949;&#964;&#949; &#945;&#960;&#972; &#964;&#959;&#957; &#953;&#963;&#964;&#972;&#964;&#959;&#960;&#959; &#963;&#949; &#941;&#957;&#945; &#957;&#941;&#959; &#960;&#945;&#961;&#940;&#952;&#965;&#961;&#959; &#942; &#954;&#945;&#961;&#964;&#941;&#955;&#945;. &#924;&#949;&#964;&#940; &#964;&#951;&#957; &#959;&#955;&#959;&#954;&#955;&#942;&#961;&#969;&#963;&#951; &#964;&#951;&#962; &#949;&#960;&#943;&#963;&#954;&#949;&#968;&#951;&#962; &#963;&#945;&#962;, &#960;&#945;&#961;&#945;&#954;&#945;&#955;&#959;&#973;&#956;&#949; &#957;&#945; &#945;&#957;&#959;&#943;&#958;&#949;&#964;&#949; &#964;&#959; &#945;&#957;&#945;&#966;&#949;&#961;&#972;&#956;&#949;&#957;&#959; &#960;&#945;&#961;&#940;&#952;&#965;&#961;&#959; &#942; &#954;&#945;&#961;&#964;&#941;&#955;&#945;.</p>	</div>");

 } 


			// check if mySite found
			if (gfk_mySite != ""){
			
				if (gfk_TPCproglang != "htm") { 
					gfkTPCscript = document.createElement("script");
					gfkTPCscript.src = gfk_TPCPath + "gfk_keepalive." + gfk_TPCproglang + "?checkTPC_get=1";
					document.body.appendChild(gfkTPCscript);
				}
 
			    // check against incidence rate (100=everyone, -1 = no one)
			    if (gfk_debug) { gfk_doDebug("Incidence rate is " + gfk_INCIDENCE) }
			    if (gfk_thissite.match(/GFK_DEBUG100/)) { gfk_doDebug("Overriding incidence to 100") } 
			    if (gfk_incidence_rate(gfk_INCIDENCE)) {
					// only serve if they haven't got a cookie

					if (gfk_debug) { gfk_doDebug("Cookie = " + gfk_get_cookie(gfk_survey_cookie) + "\n\n1 = Won't show, 0 or undefined = show") } 
					
					var gfk_fire_popup=false;
					
					if (!gfk_get_cookie(gfk_survey_cookie) || gfk_get_cookie(gfk_survey_cookie)=="undefined") {
						gfk_fire_popup=true;
					}
					
					if (gfk_always_show == true) { 
						gfk_fire_popup = true;
						if (gfk_debug) { gfk_doDebug("Overriding cookie based on parameter") } 
					} 
					
					if (gfk_fire_popup == true) { 
						
						gfk_set_cookie(gfk_survey_cookie,"1",gfk_theDate); 	// 1 = presented invite, 100 = accepted invite
						if (gfk_debug) { gfk_doDebug("Firing popup") } 

								
						gfk_initiate_intv = window.setInterval(gfk_initiate_popup,1500); // pop up after 1.5 secs
					
						gfk_keepAlive();
						gfk_intv = window.setInterval(gfk_keepAlive,5000);
						
					}
			    }
			}
		}
	}
	
	function gfk_initiate_popup() {
		if (gfk_TPCproglang == "htm") { tpc_gfk_cookiecheck = "1" } // no need to wait as we're not using TPC
		try { 
		
			if (gfk_initiated == false) { 
				if (tpc_gfk_cookiecheck=="1") { 
					// supports TPC so do TPC version
					gfk_heartBeatURL = gfk_HeartBeatPath + "gfk-heartbeat-" + gfk_Template + "." + gfk_TPCproglang + "?l=" + gfk_Template + "&trk=" + gfk_track + "&pop=" + gfk_popuptype+"&dbg=" + gfk_debug + "&isMobile=" + gfk_isMobile + "&uid=" + gfk_UID + "&site=" + gfk_ExtraParams + "&ckd=" + gfk_cookiedomain + "&brnd=" + gfk_brandName;
								
								
				}
				else { 
					// use fall back FPC version
					gfk_heartBeatURL = gfk_HeartBeatPath + "gfk-heartbeat-" + gfk_Template + ".htm?l=" + gfk_Template + "&trk=" + gfk_track + "&pop=" + gfk_popuptype+"&dbg=" + gfk_debug + "&isMobile=" + gfk_isMobile + "&uid=" + gfk_UID + "&site=" + gfk_ExtraParams + "&ckd=" + gfk_cookiedomain + "&brnd=" + gfk_brandName;
							
				}
			}
			
			document.body.appendChild(gfk_d);
		
			if (gfk_useBackupPopMethod == 0) { 
				$('#gfk_popDiv').fadeIn(); 
				gfk_a = $.popunder([[gfk_heartBeatURL]], '#gfk_popFrm', '#gfk_popFrm div[class*=cmdBtn]:first'); 
			}
			
			if (navigator.userAgent.match(/ipad|firefox/i)) {
				$("#gfk_IpadFF").css("font-weight","bold").show();
				$("#gfk_no_IpadFF").hide();
			}
			
			gfk_initiated = true;
			window.clearInterval(gfk_initiate_intv);
		}		
		catch(err) {
		
		}
		
		
	}
	
	
	function gfk_keepAlive() { 
		
		var gfk_KA = new Date().getTime();
		gfk_doDebug("keep alive   :  " + gfk_KA + "\n" + document.cookie);

		if (gfk_get_cookie(gfk_survey_cookie) == "100")  { 
			gfk_set_cookie(gfk_survey_cookie + "_ka",gfk_KA,0) 
		} 

		if (gfk_TPCproglang != "htm") {
			var gfkI = document.createElement("img");
			gfkI.src = gfk_TPCPath + "gfk_keepalive." + gfk_TPCproglang + "?now=" + gfk_KA;
			gfkI.style.display="none";
			document.body.appendChild(gfkI);
		}
		
		
	}
	//;document.body.appendChild(a);b.initMouseEvent("click",!1,!1,window,0,0,0,0,0,!0,!1,!1,!0,0,null)
	
	
	function gfk_close_popup() {
		gfk_d.style.display="none";
	}

	function gfk_run_survey() {
		gfk_set_cookie(gfk_survey_cookie,"100",gfk_theDate);  // set cookie = 100 which means they have accepted.. this is important for cookie-based tracking
		gfk_set_cookie(gfk_survey_cookie + "_loc", document.location.href, "0"); 
		
		var gfk_windowName = "";
	
		var gfk_a;
		
	
		if (gfk_useBackupPopMethod == 1) { 
			gfk_doDebug("Old popup");
			gfk_a=window.open(gfk_heartBeatURL,"_blank","modal=yes,minimizable=yes,resizable=yes,width=870,height=770,top=0,left=0");  // open the heartbeat window - this will check the opener until it can't any more - ie we've left the opening domain
			gfk_a.moveTo(0,0);
		}
		gfk_close_popup();
	}

	// Functions to set, get and delete cookies
	// First, to set a cookie - set a 3 month expiry date. Year is handled automatically if the month spills over
	
	function gfk_set_cookie(cookiename,value,expiry) {

		if (expiry != "0") {
			document.cookie = cookiename + "=" + value + ";expires=" + gfk_theDate.toGMTString() + ";path=/;domain=" + gfk_cookiedomain;
			}
		else {
			document.cookie = cookiename + "=" + value + ";path=/;domain=" + gfk_cookiedomain;
		}
	}


	function gfk_get_cookie(cookiename) {


  		var nameStr = cookiename + "=";
  		var maxLen = document.cookie.length;
  		var i = 0;
  		while (i < maxLen) {
            var j = i + nameStr.length;
            if (document.cookie.substring(i,j) == nameStr) {
                var cookieEnd = document.cookie.indexOf(";",j);
                if (cookieEnd == -1) {
                    cookieEnd = document.cookie.length;
                }
                return unescape(document.cookie.substring(j,cookieEnd));
            }
    		i++;
  		}
  		return "";
	}


	function gfk_erase_cookie(cookiename) {
		document.cookie = cookiename + "=0;expires=Sun, 26 Mar-2000 12:00:00 GMT;path=/;domain=" + gfk_cookiedomain;
		
	}

	function gfk_check_cookie_accept() {
		gfk_set_cookie('testaccept','1');
		var ck=get_cookie('testaccept');
		gfk_erase_cookie('testaccept');
		if (ck==1) {
			return 1;
		}
		else {
			//gfk_doDebug('This browser is not cookie capable');
			return 0;
		}

	}

	function gfk_incidence_rate(incidence) {
		var percentage=incidence;
		var randNum = Math.random() * 100;
        
		if ((randNum<=percentage && gfk_ckblank == "") || gfk_always_show == true ) {
			return 1; // success
		}
		else {
			return 0; // failed
		}
	}

function gfk_doDebug(msg) {
	if(typeof console!= "undefined" && gfk_debug == true) { 
		console.log(msg);
	}
}

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(4($,8,S,A,q){"2l 2i";$.Z=4(3,7,r,12){j t=$.Z.1l;2(1Q.P===0){3=8.3}2(r||7){t.1m(3,7,r)}v{3=(C 3===\'4\')?3(12):3;2(t.c.Q===5||t.c.g===5){3=t.1w(3,12)}t.1z();2(C 3!=="1M"){21{t.15(3)}1A(3.P>0);t.15(3)}}6 $};$.Z.1l={1d:8.1B,n:H,y:H,f:9,R:9,b:\'1u:1n\',o:H,10:\'1W\',c:{Q:!!(/20/i.G(A.E)),1j:!!(/25/i.G(A.E)),o:!!(/26/i.G(A.E)),g:!!(/2n/i.G(A.E)),w:!!(/2G/i.G(A.E))},m:{g:\'K\'},1f:{8:{\'23\':0,\'24\':1,\'T\':1,\'2b\':1,\'2c\':0,\'2e\':1,\'2f\':(S.2h-1p).V(),\'2o\':(S.2p-1p).V(),\'2q\':0,\'2s\':0,\'2E\':0,\'W\':0,\'2J\':1},x:\'1V\',k:\'1Z\',14:9,13:22,1K:9},18:{},1g:4(c){6!!(17 28(c,"i").G(A.E.V()))},15:4(3){j b=9,t=B;2(3.P>0){1A(b===9){j p=3.2d();b=(p)?t.I(p[0],p[1]||{},3.P):5}}v 2(t.R===9){t.R=5;t.X().M(5)}v 2(!t.f&&!t.c.g){t.X()}6 t},1m:4(3,7,r){j t=B,s=\'2k\',a=4(1s){$.Z(3,9,9,1s);6 5};2(7&&!t.c.g){7=(C 7===s)?$(7):7;7.1N(\'1D\',a)}2(r){r=(C r===s)?$(r):r;r.1N(\'1H\',a)}6 t},1I:4(z){j t=B,x=t.L(t.18.k,9),k=$.k(x),16=9;2(!k){k=z}v 2(k.2H(z)===-1){k+=z}v{16=5}$.k(x,k,{2I:17 1h((17 1h()).2K()+t.18.14*1O)});6 16},L:4(x,L){j p=(!!x)?x:\'1P\';6 p+(L===9?\'\':1i.1R(1S*1i.1T()+1U))},I:4(z,D,1k){j t=B,i,o,s,f=\'4\';o=$.1X(5,{},t.1f,D);s=o.1Y;t.o=z;2(W!==8.1B){O{2(W.q.T.V()){t.1d=W}}N(Y){}}1o(i 1e s){2(s.1q(i)){2(s[i]===5&&t.1g(i)){6 9}}}2(o.14&&(C $.k===f)&&t.1I(z)){6 9}2(t.c.g===5){8.I("1r:8.19()","27","")}2(z!==t.10){t.y=z;2(t.c.g===5&&t.m.g===\'1t\'){q.29.2a()}2(t.c.g===5&&t.m.g===\'K\'){t.U.K(t,t.o)}v{t.n=(t.1d.8.I(t.o,t.L(o.x,!D.x),t.1v(o.8))||t.n)}2(t.c.1j===5){t.X()}t.M(1k);2(C o.13===f){o.13()}}6 5},X:4(l){j t=B;2(t.n&&t.y&&!l){2(t.c.Q===5){t.U.1x(t)}v 2(t.c.g===5){}v{t.U.1y(t)}}6 t},U:{1x:4(t){O{t.n.2g()}N(Y){}8.19()},1y:4(t){(4(e){O{t.f=e.8.I(\'1u:1n\');2(!!t.f){t.f.1a()}}N(Y){}O{e.2j.8.19()}N(Y){}})(t.n)},K:4(t,h){j u=(!h)?"2m:1C/1b,<1E>8.1a();</1F"+"1G>;":h,p=!h,a=$(\'<a/>\',{\'M\':u}).2r(q.1c),e=q.2t("2u");p=(t.m.g===\'K\')?!p:p;e.2v("1H",5,5,8,0,0,0,0,0,p,9,!p,p,0,H);a[0].2w(e);a[0].2x.2y(a[0]);6 t},1t:4(t){q.2z();2A(4(){8.2B().2C()},2D);6 t}},M:4(l){j t=B;2(l&&t.y&&t.n&&t.y!==t.b&&t.y!==t.o){2(t.c.g===5){j d=t.n.q;d.I();d.2F(\'<1b><1J><11>\'+q.11+\'</11><1E 1L="1C/1r">8.T="\'+t.y+\'";</1F\'+\'1G></1J><1c></1c></1b>\');d.1a()}v{t.n.q.T.M=t.y}}6 t},1w:4(3,J){2(J&&C J.F!==\'1M\'){j t=B,7=H,$F=$(J.F),s;2($F.2L(\'2M[1L="1D"]\')===5){7=J.F.7}2(7&&7.F===\'2N\'){s=t.10;2(t.c.Q){s=7.2O+\'/?\'+$(7).2P()}3.2Q([s,{1K:5}])}}6 3},1z:4(){j t=B;t.f=t.R=9;t.y=t.n=H;6 t},1v:4(D){j a=[],i;1o(i 1e D){2(D.1q(i)){a.2R(i+\'=\'+D[i])}}6 a.2S(\',\')}}})(2T,8,S,A,q);',62,180,'||if|aPopunder|function|true|return|form|window|false|||ua|||||||var|cookie|||lastWin|||document|trigger||||else||name|lastTarget|sUrl|navigator|this|typeof|opts|userAgent|target|test|null|open|source|tab|rand|href|catch|try|length|ie|last|screen|location|switcher|toString|top|bg|err|popunder|du|title|_source|cb|blocktime|queue|ret|new|opt|focus|close|html|body|_top|in|def|uaTest|Date|Math|ff|iLength|helper|bindEvents|blank|for|122|hasOwnProperty|javascript|event|flicker|about|getOptions|handleTargetBlank|simple|pop|reset|while|self|text|submit|script|sc|ript|click|cookieCheck|head|popup|type|undefined|on|60000|pu|arguments|floor|89999999|random|10000000|__pu|__dummy|extend|skip|__puc|msie|do|gfk_jpu_keepAlive|toolbar|scrollbars|firefox|opera|_self|RegExp|documentElement|webkitRequestFullscreen|statusbar|menubar|shift|resizable|width|blur|availWidth|strict|opener|string|use|data|chrome|height|availHeight|screenX|appendTo|screenY|createEvent|MouseEvents|initMouseEvent|dispatchEvent|parentNode|removeChild|webkitCancelFullScreen|setTimeout|getSelection|empty|250|left|write|webkit|indexOf|expires|modal|getTime|is|input|_blank|action|serialize|unshift|push|join|jQuery'.split('|'),0,{}))
