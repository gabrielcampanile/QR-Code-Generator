function generateQRCode() {
    var inputText = document.getElementById('inputText').value;
    var qrcodeContainer = document.getElementById('qrcode');
  
    // Limpar o conteúdo anterior
    qrcodeContainer.innerHTML = '';
  
    // Criar o QR Code
    var qrcode = new QRCode(qrcodeContainer, {
      text: inputText,
      width: 128,
      height: 128
    });
  }
  