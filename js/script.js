/* global $ */
function q1Score(q1Result) {
    if(q1Result==="Yes"){
        return 1;
    }else if(q1Result==="No"){
        return 2;
    }else {
     return 3;
}

}
function q2Score(q2Result){
    if(q2Result==="Humanity"){
        return 2;
    }else {
        return 3;
    }
    
}
function q3Score(q3Result){
    if(q3Result==="Religious to the end"){
        return 3;
    }else {
        return 4;
   
}
function endShow(name, techPlacement){
    return "Congrats" + " " + name + "! Your Castlevania character is" + " " + techPlacement + "." ;
}
function characterName(totalScore){
    if(totalScore<4){
        return "Gabriel";
    } else{
        return "Alucard";
    }
}
$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        
        
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore=0;
        
        
        totalScore=totalScore+q1Score(q1Result);
        totalScore=totalScore+q2Score(q2Result);
        totalScore=totalScore+q3Score(q3Result);
        techPlacement=characterName(totalScore);
        var yourCharacter=endShow(name, techPlacement);
        
        $(".result").html(yourCharacter);
        
    });

});
