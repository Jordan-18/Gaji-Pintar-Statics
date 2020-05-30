const inpgaji = document.getElementById("gaji")
const inpop1 = document.getElementById("op1")
const inpjumlah = document.getElementById
("jumlah")
const inpg1 = document.getElementById("g1")
const inpp1 = document.getElementById("p1")
const inpin = document.getElementById("in")
const inpbaru = document.getElementById("baru")  



inpjumlah.onclick = function(){
    const key = inpgaji.value;
    const value = inpop1.value;

    console.log(key);
    console.log(value);

    if (key && value){
        localStorage.setItem(key,value);
        // location.reload();
    }

    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);



        inpg1.innerHTML = formatRupiah(this+(key - (key * (value /100))),'Rp.');
        inpp1.innerHTML = (value)+'%';
        inpin.innerHTML = formatRupiah(this+(key * (value /100)),'Rp.'); 
    }}

inpbaru.onclick = function(){
    localStorage.clear();
    location.reload();
    return confirm('Yakin ?');
}