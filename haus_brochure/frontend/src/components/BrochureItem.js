import React, { useState } from 'react';
import Modal from './Modal';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { getData } from 'country-list';

const BrochureItem = ({ title }) => {
  const brochures = [
    { title: 'Çevre Uygulamaları E Serisi Broşürü', qrName: 'Çevre_Uygulamalari_E_Serisi_Brosuru.png', jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'Gıda Uygulamaları F Serisi Broşürü', qrName: 'Gida_Uygulamalari_F_Serisi_Brosuru.png', jpgUrl:"https://www.brosur.com.tr/uploads/images/brosur-tasarim-ornek.jpg" },
    { title: 'Endüstri Uygulamaları I Serisi Broşürü', qrName: 'Endustri_Uygulamalari_I_Serisi_Brosuru.png', jpgUrl:"https://visme.co/blog/wp-content/uploads/2020/08/1.-Pet-Care-Brochure-Template-1024x597.jpg" },
    { title: 'HAUS Dekantörler', qrName: 'HAUS_Dekantorler.png', jpgUrl:"https://istanbulbaski.net/upload/a4tektarafbrosur-jpg-51ce32bf-5847-4209-ab93-e6da02180b68_.jpg" },
    { title: 'HAUS Süt Sepratörleri', qrName: 'HAUS_Sut_Sepratorleri.png', jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'Olive Plus 33 Broşürü', qrName: 'Olive_Plus_33_Brosuru.png', jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'Olive Plus 52 Broşürü', qrName: 'Olive_Plus_52_Brosuru.png' , jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'Olive Plus 53 Broşürü', qrName: 'Olive_Plus_53_Brosuru.png' , jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'Olive Plus 55 Broşürü', qrName: 'Olive_Plus_55_Brosuru.png' , jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'Olive Plus 64 Broşürü', qrName: 'Olive_Plus_64_Brosuru.png' , jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'Olive Pro 21 Broşürü', qrName: 'Olive_Pro_21_Brosuru.png', jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'Olive Pro 31 Broşürü', qrName: 'Olive_Pro_31_Brosuru.png', jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'HAUS Turbo Blower Broşürü', qrName: 'HAUS_Turbo_Blower_Brosuru.png', jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'HAUS Vidalı Pres Broşürü', qrName: 'HAUS_Vidali_Pres_Brosuru.png', jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'HAUS Separatörler', qrName: 'HAUS_Separatorler.png', jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'Environment Applications · E Series', qrName: 'Environment_Applications_·_E_Series.png', jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'Food Applications · F Series', qrName: 'Food_Applications_·_F_Series.png', jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'Industrial Applications · I Series', qrName: 'Industrial_Applications_·_I_Series.png' , jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'HAUS Decanters', qrName: 'HAUS_Decanters.png', jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'HAUS Dairy Separators', qrName: 'HAUS_Dairy_Separators.png' , jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'HAUS Turbo Blower', qrName: 'HAUS_Turbo_Blower.png', jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'HAUS Screw Press', qrName: 'HAUS_Screw_Press.png' , jpgUrl: 'https://www.zeykamatbaa.com/upload/7811615971743.jpg' },
    { title: 'HAUS Separators', qrName: 'HAUS_Separators.png' },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [phone, setPhone] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    message: '',
    accepted: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Bu alan zorunludur.';
    if (!formData.email) newErrors.email = 'Bu alan zorunludur.';
    if (!formData.phone) newErrors.phone = 'Bu alan zorunludur.';
    if (!formData.company) newErrors.company = 'Bu alan zorunludur.';
    if (!formData.country) newErrors.country = 'Bu alan zorunludur.';
    if (!formData.message) newErrors.message = 'Bu alan zorunludur.';
    if (!formData.accepted) newErrors.accepted = 'Bu alan zorunludur.';
    return newErrors;
  };

  const findBrochure = (title) => brochures.find(b => b.title === title);

  const brochure = findBrochure(title);

  const handleDownload = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const link = document.createElement('a');
    link.href = brochure.jpgUrl;  // JPEG dosyasının URL'si
    link.download = `${title}.jpg`;  // İndirilen dosyanın adı
    link.target="_blank";
    link.click();
  };

  const isFormValid = () => {
    return formData.name && formData.email && formData.phone && formData.company && formData.country && formData.message && formData.accepted;
  };

  const countryOptions = getData();

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
    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder='Ad Soyad' />
    {errors.name && <span className="error">{errors.name}</span>}
    
    <label>Email:</label>
    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder='E-mail' />
    {errors.email && <span className="error">{errors.email}</span>}
    
    <label>Cep Telefonu:</label>
    <div className="phone-input-wrapper">
      <PhoneInput
        country={'tr'}
        value={phone}
        onChange={phone => setPhone(phone)}
        required
      />
    </div>
    
    <label>Firma Adı:</label>
    <input type="text" name="company" value={formData.company} onChange={handleChange} required placeholder='Firma Adı'/>
    {errors.company && <span className="error">{errors.company}</span>}
    
    <label>Ülke Adı:</label>
    <select name="country" value={formData.country} onChange={handleChange} required>
      <option value="">Ülke Seçin</option>
      {countryOptions.map((country) => (
        <option key={country.code} value={country.name}>{country.name}</option>
      ))}
    </select>
    {errors.country && <span className="error">{errors.country}</span>}
    
    <label>Mesajınız:</label>
    <textarea name="message" value={formData.message} onChange={handleChange} rows="4" required></textarea>
    {errors.message && <span className="error">{errors.message}</span>}
    
    <label>
      <input type="checkbox" name="accepted" checked={formData.accepted} onChange={handleChange} required />
      KVKK metnini okudum kabul ediyorum.
    </label>
    {errors.accepted && <span className="error">{errors.accepted}</span>}
    
    <button type="button" onClick={handleDownload} disabled={!isFormValid()}>Broşür Talep Et</button>
  </form>
</Modal>
    </div>
  );
};

export default BrochureItem;
