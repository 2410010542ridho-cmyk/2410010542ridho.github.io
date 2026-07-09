let d=JSON.parse(localStorage.getItem("kasir")||"[]");
function simpan(){localStorage.setItem("kasir",JSON.stringify(d));render()}
function tambah(){let n=nama.value,h=+harga.value;if(!n||!h)return;d.push({n,h});nama.value="";harga.value="";simpan()}
function hapus(i){d.splice(i,1);simpan()}
function render(){tb.innerHTML="";let t=0;d.forEach((x,i)=>{t+=x.h;tb.innerHTML+=`<tr><td>${x.n}</td><td>Rp ${x.h}</td><td><button class="btn btn-sm btn-danger" onclick="hapus(${i})">Hapus</button></td></tr>`});total.textContent=t;hitung()}
function hitung(){let k=(+bayar.value||0)-d.reduce((a,b)=>a+b.h,0);kembali.textContent=k}
render();