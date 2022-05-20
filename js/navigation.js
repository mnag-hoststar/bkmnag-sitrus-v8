// -------------------------------------
// Sitrus: JS > Navigation
// -------------------------------------

$(document).ready(function() {
	// Toggles class open to display/hide the whole navigation
	$( ".extendednavigation__navigation-toggle" ).click(function() {
		$( ".widget__extendednavigation" ).toggleClass("open");
	});

	// Hides other submenus when a main menu point with a submenu is clicked.
	$(".widget__extendednavigation > .navigation-body > ul > li").click(function() {
		$(this).siblings(".extendednavigation > .navigation-body > ul > li.folder").removeClass("folder-open");
	});
});