# HW18-14_JS_Array
Home Work_week18 (14)

### Вопросы 💎

1. Что называется массивом?
//это любой упорядоченный набор или коллекция элементов. Задача массивов - собрать эти элементы под одним именем.
2. С какого порядкового номера начинаются массивы?
//с 0;
3. Сколько значений может иметь массив?
//сколько угодно
4. Как можно получить значение текстового поля из данной формы? (Форма одна)
    
    ```jsx
    <form action="start.php" method="post" name="fld">
    	<input type="text" name="field" value="Text field">
    	<input type="submit" value="Старт" name="btn">
    </form>
    
    ```
//Я бы сделала так:
Нужно создать место в html коде, куда будет выводится текст далее.
Далее мы присваиваем переменные для полученного текста и нового нового тега:
<form action="start.php" method="post" name="fld">
    	<input type="text" name="field" value="Text field">
    	<input type="submit" value="Старт" name="btn">
        <p id="textNew"></p>
    </form>
    <script>
let text = document.getElementByName('fld');
let textNew = document.getElementById('textNew');
//И создать функцию, которая выведет текст в созданное поле:
function getText(){
             document.getElementById('textNew').textContent = document.getElementByName('fld').value;}
</script>
5. Какой результат работы данного скрипта?
    
    ```jsx
    let mas = new Array(2);
    mas[3] = 5;
    console.log(mas[3]);
    ```
//5
6. Какой результат работы данного скрипта?
    
    ```jsx
    let mas = new Array(2);
    mas[3] = 5;
    console.log(mas3);
    ```
    //Если в данном вопросе нет ошибки - то ответом будет ошибка, т.к. "mas3" - нигде не фигурировало до вывода в консоль...
    Если же в консоль надо было вывести "mas" (т.е. console.log(mas)), то ответом будет [,,,5]
7. Что делает строка let mas = new Array()?
//Это также вариант создания массива, более длинный, который используется редко. В нем есть особенность: если в () вставить не строку, а число - оно будет показывать не число, а длину массива. (как в примере выше)
8. Может ли массив состоять из элементов разных типов?
//Да
9. Укажите длину массива после исполнения следующего кода:
    
    ```jsx
    let a = new Array(2);
    a[1] = null;
    ```
//2
10. Что выведет консоль?
    
    ```jsx
    const students = [“Lena", “Olya", "Ylia", "Roma" ,  "Vova" ];
    console.log(students[3]);
    ```
//Roma
11. Что выведет третья строка?
1. const fruits = [ "Груша", "Яблоко", "Лимон", "Ананас",];

2. console.log(fruits.shift()); 

3. console.log(fruits);
//["Яблоко", "Лимон", "Ананас"]