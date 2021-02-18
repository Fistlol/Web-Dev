var count = 0;
$(".container__content__form__block__button").click(function () {
    var html = "";

    var input = document.getElementById('input').value;
    html += "<li id='li__" + count + "'>" 
        + "<div class='li__item'><input class='checkbox' type='checkbox' onclick='done(" + count + ")'>" + input
        + "</div><button class='deleteBtn' onclick='rowDelete(" + count + ")'><svg class='trash' enable-background='new 0 0 512 512' height='26' viewBox='0 0 512 512' width='512'><g><path d='m424 64h-88v-16c0-26.51-21.49-48-48-48h-64c-26.51 0-48 21.49-48 48v16h-88c-22.091 0-40 17.909-40 40v32c0 8.837 7.163 16 16 16h384c8.837 0 16-7.163 16-16v-32c0-22.091-17.909-40-40-40zm-216-16c0-8.82 7.18-16 16-16h64c8.82 0 16 7.18 16 16v16h-96z'/><path d='m78.364 184c-2.855 0-5.13 2.386-4.994 5.238l13.2 277.042c1.22 25.64 22.28 45.72 47.94 45.72h242.98c25.66 0 46.72-20.08 47.94-45.72l13.2-277.042c.136-2.852-2.139-5.238-4.994-5.238zm241.636 40c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16z'/></g></svg></button>" 
        + "</li>"
    
    $(".container__content__form__list").append(html);
    document.getElementById('input').value = "";
    count++;
})

function rowDelete(index) {
    console.log(this)
    document.getElementById("li__" + index).style.display = "none";
}

function done(index) {
    var temp = document.getElementById("li__" + index)
    console.log(temp.classList.contains("cross"))
    if (temp.classList.contains("cross") === false) {
        temp.classList.add("cross")
    } else {
        temp.classList.remove("cross")
    }
}









// const input = document.querySelector('.container__content__form__block__input')
// const btn = document.querySelector('.container__content__form__block__button')
// const list = document.querySelector('.container__content__form__list')

// btn.addEventListener('click', (e) => {
//     // list.innerHTML += `<li>${input.value}</li>`
//     if (input.value === '') return
//     createDeleteElements(input.value)
//     input.value = ''
// })

// function createDeleteElements(value) {
//     const li = document.createElement('li')
//     const box = document.createElement('box')
//     box.className = 'container__content__form__list__box'
//     li.className = 'container__content__form__list__li'
//     li.textContent = value
//     list.appendChild(box)
//     list.appendChild(li)
// }