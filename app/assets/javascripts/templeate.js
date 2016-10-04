/**
 * Created by chandler on 2016. 10. 4..
 */
$(document).ready(function(){
    /* This code is executed after the DOM has been completely loaded */

    $('nav a,footer a.up').click(function(e){

        // If a link has been clicked, scroll the page to the link's hash target:

        $.scrollTo( this.hash || 0, 1500);
        e.preventDefault();
    });

});