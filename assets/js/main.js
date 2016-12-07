var MBC = {};
MBC.App = {};
MBC.App.window = $(window);



$(document).ready(function() 
{
    MBC.App.init();
});

MBC.App.init = function()
{
	MBC.App.GalleryWidget.init();
	MBC.App.checkUserData();
}

MBC.App.checkUserData = function()
{
	if (!Cookies.get('mbc_privacy'))
    {
        $('.cookie-container').addClass('open');

        $('.cookie-container .closeButton').click(function() {
            var date = Math.round(new Date().getTime() / 1000);
            Cookies.set('mbc_privacy', date, { path: '/' });

            $('.cookie-container').removeClass('open');
        });
    }	
}