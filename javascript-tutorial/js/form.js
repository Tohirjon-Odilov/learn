// * \d [0-9] 0 dan 9 gacha bo'lgan bitta raqam. 
// * \D [^0-9] Raqamdan boshqa har qanday belgi. 
// * \s Bo'sh joy. [A-Z] Faqat bosh lotin harfi. 
// * [A-Za-z] Har qanday holatda faqat lotin harfi. 
// * [A-Yaa-yaYyo] Har holda faqat ruscha harf. 
// * [A-Za-zA-Yaa-yaYoyo] Rus va lotin alifbosining istalgan harfi. 
// * [0-9]{3} Uchta raqam. 
// * [A-Za-z]{6,} Kamida oltita lotin harfi. 
// * [0-9]{,3} uchta raqamdan oshmasligi kerak. 
// * [0-9]{5,10} Beshdan oʻngacha raqam. 
// * ^[a-zA-Z]+$ Lotin tilidagi har qanday soʻz. 
// * ^[A-Yaa-yaYoyo\s]+$ Rus tilidagi istalgan so'z, shu jumladan bo'shliqlar. 
// * ^[ 0-9]+$ Har qanday raqam. 
// * [0-9]{6} pochta indeksi. 
// * \d+(,\d{2})? 1.34 formatidagi raqam (vergul bilan ajratilgan). 
// * \d+(\.\d{2})? 2.10 formatidagi raqam (nuqta ajratuvchi). 
// * \d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3} IP manzil

// document.forms[0].addEventListener("submit", function(event) {
//     event.preventDefault();
//     let count = document.forms[0][0].value;
//     let color = document.forms[0][1].value;
//     let cubes = document.querySelector('.cubes');
//     console.log(count)
//     for (let i = 0; i < count; i++) {
//         let div = document.createElement('div');
//         div.style.width = '100px'
//         div.style.height = '100px'
//         div.style.margin = '10px 20px'
//         div.style.background = `${color}`
//         cubes.appendChild(div);
//     }
// })

document.forms[0].addEventListener("click", (e) => {
    e.preventDefault();
    let count = document.forms[0][0].value;
    let color = document.forms[0][1].value;
    let cubes = document.querySelector(".cubes");

    for (let i = 0; i < count; i++) {
        console.log(i);
        let div = document.createElement("div");
        div.setAttribute('class', 'box')
        div.style.background = `${color}`
        cubes.appendChild(div)

    }

})