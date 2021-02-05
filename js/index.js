document.addEventListener( "DOMContentLoaded", function(){
    document.querySelectorAll( ".card" ).forEach( function( card ){
        card.addEventListener( "click", function(){
            if( document.querySelector( ".selected" ) ){
                document.querySelector( ".selected" ).classList.remove( "selected" );
            }
            this.classList.add( "selected" );
        });
    });
});