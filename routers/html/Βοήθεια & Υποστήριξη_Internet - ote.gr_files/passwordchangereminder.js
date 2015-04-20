jQuery(function(){
	
	jQuery('.password-change-reminder a.close-button').click(function(event){
		togglePasswordReminderBar(false);
	});
	
	togglePasswordReminderBar(true);
});

function togglePasswordReminderBar(state) {
	var topArea = jQuery('div.top-area'),
		logo = jQuery('h1.logo'),
		header = jQuery('#header'),
		main = jQuery('#main'),
		staging = jQuery('.portlet-staging-bar .staging-bar'),
		coockiesArea = jQuery('div#p_p_id_passwordchangereminder_WAR_Otecorporateportlet_'),
		sign = (state)?'+':'-',
		latency = 1000,
		offset = 68;
	
	if ((coockiesArea) && (coockiesArea.length > 0))
	{
		topArea.animate({'top':sign+'='+offset},latency);
		logo.animate({'top':sign+'='+offset},latency);
		header.animate({'top':sign+'='+offset},latency);
		main.animate({'padding-top':sign+'='+offset},latency);
		coockiesArea.animate({'top':sign+'='+offset},latency);
		if(staging.length)
			staging.animate({'padding-top':sign+'='+offset},latency);
	}
}