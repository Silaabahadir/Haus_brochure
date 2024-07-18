// BrochureItem.js
import React, { useState } from 'react';
import Modal from './Modal';

const BrochureItem = ({ title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    country: '',
    message: '',
    kvkkAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Form verilerini işle
    setIsModalOpen(false); // Modalı kapat
  };

  const brochures = [
    { title: 'Çevre Uygulamaları E Serisi Broşürü', qrName: 'Çevre_Uygulamalari_E_Serisi_Brosuru.png' },
    { title: 'Gıda Uygulamaları F Serisi Broşürü', qrName: 'Gida_Uygulamalari_F_Serisi_Brosuru.png' },
    { title: 'Endüstri Uygulamaları I Serisi Broşürü', qrName: 'Endustri_Uygulamalari_I_Serisi_Brosuru.png' },
    { title: 'HAUS Dekantörler', qrName: 'HAUS_Dekantorler.png' },
    { title: 'HAUS Süt Sepratörleri', qrName: 'HAUS_Sut_Sepratorleri.png' },
    { title: 'Olive Plus 33 Broşürü', qrName: 'Olive_Plus_33_Brosuru.png' },
    { title: 'Olive Plus 52 Broşürü', qrName: 'Olive_Plus_52_Brosuru.png' },
    { title: 'Olive Plus 53 Broşürü', qrName: 'Olive_Plus_53_Brosuru.png' },
    { title: 'Olive Plus 55 Broşürü', qrName: 'Olive_Plus_55_Brosuru.png' },
    { title: 'Olive Plus 64 Broşürü', qrName: 'Olive_Plus_64_Brosuru.png' },
    { title: 'Olive Pro 21 Broşürü', qrName: 'Olive_Pro_21_Brosuru.png' },
    { title: 'Olive Pro 31 Broşürü', qrName: 'Olive_Pro_31_Brosuru.png' },
    { title: 'HAUS Turbo Blower Broşürü', qrName: 'HAUS_Turbo_Blower_Brosuru.png' },
    { title: 'HAUS Vidalı Pres Broşürü', qrName: 'HAUS_Vidali_Pres_Brosuru.png' },
    { title: 'HAUS Separatörler', qrName: 'HAUS_Separatorler.png' },
    { title: 'Environment Applications · E Series', qrName: 'Environment_Applications_·_E_Series.png' },
    { title: 'Food Applications · F Series', qrName: 'Food_Applications_·_F_Series.png' },
    { title: 'Industrial Applications · I Series', qrName: 'Industrial_Applications_·_I_Series.png' },
    { title: 'HAUS Decanters', qrName: 'HAUS_Decanters.png' },
    { title: 'HAUS Dairy Separators', qrName: 'HAUS_Dairy_Separators.png' },
    { title: 'HAUS Turbo Blower', qrName: 'HAUS_Turbo_Blower.png' },
    { title: 'HAUS Screw Press', qrName: 'HAUS_Screw_Press.png' },
    { title: 'HAUS Separators', qrName: 'HAUS_Separators.png' },
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
      <button className="download-button" onClick={() => setIsModalOpen(true)}>İndir</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleSubmit} className="brochure-form">
          <div>
            <label>Ad Soyad</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Cep Telefonu</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Firma Adı</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Ülke Adı</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Mesajınız</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="kvkkAccepted"
                checked={formData.kvkkAccepted}
                onChange={handleChange}
                required
              />
              KVKK metnini okudum kabul ediyorum
            </label>
          </div>
          <button type="submit" className="submit-button">Broşür Talep Et</button>
        </form>
      </Modal>
    </div>
  );
};

export default BrochureItem;
