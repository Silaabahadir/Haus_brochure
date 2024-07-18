import React, { useState } from 'react';

const BrochureItem = ({ title }) => {
  const [showForm, setShowForm] = useState(false);

  const brochures = [
    { title: 'Çevre Uygulamaları E Serisi Broşürü', qrName: 'Çevre_Uygulamalari_E_Serisi_Brosuru.png' },
    { title: 'Gıda Uygulamaları F Serisi Broşürü', qrName: 'Gida_Uygulamalari_F_Serisi_Brosuru.png' },
    { title: 'Endüstri Uygulamaları I Serisi Broşürü', qrName: 'Endustri_Uygulamalari_I_Serisi_Brosuru.png' },
    { title: 'HAUS Dekantörler', qrName: 'HAUS_Dekantorler.png' },
    {title:"HAUS Süt Sepratörleri",qrName:"HAUS_Sut_Sepratorleri.png"},
    {title:"Olive Plus 33 Broşürü",qrName:"Olive_Plus_33_Brosuru.png"},
    {title:"Olive Plus 52 Broşürü",qrName:"Olive_Plus_52_Brosuru.png"},
    {title:"Olive Plus 53 Broşürü",qrName:"Olive_Plus_53_Brosuru.png"},
    {title:"Olive Plus 55 Broşürü",qrName:"Olive_Plus_55_Brosuru.png"},
    {title:"Olive Plus 64 Broşürü",qrName:"Olive_Plus_64_Brosuru.png"},
    {title:"Olive Pro 21 Broşürü",qrName:"Olive_Pro_21_Brosuru.png"},
    {title:"Olive Pro 31 Broşürü",qrName:"Olive_Pro_31_Brosuru.png"},
    {title:"HAUS Turbo Blower Broşürü",qrName:"HAUS_Turbo_Blower_Brosuru.png"},
    {title:"HAUS Vidalı Pres Broşürü",qrName:"HAUS_Vidali_Pres_Brosuru.png"},
    {title:"HAUS Separatörler",qrName:"HAUS_Separatorler.png"}
  ];

  const findQRCode = (title) => {
    const brochure = brochures.find(b => b.title === title);
    return brochure ? `/images/QR_code/${brochure.qrName}` : null;
  };

  const qrImageUrl = findQRCode(title);

  return (
    <div className="brochure-item">
      <h3 className="brochure-title">{title}</h3>
      {qrImageUrl && (
        <div className="qr-code">
          <img src={qrImageUrl} alt={`${title} QR Code`} />
        </div>
      )}
      <button className="download-button" onClick={() => setShowForm(!showForm)}>İndir</button>
      {showForm && (
        <div className="brochure-form-container">
          <h2>Bilgi Girin</h2>
          <form className="brochure-form">
            <input type="text" placeholder="Ad-Soyad" required />
            <input type="email" placeholder="E-mail" required />
            <input type="tel" placeholder="Cep Telefonu" required />
            <input type="text" placeholder="Firma Adı" required />
            <input type="text" placeholder="Ülke Adı" required />
            <input type="text" placeholder="Şehir" required />
            <textarea placeholder="Mesajınız" required></textarea>
            <button type="submit">Gönder</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BrochureItem;
