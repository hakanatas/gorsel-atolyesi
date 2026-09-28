/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir (metin). Zamanlar film saniyesidir.
   note: öğretmen için önerilen seslendirme cümlesi.
   Senaryo değişirse: node scripts/build.mjs (zamanlar yeniden hesaplanır).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 0.9, end: 6.9, tr: "Okul gezisinde güzel bir fotoğraf çektim", en: "I took a nice photo on the school trip",
      note: "Karo okul gezisinde bir fotoğraf çekti. Ama fotoğraf biraz karanlık ve kenarında gereksiz şeyler var." },
    { scene: 1, start: 7.7, end: 13.4, tr: "Onu nasıl daha güzel yapabilirim?", en: "How can I make it look better?",
      note: "Bir görseli bilgisayarda nasıl düzenleyebiliriz? Önce görselleri tanıyalım." },
    { scene: 2, start: 16.3, end: 22.9, tr: "Piksel: görseli oluşturan minik renkli kareler", en: "Pixel: the tiny coloured squares that make an image",
      note: "Bir fotoğrafı çok büyütürsek minik renkli kareler görürüz. Bunlara piksel denir." },
    { scene: 2, start: 23.7, end: 29.7, tr: "Çözünürlük: çok piksel, daha net görüntü", en: "Resolution: more pixels, a sharper picture",
      note: "Bir görseldeki piksel sayısına çözünürlük denir. Piksel sayısı arttıkça görüntü daha net olur." },
    { scene: 2, start: 30.5, end: 36.3, tr: "Vektörel görsel büyütünce de net kalır", en: "A vector image stays sharp when enlarged",
      note: "Vektörel görseller çizgi ve şekillerden oluşur. Onları ne kadar büyütürsek büyütelim bozulmazlar." },
    { scene: 2, start: 37.1, end: 43.8, tr: "Fotoğraflar bitmap, logolar çoğu zaman vektörel", en: "Photos are bitmaps; logos are often vectors",
      note: "Piksellerden oluşan görsellere bitmap denir; fotoğraflar böyledir ve .png ya da .jpg olarak kaydedilir. Logolar ise çoğu zaman vektöreldir, .svg olarak kaydedilir." },
    { scene: 3, start: 46.6, end: 52.3, tr: "Her iş için uygun bir program var", en: "There is a right program for every job",
      note: "Görsel düzenleme programları farklı işler için yapılmıştır. Yapacağımız işe göre programı seçeriz." },
    { scene: 3, start: 53.1, end: 59, tr: "Fotoğraf düzenleme ya da çizim programı", en: "A photo editor or a drawing program",
      note: "Bir fotoğrafı kırpmak için fotoğraf düzenleme programı, bir logo çizmek için vektörel çizim programı kullanırız." },
    { scene: 3, start: 59.8, end: 65.8, tr: "Üç boyutlu tasarım ya da yapay zekâ aracı", en: "A 3D design tool or an AI tool",
      note: "Bir maket tasarlamak için üç boyutlu tasarım programı kullanırız. Yapay zekâ destekli araçlar ise yazdığımız bir cümleden görsel üretebilir." },
    { scene: 4, start: 68.6, end: 74.3, tr: "Fotoğrafı aç, gereksiz kenarları kırp", en: "Open the photo and crop the extra edges",
      note: "Fotoğrafı programda açarız. Kırp aracıyla kenardaki gereksiz kısımları keseriz." },
    { scene: 4, start: 75.1, end: 80.9, tr: "Parlaklığı artır, fotoğraf aydınlansın", en: "Raise the brightness to light up the photo",
      note: "Fotoğraf karanlık kaldıysa parlaklık ayarını artırırız." },
    { scene: 4, start: 81.8, end: 87.5, tr: "Görselin üstüne bir başlık yaz", en: "Write a title on the picture",
      note: "Yazı aracıyla görselin üstüne bir başlık ekleyebiliriz: Gezimiz." },
    { scene: 4, start: 88.3, end: 94, tr: "Boyutu küçült ve kaydet", en: "Make it smaller and save it",
      note: "Paylaşmadan önce görselin boyutunu küçültürüz; dosya daha az yer kaplar. Sonra anlamlı bir adla kaydederiz: gezimiz.png." },
    { scene: 5, start: 96.7, end: 102.6, tr: "Küçük bir kırpma için 3B programı açmak", en: "Opening a 3D program for a small crop",
      note: "Bir fotoğrafı kırpmak için büyük bir üç boyutlu tasarım programı açmak zaman kaybıdır. Verimsiz." },
    { scene: 5, start: 103.4, end: 109.1, tr: "Logoyu vektörel programda çizmek", en: "Drawing a logo in a vector program",
      note: "Logoyu vektörel programda çizersek afişte de, rozette de büyütünce net kalır. Verimli." },
    { scene: 5, start: 109.9, end: 116.5, tr: "Yapay zekâ görselini kontrol etmeden kullanmak", en: "Using an AI image without checking it",
      note: "Yapay zekâ araçları hızlıdır ama hata yapabilir. Ürettiği görseli kontrol etmeden kullanmak doğru değil. Verimsiz." },
    { scene: 6, start: 119.3, end: 125.1, tr: "Aklında kalsın: işe uygun programı seç", en: "Remember: choose the right program for the job",
      note: "Aklında kalsın: fotoğraf piksellerden, logo çoğu zaman şekillerden oluşur. Yapacağın işe uygun programı seç." },
    { scene: 6, start: 126, end: 131.7, tr: "Birkaç araçla görselin güzelleşir!", en: "A few tools make your picture shine!",
      note: "Kırpma, parlaklık, yazı ve boyut araçlarıyla görsellerini kolayca güzelleştirebilirsin." },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.BF = root.BF || {}; root.BF.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
