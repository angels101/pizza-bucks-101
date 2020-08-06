$(document).ready(function(){
    $("#button-pressed").click(function(){
        $(".nd").toggle("3000")
    });
});
function Results (type,size,crust,toppings) {
    this.type = type;
    this.size= size;
    this.crust= crust;
    this.toppings=toppings;
};
Results.prototype.order = function() {
    return "You have made an order of " + this.type + " pizza  with " + this.toppings + " as toppings and " + this.crust + " for crust ."
};
