MBC.App.GalleryWidget = {};
MBC.App.GalleryWidget.activeItem = null;


MBC.App.GalleryWidget.init = function() 
{
	MBC.App.GalleryWidget.registerListeners();
}

MBC.App.GalleryWidget.registerListeners = function()
{
	var item = $('.gallery-widget').find('.gallery-item');

	item.click(function()
	{
		var item = $(this);
		var id = item.data('id');
	
		$('#galleryModal').modal('show');
	});
}