$(function(){
    $("#newBoard").on('click', initBoard);
    $("#reset").on("click", reset);
    var contain = $("#container")
    create(16*16);
    function create(x){
        var contain = $("#container")
        $(contain).empty();
        var num =x;
        for(var i=0;i<num; i++){
            contain.append("<div class='b' id='space"+i+"'> </div>");
        }
        var d = contain.width()/(Math.sqrt(num));
        $(".b").width(d);
        $(".b").height(d);
        $(".b").on("mouseover",(th)=>{
            let cntr = 0
            var timeD = 100;
            let rCol = Math.round(Math.random()*100)
            let rCol2 = Math.round(Math.random()*100)
            let rCol3 = Math.round(Math.random()*100)
            let b = $("#"+th.currentTarget.id);
            var timey = window.setInterval(()=>{
                timeD = 500;
                cntr++;
                rCol-=10;rCol2-=10;rCol3-=10;
                b.css('background-color', 'rgb('+rCol+','+rCol2+','+rCol3+')');
                //b.attr('style', $(".b").attr('style') + 'background-color:rgb('+rCol+','+rCol2+','+rCol3+');');
                if(cntr>15){clearInterval(timey);}
            },timeD);
        });
    }

    function initBoard(){
        var rows = -1;
        console.log(rows)
        while (rows<1 | rows>64){
            rows = prompt("Enter Num Rows Brow: ")
        }
        create(rows*rows)
    }
    function reset(){
        var cont = $("#container")
        var shakey = 0;
        var s = 0;
        var timey = window.setInterval(()=>{
        let elems = $(".b")
        s++;
        shakey=(s%2)*100 + "px";
        $(cont).css("margin-left", shakey);
        if(s>10){
            create(16*16);
            clearInterval(timey)
            $(cont).css("margin-left", "auto");
        }
    },500);
    }
});
