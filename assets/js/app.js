/* ==========================================================================
   Notettiklerim Tools — core (registry, layout, helpers)
   ========================================================================== */
(function () {
  'use strict';

  const SITE = {
    name: 'Notettiklerim Tools',
    url: 'https://tools.notettiklerim.com',
    year: new Date().getFullYear(),
  };

  /* ---------------- Icons (24x24, stroke) ---------------- */
  const P = {
    logo: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><circle cx="17.5" cy="17.5" r="3.5"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    chevronRight: '<path d="m9 18 6-6-6-6"/>',
    arrowRight: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    arrowUp: '<path d="m5 12 7-7 7 7M12 19V5"/>',
    arrowDown: '<path d="M12 5v14M19 12l-7 7-7-7"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5M12 3v12"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
    fileText: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8M8 9h2"/>',
    merge: '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/>',
    scissors: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12"/>',
    layout: '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21"/>',
    images: '<path d="M18 22H4a2 2 0 0 1-2-2V6"/><rect x="6" y="2" width="16" height="16" rx="2"/><circle cx="12" cy="8" r="2"/><path d="m22 14-1.6-1.6a2 2 0 0 0-2.8 0L10 18"/>',
    compress: '<path d="M8 3v3a2 2 0 0 1-2 2H3M21 8h-3a2 2 0 0 1-2-2V3M3 16h3a2 2 0 0 1 2 2v3M16 21v-3a2 2 0 0 1 2-2h3"/>',
    droplet: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
    hash: '<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',
    type: '<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM21 14v.01M14 21h.01M17 21h4v-4"/>',
    scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M7 12h10"/>',
    layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
    barcode: '<path d="M3 5v14M8 5v14M12 5v14M17 5v14M21 5v14"/><path d="M5.5 5v14M14.5 5v14M19 5v14" stroke-width="1"/>',
    camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13" r="3"/>',
    palette: '<circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12.5" r="1.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.65-.75 1.65-1.69 0-.44-.18-.84-.44-1.13-.29-.29-.44-.65-.44-1.13a1.64 1.64 0 0 1 1.67-1.67h2c3.05 0 5.56-2.5 5.56-5.55C21.97 6.01 17.46 2 12 2z"/>',
    star: '<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>',
    alignLeft: '<path d="M17 6H3M21 12H3M15 18H3"/>',
    caseSensitive: '<path d="m3 15 4-8 4 8M4 13h6"/><circle cx="18" cy="12" r="3"/><path d="M21 9v6"/>',
    diff: '<path d="M12 3v14M5 10h14M5 21h14"/>',
    quote: '<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>',
    braces: '<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/>',
    binary: '<rect x="14" y="14" width="4" height="6" rx="2"/><rect x="6" y="4" width="4" height="6" rx="2"/><path d="M6 20h4M14 10h4M6 14h2v6M14 4h2v6"/>',
    fingerprint: '<path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"/><path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M2 16h.01"/><path d="M21.8 16c.2-2 .131-5.354 0-6"/><path d="M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    idCard: '<path d="M16 10h2M16 14h2"/><path d="M6.17 15a3 3 0 0 1 5.66 0"/><circle cx="9" cy="11" r="2"/><rect x="2" y="5" width="20" height="14" rx="2"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    checkCircle: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4M12 17h.01"/>',
    trash: '<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    rotateCw: '<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>',
    rotateCcw: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
    grip: '<circle cx="9" cy="5" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="19" r="1"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
    wifi: '<path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.86a10 10 0 0 1 14 0M8.5 16.43a5 5 0 0 1 7 0"/>',
    user: '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mapPin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
    clipboard: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',
    code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
    sparkles: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"/>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
    infinity: '<path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"/>',
    pen: '<path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
    signature: '<path d="m21 17-2.16-1.73a2 2 0 0 0-2.58.09L14 17.5"/><path d="M3 17c3.33-6 5-9 6.5-9C11 8 9 15 11 15c1.5 0 2.5-3 4-3s1 3 2 3"/><path d="M3 21h18"/>',
    maximize: '<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>',
    tag: '<path d="M12.59 2.59A2 2 0 0 0 11.17 2H4a2 2 0 0 0-2 2v7.17a2 2 0 0 0 .59 1.42l8.7 8.7a2.43 2.43 0 0 0 3.42 0l6.58-6.58a2.43 2.43 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
    wand: '<path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72M14 7l3 3M5 6v4M19 14v4M10 2v2M7 8H3M21 16h-4M11 3H9"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  };
  const icon = (name, attrs = '') =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${attrs}>${P[name] || P.file}</svg>`;

  /* ---------------- Registry ---------------- */
  const CATS = {
    pdf:      { name: 'PDF Araçları',        short: 'PDF',        color: 'var(--c-pdf)',      icon: 'fileText' },
    qr:       { name: 'QR & Barkod',         short: 'QR & Barkod', color: 'var(--c-qr)',      icon: 'qr' },
    image:    { name: 'Görsel Araçları',     short: 'Görsel',     color: 'var(--c-image)',    icon: 'image' },
    text:     { name: 'Metin Araçları',      short: 'Metin',      color: 'var(--c-text)',     icon: 'type' },
    dev:      { name: 'Geliştirici Araçları', short: 'Geliştirici', color: 'var(--c-dev)',    icon: 'code' },
    security: { name: 'Güvenlik',            short: 'Güvenlik',   color: 'var(--c-security)', icon: 'shield' },
  };

  const TOOLS = [
    // PDF
    { slug: 'pdf-birlestir', cat: 'pdf', icon: 'merge', name: 'PDF Birleştir', desc: 'Birden fazla PDF dosyasını istediğiniz sırayla tek bir PDF\'te birleştirin.', k: 'merge combine join birlestirme' },
    { slug: 'pdf-bol', cat: 'pdf', icon: 'scissors', name: 'PDF Böl', desc: 'PDF\'i sayfa aralıklarına göre bölün veya belirli sayfaları ayıklayın.', k: 'split extract ayikla ayir' },
    { slug: 'pdf-duzenle', cat: 'pdf', icon: 'layout', name: 'PDF Sayfa Düzenle', desc: 'Sayfaları sürükleyip sıralayın, döndürün veya silin.', k: 'organize rotate delete sort dondur sil sirala', isNew: true },
    { slug: 'pdf-imzala', cat: 'pdf', icon: 'signature', name: 'PDF İmzala', desc: 'İmzanızı çizin veya yükleyin, PDF üzerinde istediğiniz yere yerleştirin.', k: 'sign signature imza', isNew: true },
    { slug: 'gorselden-pdf', cat: 'pdf', icon: 'images', name: 'Görselden PDF', desc: 'JPG, PNG ve WebP görsellerini tek bir PDF dosyasına dönüştürün.', k: 'jpg to pdf png image convert resim' },
    { slug: 'pdf-gorsel', cat: 'pdf', icon: 'image', name: 'PDF\'ten Görsele', desc: 'PDF sayfalarını yüksek kaliteli JPG veya PNG görsellere dönüştürün.', k: 'pdf to jpg png convert resim' },
    { slug: 'pdf-sikistir', cat: 'pdf', icon: 'compress', name: 'PDF Sıkıştır', desc: 'PDF dosya boyutunu kalite ayarıyla küçültün.', k: 'compress reduce size kucult boyut' },
    { slug: 'pdf-filigran', cat: 'pdf', icon: 'droplet', name: 'PDF Filigran Ekle', desc: 'PDF sayfalarına özelleştirilebilir metin filigranı ekleyin.', k: 'watermark damga' },
    { slug: 'pdf-sayfa-numarasi', cat: 'pdf', icon: 'hash', name: 'Sayfa Numarası Ekle', desc: 'PDF sayfalarına konum ve biçim seçerek numara ekleyin.', k: 'page numbers numaralandir' },
    { slug: 'pdf-metin', cat: 'pdf', icon: 'type', name: 'PDF\'ten Metin Çıkar', desc: 'PDF içindeki metni kopyalanabilir düz metne dönüştürün.', k: 'pdf to text extract txt' },
    { slug: 'pdf-bilgi', cat: 'pdf', icon: 'info', name: 'PDF Bilgilerini Düzenle', desc: 'Başlık, yazar, konu ve anahtar kelime gibi meta verileri görün ve düzenleyin.', k: 'metadata title author meta' },
    // QR
    { slug: 'qr-olustur', cat: 'qr', icon: 'qr', name: 'QR Kod Oluştur', desc: 'URL, WiFi, kartvizit ve daha fazlası için renkli, logolu QR kodlar oluşturun.', k: 'qr code generator karekod wifi vcard', isNew: true },
    { slug: 'qr-oku', cat: 'qr', icon: 'scan', name: 'QR Kod Okuyucu', desc: 'Kamera veya görsel dosyası ile QR kodları anında okuyun.', k: 'qr scanner reader tara karekod' },
    { slug: 'toplu-qr', cat: 'qr', icon: 'layers', name: 'Toplu QR Oluştur', desc: 'Liste veya CSV\'den yüzlerce QR kodu tek seferde ZIP olarak indirin.', k: 'bulk batch csv qr' },
    { slug: 'barkod-olustur', cat: 'qr', icon: 'barcode', name: 'Barkod Oluştur', desc: 'EAN-13, Code128, UPC ve diğer formatlarda barkod oluşturun.', k: 'barcode ean upc code128' },
    // Image
    { slug: 'gorsel-sikistir', cat: 'image', icon: 'compress', name: 'Görsel Sıkıştır & Dönüştür', desc: 'Görselleri sıkıştırın, boyutlandırın ve JPG/PNG/WebP formatına dönüştürün.', k: 'image compress resize convert webp jpg png resim kucult' },
    { slug: 'favicon-olustur', cat: 'image', icon: 'star', name: 'Favicon Oluştur', desc: 'Görselinizden tüm boyutlarda favicon ve uygulama simgeleri üretin.', k: 'favicon icon ico app' },
    { slug: 'renk-araclari', cat: 'image', icon: 'palette', name: 'Renk Araçları', desc: 'HEX, RGB, HSL dönüşümü, ton paleti ve kontrast kontrolü.', k: 'color hex rgb hsl palette contrast renk' },
    // Text
    { slug: 'kelime-sayaci', cat: 'text', icon: 'alignLeft', name: 'Kelime & Karakter Sayacı', desc: 'Kelime, karakter, cümle sayısı ve okuma süresini hesaplayın.', k: 'word count character counter karakter' },
    { slug: 'metin-donustur', cat: 'text', icon: 'caseSensitive', name: 'Metin Dönüştürücü', desc: 'Büyük/küçük harf, slug, camelCase, satır sıralama ve daha fazlası.', k: 'case converter uppercase lowercase slug' },
    { slug: 'metin-karsilastir', cat: 'text', icon: 'diff', name: 'Metin Karşılaştır', desc: 'İki metin arasındaki farkları satır satır vurgulayın.', k: 'diff compare fark karsilastirma' },
    { slug: 'lorem-ipsum', cat: 'text', icon: 'quote', name: 'Lorem Ipsum Üretici', desc: 'Tasarımlarınız için paragraf, cümle veya kelime bazında yer tutucu metin.', k: 'lorem ipsum placeholder dummy text' },
    // Dev
    { slug: 'json-bicimlendir', cat: 'dev', icon: 'braces', name: 'JSON Biçimlendirici', desc: 'JSON\'u doğrulayın, güzelleştirin veya küçültün.', k: 'json formatter validator beautify minify' },
    { slug: 'base64', cat: 'dev', icon: 'binary', name: 'Base64 Kodla / Çöz', desc: 'Metin ve dosyaları Base64\'e dönüştürün veya Base64\'ü çözün.', k: 'base64 encode decode data url' },
    { slug: 'url-kodla', cat: 'dev', icon: 'link', name: 'URL Kodla / Çöz', desc: 'URL encode/decode yapın ve URL parametrelerini ayrıştırın.', k: 'url encode decode query params' },
    { slug: 'uuid-olustur', cat: 'dev', icon: 'idCard', name: 'UUID Oluştur', desc: 'Toplu olarak rastgele UUID v4 ve kısa ID değerleri üretin.', k: 'uuid guid id generator' },
    { slug: 'zaman-damgasi', cat: 'dev', icon: 'clock', name: 'Zaman Damgası Dönüştürücü', desc: 'Unix zaman damgası ile tarih arasında dönüşüm yapın.', k: 'unix timestamp epoch date tarih' },
    // Security
    { slug: 'sifre-olustur', cat: 'security', icon: 'lock', name: 'Şifre Oluşturucu', desc: 'Güçlü ve rastgele şifreler oluşturun, güç seviyesini görün.', k: 'password generator sifre parola' },
    { slug: 'hash-olustur', cat: 'security', icon: 'fingerprint', name: 'Hash Oluştur', desc: 'Metin ve dosyalar için MD5, SHA-1, SHA-256, SHA-512 özetleri.', k: 'hash md5 sha256 sha1 checksum' },
  ];

  /* ---------------- Utilities ---------------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const h = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };

  const trLower = (s) => s.toLocaleLowerCase('tr-TR');
  const norm = (s) => trLower(s).replace(/[çğıöşüâîû]/g, (c) => ({ ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u', â: 'a', î: 'i', û: 'u' }[c]));

  function formatBytes(b, d = 1) {
    if (!b && b !== 0) return '';
    if (b < 1024) return b + ' B';
    const u = ['KB', 'MB', 'GB'];
    let i = -1;
    do { b /= 1024; i++; } while (b >= 1024 && i < u.length - 1);
    return b.toFixed(b < 10 ? d : 0).replace('.', ',') + ' ' + u[i];
  }
  const baseName = (n) => n.replace(/\.[^.]+$/, '');
  const debounce = (fn, ms = 200) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const nextFrame = () => new Promise((r) => requestAnimationFrame(() => r()));

  function download(data, filename, mime) {
    const blob = data instanceof Blob ? data : new Blob([data], { type: mime || 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename; a.style.display = 'none';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 30000);
  }

  async function copy(text, msg = 'Panoya kopyalandı') {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
    }
    toast(msg, 'success');
  }

  let toastWrap;
  function toast(msg, type = 'info', ms = 2600) {
    if (!toastWrap) { toastWrap = h('<div class="toasts" role="status" aria-live="polite"></div>'); document.body.appendChild(toastWrap); }
    const ic = type === 'success' ? 'checkCircle' : type === 'error' ? 'alert' : 'info';
    const el = h(`<div class="toast ${type}">${icon(ic)}<span>${esc(msg)}</span></div>`);
    toastWrap.appendChild(el);
    setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 220); }, ms);
  }

  function busy(btn, on, label) {
    if (!btn) return;
    if (on) {
      btn._html = btn.innerHTML;
      btn.classList.add('is-busy');
      btn.innerHTML = `<span class="spinner"></span>${label ? `<span>${esc(label)}</span>` : ''}`;
    } else {
      btn.classList.remove('is-busy');
      if (btn._html != null) btn.innerHTML = btn._html;
    }
  }

  const readBuffer = (file) => file.arrayBuffer ? file.arrayBuffer() : new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(r.result); r.onerror = rej; r.readAsArrayBuffer(file); });
  const readDataURL = (file) => new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(r.result); r.onerror = rej; r.readAsDataURL(file); });
  const readText = (file) => file.text ? file.text() : new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(r.result); r.onerror = rej; r.readAsText(file); });

  function loadImage(src) {
    return new Promise((res, rej) => {
      const img = new Image();
      img.onload = () => res(img);
      img.onerror = () => rej(new Error('Görsel yüklenemedi'));
      img.src = src instanceof Blob ? URL.createObjectURL(src) : src;
    });
  }

  const loaded = {};
  function loadScript(src) {
    if (!loaded[src]) {
      loaded[src] = new Promise((res, rej) => {
        const s = document.createElement('script');
        s.src = src; s.async = true; s.onload = res;
        s.onerror = () => { delete loaded[src]; rej(new Error('Kütüphane yüklenemedi: ' + src)); };
        document.head.appendChild(s);
      });
    }
    return loaded[src];
  }
  const V = '/assets/vendor/';
  const lib = {
    pdfLib: () => loadScript(V + 'pdf-lib.min.js').then(() => window.PDFLib),
    fontkit: () => loadScript(V + 'fontkit.umd.min.js').then(() => window.fontkit),
    pdfjs: () => loadScript(V + 'pdf.min.js').then(() => {
      const p = window.pdfjsLib;
      p.GlobalWorkerOptions.workerSrc = V + 'pdf.worker.min.js';
      return p;
    }),
    zip: () => loadScript(V + 'jszip.min.js').then(() => window.JSZip),
    qrcode: () => loadScript(V + 'qrcode.js').then(() => window.qrcode),
    jsqr: () => loadScript(V + 'jsQR.js').then(() => window.jsQR),
    barcode: () => loadScript(V + 'JsBarcode.all.min.js').then(() => window.JsBarcode),
  };

  /** Parse "1-3, 5, 8-" into array of 1-based page numbers (ordered, unique-preserving). */
  function parseRanges(str, max) {
    const out = [];
    const parts = String(str).split(/[,;\s]+/).filter(Boolean);
    if (!parts.length) throw new Error('Sayfa aralığı boş');
    for (const p of parts) {
      const m = p.match(/^(\d*)\s*-\s*(\d*)$/);
      if (m) {
        const a = m[1] ? +m[1] : 1;
        const b = m[2] ? +m[2] : max;
        if (a < 1 || b > max || a > b) throw new Error(`Geçersiz aralık: "${p}" (1–${max})`);
        for (let i = a; i <= b; i++) out.push(i);
      } else if (/^\d+$/.test(p)) {
        const n = +p;
        if (n < 1 || n > max) throw new Error(`Geçersiz sayfa: ${n} (1–${max})`);
        out.push(n);
      } else {
        throw new Error(`Anlaşılamayan ifade: "${p}"`);
      }
    }
    return out;
  }

  function matchesAccept(file, accept) {
    if (!accept) return true;
    const name = file.name.toLowerCase();
    return accept.split(',').map((s) => s.trim().toLowerCase()).some((a) => {
      if (a.startsWith('.')) return name.endsWith(a);
      if (a.endsWith('/*')) return file.type.startsWith(a.slice(0, -1));
      return file.type === a;
    });
  }

  /**
   * Build a dropzone inside `el`.
   * opts: { accept, multiple, title, subtitle, compact, paste, icon, onFiles(files) }
   */
  function dropzone(el, opts = {}) {
    const o = Object.assign({ multiple: false, title: 'Dosya seçin veya buraya sürükleyin', subtitle: '', icon: 'upload' }, opts);
    el.classList.add('dropzone');
    if (o.compact) el.classList.add('compact');
    el.setAttribute('role', 'button');
    el.tabIndex = 0;
    el.innerHTML = `
      <div class="dz-icon">${icon(o.icon)}</div>
      <div><h3>${esc(o.title)}</h3>${o.subtitle ? `<p>${esc(o.subtitle)}</p>` : ''}</div>
      <input type="file" ${o.accept ? `accept="${esc(o.accept)}"` : ''} ${o.multiple ? 'multiple' : ''}>`;
    const input = el.querySelector('input');
    const emit = (list) => {
      let files = Array.from(list || []);
      const bad = files.filter((f) => !matchesAccept(f, o.accept));
      files = files.filter((f) => matchesAccept(f, o.accept));
      if (bad.length) toast(`${bad.length} dosya desteklenmeyen türde olduğu için atlandı`, 'error');
      if (!o.multiple) files = files.slice(0, 1);
      if (files.length) o.onFiles(files);
    };
    el.addEventListener('click', (e) => { if (e.target !== input) input.click(); });
    el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); } });
    input.addEventListener('change', () => { emit(input.files); input.value = ''; });
    let depth = 0;
    el.addEventListener('dragenter', (e) => { e.preventDefault(); depth++; el.classList.add('drag'); });
    el.addEventListener('dragover', (e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'copy'; });
    el.addEventListener('dragleave', () => { if (--depth <= 0) { depth = 0; el.classList.remove('drag'); } });
    el.addEventListener('drop', (e) => { e.preventDefault(); depth = 0; el.classList.remove('drag'); emit(e.dataTransfer.files); });
    if (o.paste) {
      document.addEventListener('paste', (e) => {
        if (el.offsetParent === null) return;
        const t = e.target;
        if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
        const files = Array.from(e.clipboardData?.files || []);
        if (files.length) { e.preventDefault(); emit(files); }
      });
    }
    return { open: () => input.click(), input };
  }

  /** Allow whole-page drop to feed a dropzone handler (when the dropzone is hidden). */
  function pageDrop(onFiles, accept) {
    window.addEventListener('dragover', (e) => { if (e.dataTransfer?.types?.includes('Files')) e.preventDefault(); });
    window.addEventListener('drop', (e) => {
      if (e.defaultPrevented) return;
      if (!e.dataTransfer?.files?.length) return;
      e.preventDefault();
      const files = Array.from(e.dataTransfer.files).filter((f) => matchesAccept(f, accept));
      if (files.length) onFiles(files);
    });
  }

  /**
   * Pointer-based sortable for lists and grids.
   * Mouse: drag anywhere on item. Touch/pen: drag via `handle`.
   */
  function sortable(list, { items = '.sortable-item', handle = '.drag-handle, .t-grip', onEnd } = {}) {
    let drag = null, sx = 0, sy = 0, started = false, pid = null;
    list.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return;
      const item = e.target.closest(items);
      if (!item || !list.contains(item)) return;
      const onHandle = handle && e.target.closest(handle);
      if (e.pointerType !== 'mouse' && !onHandle) return;
      if (!onHandle && e.target.closest('button, input, select, textarea, a, label')) return;
      drag = item; sx = e.clientX; sy = e.clientY; started = false; pid = e.pointerId;
      if (onHandle) e.preventDefault();
    });
    window.addEventListener('pointermove', (e) => {
      if (!drag || e.pointerId !== pid) return;
      if (!started) {
        if (Math.hypot(e.clientX - sx, e.clientY - sy) < 6) return;
        started = true;
        drag.classList.add('sortable-dragging');
        document.body.classList.add('is-sorting');
      }
      e.preventDefault();
      const under = document.elementFromPoint(e.clientX, e.clientY);
      const over = under && under.closest(items);
      if (!over || over === drag || !list.contains(over)) return;
      const r = over.getBoundingClientRect();
      const isGrid = getComputedStyle(list).display.includes('grid') && r.width < list.clientWidth * 0.7;
      const after = isGrid ? e.clientX > r.left + r.width / 2 : e.clientY > r.top + r.height / 2;
      const ref = after ? over.nextElementSibling : over;
      if (ref !== drag) list.insertBefore(drag, ref);
    }, { passive: false });
    const end = (e) => {
      if (!drag || (e && e.pointerId !== pid)) return;
      const was = started;
      drag.classList.remove('sortable-dragging');
      document.body.classList.remove('is-sorting');
      drag = null; started = false;
      if (was) {
        // swallow the click that follows a drag
        const stop = (ev) => { ev.stopPropagation(); ev.preventDefault(); };
        window.addEventListener('click', stop, { capture: true, once: true });
        setTimeout(() => window.removeEventListener('click', stop, { capture: true }), 50);
        onEnd && onEnd();
      }
    };
    window.addEventListener('pointerup', end);
    window.addEventListener('pointercancel', end);
  }

  /** Segmented control: <div class="seg" data-value="a"><button data-v="a">..</button></div> */
  function seg(el, onChange) {
    const btns = $$('button', el);
    const set = (v, fire = true) => {
      el.dataset.value = v;
      btns.forEach((b) => { b.classList.toggle('active', b.dataset.v === v); b.setAttribute('aria-pressed', b.dataset.v === v); });
      if (fire && onChange) onChange(v);
    };
    btns.forEach((b) => { b.type = 'button'; b.addEventListener('click', () => set(b.dataset.v)); });
    set(el.dataset.value || btns[0].dataset.v, false);
    return { get: () => el.dataset.value, set };
  }

  /** Bind range input to its <output> sibling. */
  function bindRange(input, fmt = (v) => v) {
    const out = input.closest('.field')?.querySelector('output');
    const upd = () => { if (out) out.textContent = fmt(input.value); };
    input.addEventListener('input', upd); upd();
  }

  function resultBox({ title, text, actions = [] }) {
    const el = h(`<div class="result"><div class="r-icon">${icon('check')}</div><div class="grow"><h4>${esc(title)}</h4>${text ? `<p>${esc(text)}</p>` : ''}</div><div class="row"></div></div>`);
    const row = el.querySelector('.row');
    actions.forEach((a) => {
      const b = h(`<button type="button" class="btn ${a.primary ? 'btn-primary' : ''}">${a.icon ? icon(a.icon) : ''}<span>${esc(a.label)}</span></button>`);
      b.addEventListener('click', a.onClick);
      row.appendChild(b);
    });
    return el;
  }

  /** Render a pdf.js page into a canvas, fitting a max dimension (CSS px) */
  async function renderPdfPage(page, { maxSize = 220, scale, rotation = 0, canvas } = {}) {
    const base = page.getViewport({ scale: 1, rotation: (page.rotate + rotation) % 360 });
    const s = scale || Math.min(maxSize / base.width, maxSize / base.height) * Math.min(window.devicePixelRatio || 1, 2);
    const vp = page.getViewport({ scale: s, rotation: (page.rotate + rotation) % 360 });
    const c = canvas || document.createElement('canvas');
    c.width = Math.ceil(vp.width); c.height = Math.ceil(vp.height);
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, c.width, c.height);
    await page.render({ canvasContext: ctx, viewport: vp }).promise;
    return c;
  }

  /** Open a PDF with pdf.js (copies the buffer, since pdf.js detaches it). */
  async function pdfjsOpen(buf) {
    const p = await lib.pdfjs();
    return p.getDocument({ data: new Uint8Array(buf.slice(0)), isEvalSupported: false }).promise;
  }

  /** Open a PDF with pdf-lib. */
  async function pdfLibOpen(buf) {
    const L = await lib.pdfLib();
    const doc = await L.PDFDocument.load(buf, { ignoreEncryption: true, updateMetadata: false });
    if (doc.isEncrypted) throw new Error('encrypted');
    return doc;
  }

  /** Font able to render Turkish characters for pdf-lib (lazy, cached). */
  let trFontBytes = null;
  async function embedTurkishFont(doc, text) {
    const L = await lib.pdfLib();
    // WinAnsi can't encode ğ ş ı İ Ş Ğ etc. Use bundled TTF only when needed.
    if (!/[^\x20-\x7E -ÿ]/.test(text || '')) {
      return doc.embedFont(L.StandardFonts.HelveticaBold);
    }
    const fk = await lib.fontkit();
    doc.registerFontkit(fk);
    if (!trFontBytes) trFontBytes = await fetch(V + 'DejaVuSans-Bold.ttf').then((r) => r.arrayBuffer());
    return doc.embedFont(trFontBytes, { subset: true });
  }

  /** Lazily render pdf.js thumbnails into elements having data-page and a .page child. */
  function lazyThumbs(doc, els, { size = 160 } = {}) {
    const queue = [];
    let running = false;
    const run = async () => {
      if (running) return;
      running = true;
      while (queue.length) {
        const el = queue.shift();
        if (el._done || !el.isConnected) continue;
        el._done = true;
        try {
          const page = await doc.getPage(+el.dataset.page);
          const c = await renderPdfPage(page, { maxSize: size });
          el.querySelector('.page').replaceChildren(c);
          el.dispatchEvent(new CustomEvent('thumb', { detail: c }));
        } catch (e) { console.warn(e); }
      }
      running = false;
    };
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { queue.push(e.target); io.unobserve(e.target); } });
      run();
    }, { rootMargin: '400px' });
    els.forEach((el) => io.observe(el));
    return io;
  }

  function canvasToBlob(canvas, type = 'image/png', quality) {
    return new Promise((res) => canvas.toBlob(res, type, quality));
  }

  function pdfErrorMessage(err) {
    const m = String(err && (err.message || err));
    if (/encrypt|password/i.test(m)) return 'Bu PDF şifreli. Lütfen şifresiz bir dosya kullanın.';
    if (/Invalid PDF|No PDF header|Failed to parse/i.test(m)) return 'Dosya geçerli bir PDF değil veya bozuk.';
    return 'İşlem başarısız: ' + m;
  }

  /* ---------------- Theme ---------------- */
  function getTheme() { return document.documentElement.dataset.theme || 'light'; }
  function setTheme(t) {
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem('theme', t); } catch {}
    $$('.theme-toggle').forEach((b) => (b.innerHTML = icon(t === 'dark' ? 'sun' : 'moon')));
  }

  /* ---------------- Layout ---------------- */
  const toolUrl = (t) => `/${t.slug}/`;
  const cardHTML = (t) => `
    <a class="tool-card" href="${toolUrl(t)}" style="--c:${CATS[t.cat].color}" data-slug="${t.slug}">
      <div class="ti">${icon(t.icon)}</div>
      <div><h3>${esc(t.name)}</h3></div>
      <p>${esc(t.desc)}</p>
      ${t.isNew ? '<span class="new">Yeni</span>' : ''}
      ${icon('arrowRight', 'class="arrow"')}
    </a>`;

  function renderHeader() {
    const el = $('#site-header');
    if (!el) return;
    const current = document.body.dataset.tool;
    const curCat = current ? (TOOLS.find((t) => t.slug === current) || {}).cat : null;
    const isMac = /Mac|iPhone|iPad/.test(navigator.platform);
    el.outerHTML = `
    <header class="site-header">
      <div class="container">
        <a class="logo" href="/" aria-label="${SITE.name} ana sayfa">
          <span class="logo-mark">${icon('logo')}</span>
          <span>notettiklerim</span><small>/tools</small>
        </a>
        <nav class="nav" id="main-nav" aria-label="Kategoriler">
          ${Object.entries(CATS).map(([k, c]) => `<a href="/#${k}" class="${curCat === k ? 'active' : ''}">${c.short}</a>`).join('')}
        </nav>
        <div class="header-actions">
          <button class="search-trigger" type="button" data-cmdk aria-label="Araç ara">
            ${icon('search')}<span>Araç ara…</span><kbd>${isMac ? '⌘' : 'Ctrl'} K</kbd>
          </button>
          <button class="btn btn-ghost btn-icon theme-toggle" type="button" aria-label="Tema değiştir" title="Tema değiştir">${icon(getTheme() === 'dark' ? 'sun' : 'moon')}</button>
          <button class="btn btn-ghost btn-icon menu-toggle" type="button" aria-label="Menü" aria-controls="main-nav">${icon('menu')}</button>
        </div>
      </div>
    </header>`;
    $$('.theme-toggle').forEach((b) => b.addEventListener('click', () => setTheme(getTheme() === 'dark' ? 'light' : 'dark')));
    const nav = $('#main-nav');
    $('.menu-toggle')?.addEventListener('click', (e) => {
      const open = nav.classList.toggle('open');
      e.currentTarget.innerHTML = icon(open ? 'x' : 'menu');
    });
    $$('#main-nav a').forEach((a) => a.addEventListener('click', () => { nav.classList.remove('open'); $('.menu-toggle').innerHTML = icon('menu'); }));
    $$('[data-cmdk]').forEach((b) => b.addEventListener('click', openPalette));
  }

  function renderFooter() {
    const el = $('#site-footer');
    if (!el) return;
    const cols = ['pdf', 'qr', 'image', 'dev'].map((k) => `
      <div><h4>${CATS[k].short}</h4><ul>${TOOLS.filter((t) => t.cat === k).slice(0, 6).map((t) => `<li><a href="${toolUrl(t)}">${esc(t.name)}</a></li>`).join('')}</ul></div>`).join('');
    el.outerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <a class="logo" href="/"><span class="logo-mark">${icon('logo')}</span><span>notettiklerim</span><small>/tools</small></a>
            <p>Ücretsiz, hızlı ve gizlilik dostu online araçlar. Dosyalarınız hiçbir sunucuya yüklenmez; tüm işlemler tarayıcınızda gerçekleşir.</p>
          </div>
          ${cols}
        </div>
        <div class="footer-bottom">
          <span>© ${SITE.year} notettiklerim.com — Tüm hakları saklıdır.</span>
          <span class="row" style="gap:6px">${icon('shield', 'width="15" height="15" style="color:var(--success)"')} Kayıt yok · Reklam yok · Dosya yükleme yok</span>
        </div>
      </div>
    </footer>`;
  }

  function renderToolChrome() {
    const slug = document.body.dataset.tool;
    if (!slug) return;
    const t = TOOLS.find((x) => x.slug === slug);
    if (!t) return;
    const c = CATS[t.cat];
    document.body.style.setProperty('--c', c.color);
    const hero = $('#tool-hero');
    if (hero) {
      hero.className = 'tool-hero';
      hero.innerHTML = `
        <nav class="crumbs" aria-label="Konum">
          <a href="/">Ana sayfa</a>${icon('chevronRight')}<a href="/#${t.cat}">${c.name}</a>${icon('chevronRight')}<span>${esc(t.name)}</span>
        </nav>
        <div class="tool-title" style="--c:${c.color}">
          <div class="ti">${icon(t.icon)}</div>
          <div><h1>${esc(t.name)}</h1><p>${esc(t.desc)}</p></div>
        </div>`;
    }
    const rel = $('#related');
    if (rel) {
      const same = TOOLS.filter((x) => x.cat === t.cat && x.slug !== slug);
      const other = TOOLS.filter((x) => x.cat !== t.cat);
      const list = same.slice(0, 4);
      while (list.length < 4 && other.length) list.push(other.splice(Math.floor(Math.random() * other.length), 1)[0]);
      rel.className = 'related';
      rel.innerHTML = `<h2>Diğer araçlar</h2><div class="tool-grid">${list.map(cardHTML).join('')}</div>`;
    }
    // structured data
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'WebApplication', name: t.name, description: t.desc,
      url: SITE.url + toolUrl(t), applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any', inLanguage: 'tr',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
    });
    document.head.appendChild(ld);
    // remember recent
    try {
      const r = JSON.parse(localStorage.getItem('recent') || '[]').filter((s) => s !== slug);
      r.unshift(slug); localStorage.setItem('recent', JSON.stringify(r.slice(0, 6)));
    } catch {}
  }

  /* ---------------- Command palette ---------------- */
  function searchTools(q) {
    const n = norm(q.trim());
    if (!n) return TOOLS.slice();
    const words = n.split(/\s+/);
    return TOOLS.map((t) => {
      const name = norm(t.name), hay = name + ' ' + norm(t.desc) + ' ' + t.k + ' ' + norm(CATS[t.cat].name);
      if (!words.every((w) => hay.includes(w))) return null;
      let score = 0;
      if (name.startsWith(n)) score += 10;
      if (name.includes(n)) score += 5;
      words.forEach((w) => { if (name.includes(w)) score += 2; });
      return { t, score };
    }).filter(Boolean).sort((a, b) => b.score - a.score).map((x) => x.t);
  }

  let paletteEl = null;
  function openPalette() {
    if (paletteEl) return;
    paletteEl = h(`
      <div class="cmdk-backdrop" role="dialog" aria-modal="true" aria-label="Araç ara">
        <div class="cmdk">
          <div class="cmdk-input">${icon('search')}<input type="text" placeholder="Hangi aracı arıyorsunuz?" autocomplete="off" spellcheck="false"><kbd>ESC</kbd></div>
          <div class="cmdk-list" role="listbox"></div>
          <div class="cmdk-foot"><span><kbd>↑</kbd> <kbd>↓</kbd> gezin</span><span><kbd>↵</kbd> aç</span><span><kbd>esc</kbd> kapat</span></div>
        </div>
      </div>`);
    document.body.appendChild(paletteEl);
    const input = $('input', paletteEl), list = $('.cmdk-list', paletteEl);
    let results = [], active = 0;
    const draw = () => {
      results = searchTools(input.value);
      active = Math.min(active, Math.max(0, results.length - 1));
      list.innerHTML = results.length ? results.map((t, i) => `
        <a class="cmdk-item ${i === active ? 'active' : ''}" href="${toolUrl(t)}" role="option" style="--c:${CATS[t.cat].color}" data-i="${i}">
          <div class="ti">${icon(t.icon)}</div><div><b>${esc(t.name)}</b><small>${esc(t.desc)}</small></div>
        </a>`).join('') : `<div class="cmdk-empty">"${esc(input.value)}" için sonuç bulunamadı</div>`;
    };
    const move = (d) => {
      if (!results.length) return;
      active = (active + d + results.length) % results.length;
      $$('.cmdk-item', list).forEach((el, i) => el.classList.toggle('active', i === active));
      $$('.cmdk-item', list)[active]?.scrollIntoView({ block: 'nearest' });
    };
    input.addEventListener('input', () => { active = 0; draw(); });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
      else if (e.key === 'Enter') { e.preventDefault(); if (results[active]) location.href = toolUrl(results[active]); }
    });
    list.addEventListener('mousemove', (e) => {
      const it = e.target.closest('.cmdk-item');
      if (it && +it.dataset.i !== active) { active = +it.dataset.i; $$('.cmdk-item', list).forEach((el, i) => el.classList.toggle('active', i === active)); }
    });
    paletteEl.addEventListener('mousedown', (e) => { if (e.target === paletteEl) closePalette(); });
    draw();
    setTimeout(() => input.focus(), 10);
  }
  function closePalette() { if (paletteEl) { paletteEl.remove(); paletteEl = null; } }
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); paletteEl ? closePalette() : openPalette(); }
    else if (e.key === 'Escape') closePalette();
    else if (e.key === '/' && !paletteEl && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName) && !document.activeElement?.isContentEditable) {
      const hs = $('#home-search');
      if (hs) { e.preventDefault(); hs.focus(); } else { e.preventDefault(); openPalette(); }
    }
  });

  /* ---------------- Home ---------------- */
  function renderHome() {
    const root = $('#home-tools');
    if (!root) return;
    const filter = $('#cat-filter');
    const search = $('#home-search');
    let cat = (location.hash || '').slice(1);
    if (!CATS[cat]) cat = 'all';
    filter.innerHTML = `<button type="button" data-cat="all">${icon('logo')} Tümü <span class="muted">${TOOLS.length}</span></button>` +
      Object.entries(CATS).map(([k, c]) => `<button type="button" data-cat="${k}">${icon(c.icon)} ${c.short}</button>`).join('');
    filter.classList.add('tabs', 'cat-filter');
    const draw = () => {
      const q = search.value.trim();
      $$('button', filter).forEach((b) => b.classList.toggle('active', b.dataset.cat === cat));
      if (q) {
        const res = searchTools(q).filter((t) => cat === 'all' || t.cat === cat);
        root.innerHTML = res.length
          ? `<div class="section-head"><h2>Arama sonuçları</h2><span class="count">${res.length}</span></div><div class="tool-grid">${res.map(cardHTML).join('')}</div>`
          : `<div class="empty-state">${icon('search')}<p>"${esc(q)}" ile eşleşen araç bulunamadı.</p></div>`;
        return;
      }
      const cats = cat === 'all' ? Object.keys(CATS) : [cat];
      root.innerHTML = cats.map((k) => {
        const list = TOOLS.filter((t) => t.cat === k);
        return `<section id="sec-${k}">
          <div class="section-head"><div class="cat-icon" style="background:${CATS[k].color}">${icon(CATS[k].icon)}</div><h2>${CATS[k].name}</h2><span class="count">${list.length}</span></div>
          <div class="tool-grid">${list.map(cardHTML).join('')}</div>
        </section>`;
      }).join('');
    };
    filter.addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      cat = b.dataset.cat;
      history.replaceState(null, '', cat === 'all' ? location.pathname : '#' + cat);
      draw();
    });
    window.addEventListener('hashchange', () => {
      const c = location.hash.slice(1);
      cat = CATS[c] ? c : 'all';
      draw();
      $('#tools')?.scrollIntoView({ behavior: 'smooth' });
    });
    search.addEventListener('input', draw);
    search.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { const r = searchTools(search.value).filter((t) => cat === 'all' || t.cat === cat); if (r[0]) location.href = toolUrl(r[0]); }
    });
    const cnt = $('#tool-count'); if (cnt) cnt.textContent = TOOLS.length;
    draw();
    if (CATS[cat]) setTimeout(() => $('#tools')?.scrollIntoView(), 50);
  }

  /* ---------------- Boot ---------------- */
  function boot() {
    renderHeader();
    renderToolChrome();
    renderFooter();
    renderHome();
    $$('[data-copy-target]').forEach((b) => b.addEventListener('click', () => {
      const t = $(b.dataset.copyTarget);
      const v = t && ('value' in t ? t.value : t.textContent);
      if (v) copy(v); else toast('Kopyalanacak içerik yok', 'error');
    }));
  }

  window.T = {
    SITE, CATS, TOOLS, icon, $, $$, esc, h, trLower, norm, formatBytes, baseName, debounce, sleep, nextFrame,
    download, copy, toast, busy, readBuffer, readDataURL, readText, loadImage, loadScript, lib,
    parseRanges, dropzone, pageDrop, sortable, seg, bindRange, resultBox, renderPdfPage, lazyThumbs, hydrateIcons, pdfjsOpen, pdfLibOpen, embedTurkishFont, canvasToBlob, pdfErrorMessage, setTheme,
  };

  function hydrateIcons(root = document) {
    $$('i[data-icon]', root).forEach((el) => { el.outerHTML = icon(el.dataset.icon); });
  }
  hydrateIcons();

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
