import React from 'react';

const BrochureItem = ({ title }) => {
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
      <button className="download-button">İndir</button>
    </div>
  );
};

export default BrochureItem;
