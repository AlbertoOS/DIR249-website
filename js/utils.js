var $affectedElements = $("p, h5, h4, h3, h2, .panel-title, .panel-body, .list-group, .form-group, .form-control, form>button, .table, .resizable"); // Can be extended, ex. $("div, p, span.someClass")

var $affectedImages = $("img");

// Storing the original size in a data attribute so size can be reset
$affectedElements.each( function(){
  var $this = $(this);
  $this.data("orig-size", $this.css("font-size") );
});
$affectedImages.each( function(){
  var $this = $(this);
  $this.data("orig-size-height", $this.css("height") );
  $this.data("orig-size-width", $this.css("width") );
});

$("#btn-increase").click(function(){
  changeFontSize(1);
  changeImageSize(5);
})

$("#btn-decrease").click(function(){
  changeFontSize(-1);
  changeImageSize(-5);
})

$("#btn-orig").click(function(){
  $affectedElements.each( function(){
        var $this = $(this);
        $this.css( "font-size" , $this.data("orig-size") );
   });
  $affectedImages.each( function(){
        var $this = $(this);
        $this.css( "height" , $this.data("orig-size-height") );
        $this.css( "width" , $this.data("orig-size-width") );
   });
})

function changeFontSize(direction){
    $affectedElements.each( function(){
        var $this = $(this);
        $this.css( "font-size" , parseInt($this.css("font-size"))+direction );
    });
}

function changeImageSize(direction){
    $affectedImages.each( function(){
        var $this = $(this);
        $this.css( "height" , parseInt($this.css("height"))+direction );
        $this.css( "width" , parseInt($this.css("width"))+direction );
    });
}