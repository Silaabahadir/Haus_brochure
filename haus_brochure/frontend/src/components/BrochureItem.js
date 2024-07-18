import React, { useState } from 'react';
import Modal from './Modal';

const BrochureItem = ({ title }) => {
  const brochures = [
    { title: 'Çevre Uygulamaları E Serisi Broşürü', qrName: 'Çevre_Uygulamalari_E_Serisi_Brosuru.png',jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'Gıda Uygulamaları F Serisi Broşürü', qrName: 'Gida_Uygulamalari_F_Serisi_Brosuru.png',jpgUrl:"https://www.brosur.com.tr/uploads/images/brosur-tasarim-ornek.jpg" },
    { title: 'Endüstri Uygulamaları I Serisi Broşürü', qrName: 'Endustri_Uygulamalari_I_Serisi_Brosuru.png',jpgUrl:"https://visme.co/blog/wp-content/uploads/2020/08/1.-Pet-Care-Brochure-Template-1024x597.jpg" },
    { title: 'HAUS Dekantörler', qrName: 'HAUS_Dekantorler.png',jpgUrl:"https://istanbulbaski.net/upload/a4tektarafbrosur-jpg-51ce32bf-5847-4209-ab93-e6da02180b68_.jpg" },
    { title: 'HAUS Süt Sepratörleri', qrName: 'HAUS_Sut_Sepratorleri.png',jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'Olive Plus 33 Broşürü', qrName: 'Olive_Plus_33_Brosuru.png',jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'Olive Plus 52 Broşürü', qrName: 'Olive_Plus_52_Brosuru.png' ,jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg'},
    { title: 'Olive Plus 53 Broşürü', qrName: 'Olive_Plus_53_Brosuru.png' ,jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg'},
    { title: 'Olive Plus 55 Broşürü', qrName: 'Olive_Plus_55_Brosuru.png' ,jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg'},
    { title: 'Olive Plus 64 Broşürü', qrName: 'Olive_Plus_64_Brosuru.png' ,jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg'},
    { title: 'Olive Pro 21 Broşürü', qrName: 'Olive_Pro_21_Brosuru.png',jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'Olive Pro 31 Broşürü', qrName: 'Olive_Pro_31_Brosuru.png',jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'HAUS Turbo Blower Broşürü', qrName: 'HAUS_Turbo_Blower_Brosuru.png',jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'HAUS Vidalı Pres Broşürü', qrName: 'HAUS_Vidali_Pres_Brosuru.png',jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'HAUS Separatörler', qrName: 'HAUS_Separatorler.png',jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'Environment Applications · E Series', qrName: 'Environment_Applications_·_E_Series.png',jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'Food Applications · F Series', qrName: 'Food_Applications_·_F_Series.png',jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'Industrial Applications · I Series', qrName: 'Industrial_Applications_·_I_Series.png' ,jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg'},
    { title: 'HAUS Decanters', qrName: 'HAUS_Decanters.png',jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'HAUS Dairy Separators', qrName: 'HAUS_Dairy_Separators.png' ,jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg'},
    { title: 'HAUS Turbo Blower', qrName: 'HAUS_Turbo_Blower.png',jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'HAUS Screw Press', qrName: 'HAUS_Screw_Press.png' ,jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg'},
    { title: 'HAUS Separators', qrName: 'HAUS_Separators.png' },
  ];

  const [modalVisible, setModalVisible] = useState(false);

  const findBrochure = (title) => brochures.find(b => b.title === title);

  const brochure = findBrochure(title);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = brochure.jpgUrl;  // JPEG dosyasının URL'si
    link.download = `${title}.jpg`;  // İndirilen dosyanın adı
    link.click();
  };

  return (
    <div className="brochure-item">
      <h3 className="brochure-title">{title}</h3>
      {brochure && brochure.qrName && (
        <div className="qr-code">
          <img src={`/images/QR_code/${brochure.qrName}`} alt={`${title} QR Code`} />
        </div>
      )}
      <button className="download-button" onClick={() => setModalVisible(true)}>İndir</button>

      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
        <h2>Broşür Talep Formu</h2>
        <form>
          <label>Ad Soyad:</label>
          <input type="text" required placeholder='Ad Soyad' />
          
          <label>Email:</label>
          <input type="email" required placeholder='E-mail' />
          
          <label>Cep Telefonu:</label>
          <input type="tel" required placeholder='0(5**) *** ** **'/>
          
          <label>Firma Adı:</label>
          <input type="text" required placeholder='Firma Adı'/>
          
          <label>Ülke Adı:</label>
          <input type="text" required />
          
          <label>Mesajınız:</label>
          <textarea rows="4" required></textarea>
          
          <label>
            <input type="checkbox" required />
            KVKK metnini okudum kabul ediyorum.
          </label>
          
          <button type="button" onClick={handleDownload}>Broşür Talep Et</button>
        </form>
      </Modal>
    </div>
  );
};

export default BrochureItem;
