function focusInputs(){
    if($('.input_work').length > 0){
        var inputs = $('.input_work');
        for(var i = 0; i < inputs.length; i++){
            if($(inputs[i]).val().length > 0){
                $(inputs[i]).next().addClass('open');
            }
        }
        $('.input_work').on('focus', function (){
            var input = $(this);
            var label = input.next();
            label.addClass('open');
            input.on("blur", function(){

                if(input.val().length > 0){
                    var str = input.val();
                    if(str[input.val().length-1] === " "){
                        var arr = str.split('');
                        arr[input.val().length-1] = "";
                        var result = arr.join('');
                        input.val(result);
                    }
                }

                if(input.val().length == 0){
                    label.removeClass('open');
                    $(this).off("blur");
                }

            });
        });
    }
}
var inputsEvents = "change keyup input click";


function validTextNumbers() {
    //never space
    $(document).on(inputsEvents, "input[data-space='never']", function () {
        if (this.value.match(/[ ]/g)) {
            this.value = this.value.replace(/[ ]/g, "");
        }
    });

    $(document).on(inputsEvents, "input[data-space='no']", function () {
        var str = $(this).val();
        var arr = str.split('');
        if(str[0] === " "){
            arr[0] = "";
            var result = arr.join('');
            $(this).val(result);
        }
        for (var i = 0; i < arr.length-1; i++){
            if((arr[i] === " ") && (arr[i+1] === " ")){
                arr[i+1] = "";
                var result2 = arr.join('');
                $(this).val(result2);
            }
        }
    });
}


$(document).ready(function () {
    validTextNumbers();
    focusInputs();

});
