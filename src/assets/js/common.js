document.onload = function() {
	var activeModal;
	var overlay = document.querySelector('#overlay');
	document.querySelector('#menu-button').click(function () {
		overlay.classList.add('active');
		activeModal = document.querySelector('#menu');
		activeModal.classList.add('active');
	});
	document.querySelector('#filters-button').click(function () {
		overlay.classList.add('active');
		activeModal = document.querySelector('#filters');
		activeModal.classList.add('active');
	});
	overlay.click(function () {
		overlay.classList.remove('active');
		activeModal.classList.remove('active');
	});
};