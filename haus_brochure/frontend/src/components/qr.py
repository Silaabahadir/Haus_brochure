import qrcode
import os

# Broşürler ve URL'leri
brochures = {
    "Çevre Uygulamaları E Serisi Broşürü": "https://www.hausworld.com/uploads/brochures/TR/dde_serisi.pdf",
    "Gıda Uygulamaları F Serisi Broşürü":"https://www.hausworld.com/uploads/brochures/TR/ddf_serisi.pdf",
    "Endüstri Uygulamaları I Serisi Broşürü":"https://www.hausworld.com/uploads/brochures/TR/ddi_serisi.pdf",
    "HAUS Dekantörler":"https://www.hausworld.com/uploads/brochures/TR/dekantorler.pdf",
    "HAUS Süt Sepratörleri":"https://www.hausworld.com/uploads/brochures/TR/sut_uygulamalari.pdf",
    "Olive Plus 33 Broşürü":"https://www.hausworld.com/uploads/brochures/TR/olive_plus_33.pdf",
    "Olive Plus 52 Broşürü":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "Olive Plus 53 Broşürü":"https://www.hausworld.com/uploads/brochures/TR/olive_plus_53.pdf",
    "Olive Plus 55 Broşürü":"https://www.hausworld.com/uploads/brochures/TR/olive_plus_55.pdf",
    "Olive Plus 64 Broşürü":"https://www.hausworld.com/uploads/brochures/TR/olive_plus_64.pdf",
    "Olive Pro 21 Broşürü":"https://www.hausworld.com/uploads/brochures/TR/olive_pro_21.pdf",
    "Olive Pro 31 Broşürü":"https://www.hausworld.com/uploads/brochures/TR/olive_pro_31.pdf",
    "HAUS Turbo Blower Broşürü":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "HAUS Vidalı Pres Broşürü":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "HAUS Separatörler":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "Environment Applications · E Series":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "Food Applications · F Series":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "Industrial Applications · I Series":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "HAUS Decanters":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "HAUS Dairy Separators":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "HAUS Turbo Blower":"https://www.hausworld.com/uploads/brochures/EN/turbo_blower.pdf",
    "HAUS Screw Press":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",
    "HAUS Separators":"https://www.zeykamatbaa.com/upload/7811615971743.jpg",

    }

# QR kodlarının kaydedileceği dizin
save_dir = "../haus_brochure/frontend/public/images/QR_code"



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