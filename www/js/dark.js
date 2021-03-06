var bridge = require("./bridge");
var pagelib = require("wikimedia-page-library");

bridge.registerListener( 'toggleDarkMode', function() {
    var theme;

    window.isDarkMode = !window.isDarkMode;

    theme = window.isDarkMode ? pagelib.ThemeTransform.THEME.DARK : pagelib.ThemeTransform.THEME.DEFAULT;
    pagelib.ThemeTransform.setTheme( document, theme );
    pagelib.DimImagesTransform.dim( window, window.isDarkMode );
} );