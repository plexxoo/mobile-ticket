

var new_ticket = {
    
    is_binded: false,
    
    // Very important, this event is INSIDE a jQuery environment
    // so don't use 'this', use new_ticket instead.
    onPageCreated: function() {

        if(new_ticket.is_binded == false){
            new_ticket.bindEvents();
            new_ticket.is_binded = true;
        }
        
    },
    
    bindEvents: function(){
        
        $(document).on('tap', "#new_ticket_btn", function(event){
            event.preventDefault();
            var json_object = $("#new_ticket_form").serializeObject();
            $.mobile.loading( 'show', {
                  text: "Guardando...",
                  textVisible: true,
                  textonly: false
                  //html: html
                  });
            storage.tickets.add(json_object);
            $.mobile.loading('hide');
            $.mobile.loading( 'show', {
                  text: "Guardado",
                  textVisible: true,
                  textonly: false
                  //html: html
                  });
                
            window.setTimeout(function(){
                $.mobile.loading('hide');
                history.back();    
            }, 500);            

        });
    },
    
    
    

};