document.addEventListener('deviceReady', onDeviceReady, false);
function onDeviceReady() {
    handleOpenURL(window.location.href);
}

function handleOpenURL(url) {
    // tampilkan informasi url di div ber-id info
    document.getElementById('info').innerHTML = url;
    // arahkan ke halaman promo.html jika url request adalah tgt://promo.html
    if(url == 'tgt://promo.html'){
        window.location.href = 'https://localhost/promo.html';
    }
}