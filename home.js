let search=document.getElementById("btnsearch");

let serch=document.querySelector('.icos')

serch.onclick = () => {
    search.classList.toggle('active');

}

let boc=document.getElementsByClassName('bb');
console.log(boc);

boc.onclick = () =>{
    window.print();
    console.log().window.print();
}

