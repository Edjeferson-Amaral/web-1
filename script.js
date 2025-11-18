function enviarWhatsapp() {
    const numero = "9999999999999"; 
    const mensagem = gerarMensagem();
    const link = `https://wa.me/${numero}?text=${mensagem}`;

    window.open(link, "_blank");

    const qr = document.getElementById("qrcode");
    qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(link)}`;
}
