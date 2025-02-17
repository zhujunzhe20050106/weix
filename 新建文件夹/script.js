document.getElementById('wechat-button').addEventListener('click', function() {
    const qrcode = document.getElementById('wechat-qrcode');
    if (qrcode.classList.contains('hidden')) {
        qrcode.classList.remove('hidden');
    } else {
        qrcode.classList.add('hidden');
    }
});