

var storage = {
    init: function(){
        var string = localStorage.getItem("tickets");
        if (string == null || string === undefined) {
            localStorage.setItem("tickets", "[]");    
        }
    },
    clear: function (){
        localStorage.clear();
        this.init();
    }
}

storage.tickets = {
    add: function(json){
        var tickets = this.getAll();
        
        var unique_id = guid();
        json.uid = unique_id;
        
        tickets.push(json);
        var tickets_str = JSON.stringify(tickets);
        localStorage.setItem("tickets", tickets_str);
        return unique_id;
    },
    
    getAll: function(){
        var string = localStorage.getItem("tickets");
        return $.parseJSON(string);
    }
}


