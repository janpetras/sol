'use strict';

angular.module('mean.system', ['mean.controllers.login','mean-factory-interceptor'])
	.run(function($rootScope) {
    	$rootScope.lefty = function () {
	
	var body = document.body,
		mask = document.createElement('div'),
		activeNav
	;
	mask.className = 'mask';

	/* slide menu left */
	
		$('body').addClass('sml-open');
		document.body.appendChild(mask);
		activeNav = 'sml-open';
	

};
});

		/* hide active menu if mask is clicked 
	mask.addEventListener( 'click', function(){
		classie.remove( body, activeNav );
		activeNav = '';
		document.body.removeChild(mask);
	} );

	/* hide active menu if close menu button is clicked 
	[].slice.call(document.querySelectorAll('.close-menu')).forEach(function(el,i){
		el.addEventListener( 'click', function(){
			classie.remove( body, activeNav );
			activeNav = '';
			document.body.removeChild(mask);
		} );
	}); */