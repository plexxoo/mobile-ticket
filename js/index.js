
var app = {
    // Application Constructor
    initialize: function() {
        storage.init();
        this.bindEvents();
    },
    bindEvents: function() {
        var that = this;
        $(document).ready(function() {
            
            if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
              document.addEventListener("deviceready", onDeviceReady, false);
            } else {
              that.onDeviceReady(); //this is the browser
            }
        });
        
        $(document).on('tap', "#sync_btn", function(event){
            event.preventDefault();
            show_alert("Funcionalidad pendiente", null, "Informacion", "ok");
            })
        $(document).on('pagecreate', '#list_page', ticket_list.onPageCreated);
        $(document).on('pagecreate', '#new_ticket_page', new_ticket.onPageCreated);
    },
    onDeviceReady: function() {
        // do something awesome!
    }
   
  
};

