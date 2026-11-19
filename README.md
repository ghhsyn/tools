# Notettiklerim Tools

Ücretsiz, gizlilik dostu online araçlar: **https://tools.notettiklerim.com**

Tüm işlemler tarayıcıda yapılır. Dosyalar hiçbir sunucuya yüklenmez; site tamamen statiktir (derleme adımı yok).

## Araçlar (32)

| Kategori | Araçlar |
|---|---|
| PDF | Birleştir, Böl, Sayfa Düzenle (sırala/döndür/sil), İmzala, Görselden PDF, PDF'ten Görsele, Sıkıştır, Filigran, Sayfa Numarası, Metin Çıkar, Meta Veri, OCR (taranmış belge → aranabilir PDF) |
| QR & Barkod | QR Oluştur (logo, gradyan, desen, WiFi, vCard…), QR Okuyucu (kamera/görsel), Toplu QR (ZIP/A4 PDF), Barkod |
| Görsel | Sıkıştır & Dönüştür (JPG/PNG/WebP, boyutlandırma), Favicon Oluştur, Renk Araçları |
| Metin | Kelime Sayacı, Metin Dönüştürücü, Metin Karşılaştır (diff), Lorem Ipsum |
| Geliştirici | JSON Biçimlendirici, Base64, URL Kodla/Çöz, UUID, Zaman Damgası |
| Eğitim & Sunum | Rastgele Grup & Öğrenci Seçici (çark), Sunum Zamanlayıcı |
| Güvenlik | Şifre Oluşturucu, Hash (MD5/SHA) |

## Yapı

```
index.html              Ana sayfa (araç listesi JS ile kayıttan üretilir)
<arac-adi>/index.html   Her araç kendi klasöründe (temiz URL)
assets/css/style.css    Tasarım sistemi (açık/koyu tema)
assets/js/app.js        Araç kaydı (TOOLS), başlık/altbilgi, arama (Ctrl+K), yardımcılar
assets/vendor/          pdf-lib, pdf.js, Tesseract.js (OCR), JSZip, qrcode-generator, jsQR, JsBarcode, fontlar
sw.js                   Ağ öncelikli service worker (çevrimdışı destek)
```

Yeni araç eklemek için: `assets/js/app.js` içindeki `TOOLS` dizisine kayıt ekleyin, aynı adla bir klasör ve `index.html` oluşturun (mevcut bir aracı şablon olarak kopyalayın) ve `sitemap.xml`'e ekleyin.

## Yerelde çalıştırma

```bash
python -m http.server 8000
# http://localhost:8000
```

Kamera (QR okuyucu) ve SHA hash'leri `localhost` veya HTTPS üzerinde çalışır.

## Yayınlama (Windows IIS)

1. Sunucuda IIS özellikleri açık olmalı: *Web Server → Common HTTP Features → Static Content, Default Document, HTTP Errors* ve *Performance → Static Content Compression*.
2. `git archive --format=zip -o ../tools-yukleme.zip HEAD` ile paketi oluşturun ve örneğin `C:\inetpub\tools` klasörüne açın (`web.config` ve `index.html` klasörün kökünde olmalı).
3. IIS Manager → *Sites → Add Website*: Site adı `tools`, Physical path `C:\inetpub\tools`, Binding: `https`, port 443, Host name `tools.notettiklerim.com`, SSL sertifikası seçili. Ayrıca `http` / 80 / aynı host name bağlamasını ekleyin.
4. Application Pool → *.NET CLR Version: No Managed Code*.
5. SSL için ücretsiz Let's Encrypt sertifikası: [win-acme](https://www.win-acme.com/) (`wacs.exe`) ile siteyi seçip otomatik yenilemeli sertifika kurun.
6. DNS: `tools` için **A** kaydı → sunucunun IP adresi.

HTTP→HTTPS yönlendirmesi sayfa içinde JavaScript ile yapılır. Sunucu tarafında yapmak isterseniz IIS **URL Rewrite** modülünü kurup `web.config` içindeki `<system.webServer>` bölümüne şu kuralı ekleyin (modül kurulu değilken eklemeyin, site 500 hatası verir):

```xml
<rewrite><rules>
  <rule name="HTTPS" stopProcessing="true">
    <match url="(.*)" />
    <conditions><add input="{HTTPS}" pattern="off" /></conditions>
    <action type="Redirect" url="https://{HTTP_HOST}/{R:1}" redirectType="Permanent" />
  </rule>
</rules></rewrite>
```

## Yayınlama (GitHub Pages)

1. Repo → **Settings → Pages** → Source: *Deploy from a branch*, Branch: `main` / `(root)`.
2. DNS sağlayıcınızda: `tools` için **CNAME** kaydı → `ghhsyn.github.io`
3. Pages ayarlarında *Custom domain* `tools.notettiklerim.com` olarak görünmeli (repo kökündeki `CNAME` dosyası bunu sağlar), ardından **Enforce HTTPS** işaretleyin.

Herhangi bir statik sunucuda (Nginx, Apache, Netlify, Cloudflare Pages) da olduğu gibi çalışır; kök dizin olarak repo kökünü gösterin.

## Lisanslar

Üçüncü taraf kütüphaneler kendi lisanslarıyla gelir: pdf-lib (MIT), PDF.js (Apache-2.0), Tesseract.js (Apache-2.0), JSZip (MIT), qrcode-generator (MIT), jsQR (Apache-2.0), JsBarcode (MIT), DejaVu Sans, Dancing Script & Great Vibes (OFL).
