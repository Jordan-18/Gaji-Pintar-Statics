const inpgaji = document.getElementById("gaji")
const inpop1 = document.getElementById("op1")
const inpop2 = document.getElementById("op2")
const inpjumlah = document.getElementById
("jumlah")
const inpg1 = document.getElementById("g1")
const inpin = document.getElementById("in")
const inpon = document.getElementById("on")
const inpbaru = document.getElementById("baru") 
const inpbarang = document.getElementById("barang") 
const inpad = document.getElementById("ad")
const inped = document.getElementById("ed")
const inpod = document.getElementById("od")
const inpmulai = document.getElementById("mulai")      


inpjumlah.onclick = function(){
    const key = inpgaji.value;
    const value = inpop1.value;
    const tab = inpop2.value;
    const one = key * (value/100);
    const two = key * (tab/100);

    console.log(key);
    console.log(value);

    if (key && value){
        localStorage.setItem(key,value);
        // location.reload();
    }

    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);


        inpg1.innerHTML = formatRupiah(this+(key - ((one+two))),'Rp.');
        inpin.innerHTML = formatRupiah(this+(one),'Rp.');
        inpon.innerHTML = formatRupiah(this+(two),'Rp.');
        inped.innerHTML = formatRupiah(this+(two),'Rp.'); 
    }}

inpbaru.onclick = function(){
    localStorage.clear();
    location.reload();
    return confirm('Yakin ?');
}

inpmulai.onclick = function(){
    const key = inpgaji.value;
    const value = inpop1.value;
    const tab = inpop2.value;
    const one = key * (value/100);
    const two = key * (tab/100);
    const fal = inpbarang.value;

    inpad.innerHTML = formatRupiah(this+(fal),'Rp.');
    inpod.innerHTML = fal / two + ' Bulan';
}
