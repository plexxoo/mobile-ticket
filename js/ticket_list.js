
var ticket_list = {
    
    binded: false,
    
    // Very important, this event is INSIDE a jQuery environment
    // so don't use 'this', use ticket_list instead.
    onPageCreated: function() {
        
        var tickets = storage.tickets.getAll();
        $.each(tickets, function(i, row){
            var tr = $("<tr>");
            tr.append("<td>"+row.uid+"</td>");
            tr.append("<td>"+row.date+"</td>");
            tr.append("<td>"+row.time+"</td>");
            tr.append("<td>"+row["slider-step"]+"</td>");
            tr.append("<td>"+row.actions+"</td>");
            tr.appendTo("#ticket-list tbody");
        });
        
        $("#ticket-list").table( "rebuild" );
        
        if(ticket_list.binded == false){
            ticket_list.bindButtons();
            ticket_list.binded = true;
            
        }
    },
    bindButtons: function(){
        $(document).on('tap', "#delete_data", this.clearData );
    },
    clearData: function()
    {
        $("#ticket-list tbody").empty();
        $("#ticket-list").table( "rebuild" );
        storage.clear();
    }
    
};


