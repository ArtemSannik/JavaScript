var buttonForm = document.querySelector('#comments-form button');
var countComments = 0;
var idComment = 0;

buttonForm.onclick = function(){
    idComment++;
    // 
var form = document.querySelector("#comments-form");
// чтобы вывести мы обращаемся к переменной потом через точку к имени
if(form.name.value.length < 4) {
    document.querySelector("#error").innerHTML="Длина Имени не менее 4 символов";
    // если в форме что то не правильно мы ничего не возвращаем
    return false;

} else if(form.comment.value.length < 10){
    document.querySelector("#error").innerHTML="Длина Сообщения не менее 10 символов";
    // если в форме что то не правильно мы ничего не возвращаем
    return false;
    }

    document.querySelector('#error').innerHTML="";
    // установим новое значения для подсчета коментариев
    //проверяем равна ли наша переменная нулю 
    if(countComments == 0)
        // если нет то мы очищаем 0 
        document.querySelector("#comments").innerHTML="";

        // увеличиваем нашу переменную
        countComments++;
        // и устанавливаем новое значение 
        document.querySelector(".count-comm").innerHTML = countComments;
    
//  создаем сами комментарии и указываем кто создал 
    var newComment = "<div class='comment' id='block-" + idComment + "'>" + 
    //создаем кнопку с удалением комментария и делаем ей айди 
    "<span class='delete' onclick='delComm(" + idComment + ")'>&times;</span>" +
    "<p class='name'>" +" Автор: "+ form.name.value +  "</p>" + 
    "<p class='mess'>" +" Комментарий: " + form.comment.value +  "</p>" + 
    "</div>";

    // позволяет вставить большой кусок кода в HTML
    document.querySelector('#comments')
    .insertAdjacentHTML('afterbegin',newComment);

    //очистка формы
    form.comment.value="";

};
// создаем функцию которая принимает параметр id
function delComm(id){
    // далее мы находим нужный блок с айди
    document.querySelector("#block-" + id).remove();
// после удаления уменьшаем переменную
    countComments--;
    document.querySelector(".count-comm").innerHTML = countComments;
    if(countComments == 0){
        document.querySelector("#comments").innerHTML="Пока комментариев нет";    }
}