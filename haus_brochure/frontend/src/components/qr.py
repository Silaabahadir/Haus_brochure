import qrcode
import os
from pathlib import Path

# Broşürler ve URL'leri
brochures = {
    "Çevre Uygulamaları E Serisi Broşürü": "https://www.hausworld.com/uploads/brochures/TR/dde_serisi.pdf",
    "Gıda Uygulamaları F Serisi Broşürü":"https://www.hausworld.com/uploads/brochures/TR/ddf_serisi.pdf",
    "Endüstri Uygulamaları I Serisi Broşürü":"https://www.hausworld.com/uploads/brochures/TR/ddi_serisi.pdf",
    "HAUS Dekantörler":"https://www.hausworld.com/uploads/brochures/TR/dekantorler.pdf",
    "HAUS Süt Sepratörleri":"https://www.hausworld.com/uploads/brochures/TR/sut_uygulamalari.pdf",
    "Olive Plus 33 Broşürü":"https://www.hausworld.com/uploads/brochures/TR/olive_plus_33.pdf",
    "Olive Plus 52 Broşürü":"https://www.hausworld.com/uploads/brochures/TR/olive_plus_52.pdf",
    "Olive Plus 53 Broşürü":"https://www.hausworld.com/uploads/brochures/TR/olive_plus_53.pdf",
    "Olive Plus 55 Broşürü":"https://www.hausworld.com/uploads/brochures/TR/olive_plus_55.pdf",
    "Olive Plus 64 Broşürü":"https://www.hausworld.com/uploads/brochures/TR/olive_plus_64.pdf",
    "Olive Pro 21 Broşürü":"https://www.hausworld.com/uploads/brochures/TR/olive_pro_21.pdf",
    "Olive Pro 31 Broşürü":"https://www.hausworld.com/uploads/brochures/TR/olive_pro_31.pdf",
    "HAUS Turbo Blower Broşürü":"https://www.hausworld.com/uploads/brochures/EN/turbo_blower.pdf",
    "HAUS Vidalı Pres Broşürü":"https://www.hausworld.com/uploads/brochures/TR/vidali_pres.pdf",
    "HAUS Separatörler":"https://www.hausworld.com/uploads/brochures/TR/separatorler.pdf",
    "Environment Applications · E Series":"https://www.hausworld.com/uploads/brochures/EN/dde_series.pdf",
    "Food Applications · F Series":"https://www.hausworld.com/uploads/brochures/EN/ddf_series.pdf",
    "Industrial Applications · I Series":"https://www.hausworld.com/uploads/brochures/EN/ddi_series.pdf",
    "HAUS Decanters":"https://www.hausworld.com/uploads/brochures/EN/decanters.pdf",
    "HAUS Dairy Separators":'https://www.hausworld.com/uploads/brochures/EN/dairy_applications.pdf',
    "HAUS Turbo Blower":"https://www.hausworld.com/uploads/brochures/EN/turbo_blower.pdf",
    "HAUS Screw Press":"https://www.hausworld.com/uploads/brochures/EN/screw_press.pdf",
    "HAUS Separators":"https://www.hausworld.com/uploads/brochures/EN/separators.pdf",
}

# QR kodlarının kaydedileceği dizin (genel hale getirilmiş)
save_dir = Path.home() / "Desktop" / "Haus_brochure" / "haus_brochure" / "frontend" / "public" / "images" / "QR_code"

# Dizin yoksa oluştur
if not save_dir.exists():
    save_dir.mkdir(parents=True, exist_ok=True)

for title, url in brochures.items():
    # Dosya adı oluşturma (geçersiz karakterleri kaldır veya değiştir)
    file_name = title.replace(" ", "_").replace("ç", "c").replace("ğ", "g").replace("ü", "u").replace("ş", "s").replace("ö", "o").replace("ı", "i") + ".png"
    file_path = save_dir / file_name
    
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