import qrcode
import os

# Broşürler ve URL'leri
brochures = {
    "Çevre Uygulamaları E Serisi Broşürü": "https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "Gıda Uygulamaları F Serisi Broşürü":"https://www.brosur.com.tr/uploads/images/brosur-tasarim-ornek.jpg",
    "Endüstri Uygulamaları I Serisi Broşürü":"https://visme.co/blog/wp-content/uploads/2020/08/1.-Pet-Care-Brochure-Template-1024x597.jpg",
    "HAUS Dekantörler":"https://istanbulbaski.net/upload/a4tektarafbrosur-jpg-51ce32bf-5847-4209-ab93-e6da02180b68_.jpg",
    "HAUS Süt Sepratörleri":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "Olive Plus 33 Broşürü":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "Olive Plus 52 Broşürü":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "Olive Plus 53 Broşürü":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "Olive Plus 55 Broşürü":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "Olive Plus 64 Broşürü":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "Olive Pro 21 Broşürü":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "Olive Pro 31 Broşürü":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "HAUS Turbo Blower Broşürü":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "HAUS Vidalı Pres Broşürü":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "HAUS Separatörler":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "Environment Applications · E Series":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "Food Applications · F Series":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "Industrial Applications · I Series":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "HAUS Decanters":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "HAUS Dairy Separators":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "HAUS Turbo Blower":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "HAUS Screw Press":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "HAUS Separators":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",

    }

# QR kodlarının kaydedileceği dizin
save_dir = "./haus_brochure/frontend/public/images/QR_code"

# Dizin yoksa oluştur
if not os.path.exists(save_dir):
    os.makedirs(save_dir)

for title, url in brochures.items():
    # Dosya adı oluşturma (geçersiz karakterleri kaldır veya değiştir)
    file_name = title.replace(" ", "_").replace("ç", "c").replace("ğ", "g").replace("ü", "u").replace("ş", "s").replace("ö", "o").replace("ı", "i") + ".png"
    file_path = os.path.join(save_dir, file_name)
    
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(url)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")
    img.save(file_path)

print("QR kodlar başarıyla oluşturuldu ve kaydedildi.")
