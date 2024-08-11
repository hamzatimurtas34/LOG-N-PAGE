
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    let userİnp = document.getElementById("inp").value; 
    let userPas = document.getElementById("pas").value;
    if (userİnp == "admin" & userPas == "admin123" ) {
        alert("Uygulamaya Giriş Yapıldı");
    } else {
        alert("Yanlış Kullanıcı Adı veya Şifre Lütfen Tekrar Deneyiniz...")
    }
});



