"use strict"

var themeOptionArr = {
			typography: '',
			version: '',
			layout: '',
			primary: '',
			headerBg: '',
			navheaderBg: '',
			sidebarBg: '',
			sidebarStyle: '',
			sidebarPosition: '',
			headerPosition: '',
			containerLayout: '',
			//direction: '',
		};
		
		



(function($) {
	
	"use strict"
	
	//var direction =  getUrlParams('dir');
	var theme =  getUrlParams('theme');
	
	/* Dz Theme Demo Settings  */
	
	var dlabThemeSet0 = { /* Default Theme */
		typography: "poppins",
		version: "light",
		layout: "vertical",
		primary: "color_1",
		headerBg: "color_1",
		navheaderBg: "color_1",
		sidebarBg: "color_1",
		sidebarStyle: "full",
		sidebarPosition: "fixed",
		headerPosition: "fixed",
		containerLayout: "full",
	};
	
	// var dlabThemeSet1 = {
	// 	typography: "poppins",
	// 	version: "light",
	// 	layout: "vertical",
	// 	primary: "color_3",
	// 	headerBg: "color_1",
	// 	navheaderBg: "color_3",
	// 	sidebarBg: "color_3",
	// 	sidebarStyle: "full",
	// 	sidebarPosition: "fixed",
	// 	headerPosition: "fixed",
	// 	containerLayout: "full",
	// };
	
	// var dlabThemeSet2 = {
	// 	typography: "poppins",
	// 	version: "light",
	// 	layout: "vertical",
	// 	primary: "color_2",
	// 	headerBg: "color_1",
	// 	navheaderBg: "color_2",
	// 	sidebarBg: "color_2",
	// 	sidebarStyle: "mini",
	// 	sidebarPosition: "fixed",
	// 	headerPosition: "fixed",
	// 	containerLayout: "full",
	// };
	
	
	var dlabThemeSet3 = {
		typography: "poppins",
		version: "light",
		layout: "vertical",
		primary: "color_10",
		headerBg: "color_10",
		navheaderBg: "color_1",
		sidebarBg: "color_1",
		sidebarStyle: "compact",
		sidebarPosition: "fixed",
		headerPosition: "fixed",
		containerLayout: "full",
	};
	
	var dlabThemeSet4 = {
		typography: "poppins",
		version: "light",
		layout: "horizontal",
		primary: "color_15",
		headerBg: "color_1",
		navheaderBg: "color_1",
		sidebarBg: "color_15",
		sidebarStyle: "full",
		sidebarPosition: "fixed",
		headerPosition: "fixed",
		containerLayout: "full",
	};
	
	var dlabThemeSet5 = {
		typography: "poppins",
		version: "light",
		layout: "horizontal",
		primary: "color_9",
		headerBg: "color_9",
		navheaderBg: "color_9",
		sidebarBg: "color_1",
		sidebarStyle: "modern",
		sidebarPosition: "fixed",
		headerPosition: "fixed",
		containerLayout: "full",
	};
	var dlabThemeSet6 = {
		typography: "poppins",
		version: "light",
		layout: "vertical",
		primary: "color_10",
		headerBg: "color_1",
		navheaderBg: "color_10",
		sidebarBg: "color_1",
		sidebarStyle: "modern",
		sidebarPosition: "fixed",
		headerPosition: "fixed",
		containerLayout: "full",
	};
	
		
	function themeChange(theme){
		var themeSettings = {};
		themeSettings = eval('dlabThemeSet'+theme);
		dlabSettingsOptions = themeSettings; /* For Screen Resize */
		new dlabSettings(themeSettings);
		
		setThemeInCookie(themeSettings);
	}
	
	function setThemeInCookie(themeSettings)
	{
		//console.log(themeSettings);
		jQuery.each(themeSettings, function(optionKey, optionValue) {
			setCookie(optionKey,optionValue);
		});
	}
	
	function setThemeLogo() {
		var logo = getCookie('logo_src');
		
		var logo2 = getCookie('logo_src2');
		
		if(logo != ''){
			jQuery('.nav-header .logo-abbr').attr("src", logo);
		}
		
		if(logo2 != ''){
			jQuery('.nav-header .logo-compact, .nav-header .brand-title').attr("src", logo2);
		}
	}
	
	function setThemeOptionOnPage()
	{
		if(getCookie('version') != '')
		{
			jQuery.each(themeOptionArr, function(optionKey, optionValue) {
				var optionData = getCookie(optionKey);
				themeOptionArr[optionKey] = (optionData != '')?optionData:dlabSettingsOptions[optionKey];
			});
			console.log(themeOptionArr);
			dlabSettingsOptions = themeOptionArr;
			new dlabSettings(dlabSettingsOptions);
			
			setThemeLogo();
		}
	}
	
	jQuery(document).on('click', '.dlab_theme_demo', function(){
		var demoTheme = jQuery(this).data('theme');
		themeChange(demoTheme, 'ltr');
	});


	jQuery(document).on('click', '.dlab_theme_demo_rtl', function(){
		var demoTheme = jQuery(this).data('theme');
		themeChange(demoTheme, 'rtl');
	});
	
	
	jQuery(window).on('load', function(){
		//direction = (direction != undefined)?direction:'ltr';
		if(theme != undefined){
			themeChange(theme);
		}else if(getCookie('version') == ''){	
				themeChange(0);
			
		}
		
		/* Set Theme On Page From Cookie */
		setThemeOptionOnPage();
	});
	

})
(jQuery);