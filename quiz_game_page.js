function send(){
    Number_1=document.getElementById("Number_1").value;
    Number_2=document.getElementById("Number_2").value;
    actual_answer = parseInt(Number_1) * parseInt(Number_2);

    question_word = "<h4>" + Number_1 + "X" + Number_2 + "</h4>";
     input_box = "<br>Answer : <input type='text' id='input_check_box'>";
      check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
       row = question_word + input_box + check_button ;
        document.getElementById("output").innerHTML = row;
         document.getElementById("Number_1").value = "";
         document.getElementById("Number_2").value = "";
}