/* ─────────────────────────────────────────────────────────────
   GÖRSEL ATÖLYESİ — BTY.5.2.1 (senaryo)
   Her vuruş bir altyazıdır: tr, en, note (öğretmen için seslendirme).
   Değiştirdikten sonra: npm run build
   ───────────────────────────────────────────────────────────── */
BF.defineFilm({
  meta: {
    slug: 'gorsel-atolyesi', title: 'Görsel Atölyesi', titleEn: 'The Picture Workshop', code: 'BTY.5.2.1',
    outcomeEn: 'Making use of image editing programs',
    summary: 'Görsellerin temel özellikleri tanıtılır: piksel, çözünürlük, bitmap ve vektörel görsel. Yapılacak işe göre uygun program seçilir: fotoğraf düzenleme, çizim, üç boyutlu tasarım ya da yapay zekâ destekli araç. Bir görsel düzenleme programında fotoğraf açılır, kırpılır, parlaklığı ayarlanır, yazı eklenir, boyutu küçültülür ve kaydedilir. Son olarak program seçimleri kullanım alanı ve verimlilik açısından değerlendirilir.',
    summaryEn: 'Pixels, resolution, bitmap and vector images are introduced; the right program is chosen for each job; Karo opens, crops, brightens, labels, resizes and saves a photo; and program choices are judged for purpose and efficiency.',
    blurb: 'Piksel, çözünürlük, bitmap ve vektörel; uygun programı seçmek ve temel düzenleme araçları.',
    posterAlt: 'Başlık ve Karo; çevresinde fotoğraf, fırça, palet ve piksel karoları',
  },
  scenes: [
    { type: 'intro', icons: [{ icon: 'photo', c: 'kobalt' }, { icon: 'brush', c: 'mercan' }, { icon: 'palette', c: 'safran' }, { icon: 'pixels', c: 'turkuaz' }, { icon: 'vector', c: 'mor' }, { icon: 'fileImg', c: 'mercan' }, { icon: 'printer3d', c: 'zumrut' }, { icon: 'ai', c: 'kobalt' }],
      beats: [
        { tr: 'Okul gezisinde güzel bir fotoğraf çektim', en: 'I took a nice photo on the school trip',
          note: 'Karo okul gezisinde bir fotoğraf çekti. Ama fotoğraf biraz karanlık ve kenarında gereksiz şeyler var.' },
        { tr: 'Onu nasıl daha güzel yapabilirim?', en: 'How can I make it look better?',
          note: 'Bir görseli bilgisayarda nasıl düzenleyebiliriz? Önce görselleri tanıyalım.' },
      ] },
    { type: 'cards', name: 'Görselin özellikleri', en: 'Features of images', desc: 'Piksel, çözünürlük, bitmap ve vektörel görsel.', out: 'a',
      cards: [
        { word: 'PİKSEL', def: 'Görseli oluşturan minik renkli kareler', icon: 'pixels', c: 'turkuaz' },
        { word: 'ÇÖZÜNÜRLÜK', def: 'Görseldeki piksel sayısı; çok piksel, net görüntü', icon: 'photo', c: 'kobalt' },
        { word: 'VEKTÖREL', def: 'Çizgi ve şekillerden oluşur; büyüyünce bozulmaz', icon: 'vector', c: 'mor' },
      ],
      result: { word: 'GÖRSEL TÜRLERİ', c: 'safran', join: false, chips: ['bitmap: .png .jpg', 'vektörel: .svg'], line: 'Fotoğraf bitmaptir; logo çoğu zaman vektöreldir' },
      beats: [
        { tr: 'Piksel: görseli oluşturan minik renkli kareler', en: 'Pixel: the tiny coloured squares that make an image',
          note: 'Bir fotoğrafı çok büyütürsek minik renkli kareler görürüz. Bunlara piksel denir.' },
        { tr: 'Çözünürlük: çok piksel, daha net görüntü', en: 'Resolution: more pixels, a sharper picture',
          note: 'Bir görseldeki piksel sayısına çözünürlük denir. Piksel sayısı arttıkça görüntü daha net olur.' },
        { tr: 'Vektörel görsel büyütünce de net kalır', en: 'A vector image stays sharp when enlarged',
          note: 'Vektörel görseller çizgi ve şekillerden oluşur. Onları ne kadar büyütürsek büyütelim bozulmazlar.' },
        { tr: 'Fotoğraflar bitmap, logolar çoğu zaman vektörel', en: 'Photos are bitmaps; logos are often vectors',
          note: 'Piksellerden oluşan görsellere bitmap denir; fotoğraflar böyledir ve .png ya da .jpg olarak kaydedilir. Logolar ise çoğu zaman vektöreldir, .svg olarak kaydedilir.' },
      ] },
    { type: 'sort', name: 'Uygun program', en: 'The right program', desc: 'Yapılacak işe göre fotoğraf, çizim, üç boyutlu ya da yapay zekâ destekli program seçilir.', out: 'b',
      bins: [{ label: 'FOTOĞRAF', c: 'kobalt' }, { label: 'ÇİZİM', c: 'mor' }, { label: '3 BOYUT', c: 'zumrut' }, { label: 'YAPAY ZEKÂ', c: 'mercan' }],
      items: [
        { icon: 'photo', name: 'Gezi fotoğrafını kırpmak', bin: 0, beat: 1 },
        { icon: 'vector', name: 'Sınıf logosu çizmek', bin: 1, beat: 1 },
        { icon: 'printer3d', name: 'Ev maketi tasarlamak', bin: 2, beat: 2 },
        { icon: 'ai', name: 'Yazıdan resim üretmek', bin: 3, beat: 2 },
      ],
      beats: [
        { tr: 'Her iş için uygun bir program var', en: 'There is a right program for every job',
          note: 'Görsel düzenleme programları farklı işler için yapılmıştır. Yapacağımız işe göre programı seçeriz.' },
        { tr: 'Fotoğraf düzenleme ya da çizim programı', en: 'A photo editor or a drawing program',
          note: 'Bir fotoğrafı kırpmak için fotoğraf düzenleme programı, bir logo çizmek için vektörel çizim programı kullanırız.' },
        { tr: 'Üç boyutlu tasarım ya da yapay zekâ aracı', en: 'A 3D design tool or an AI tool',
          note: 'Bir maket tasarlamak için üç boyutlu tasarım programı kullanırız. Yapay zekâ destekli araçlar ise yazdığımız bir cümleden görsel üretebilir.' },
      ] },
    { type: 'app', app: 'image', title: 'Görsel Düzenleyici', name: 'Arayüzü kullanalım', en: 'Using the interface', desc: 'Aç, kırp, parlaklık, yazı ekle, boyutlandır ve kaydet.', out: 'c',
      data: { text: 'GEZİMİZ', file: 'gezimiz.png' },
      tools: [{ id: 'open', label: 'Aç' }, { id: 'crop', label: 'Kırp' }, { id: 'bright', label: 'Parlaklık' }, { id: 'text', label: 'Yazı' }, { id: 'resize', label: 'Boyut' }, { id: 'save', label: 'Kaydet' }],
      beats: [
        { tr: 'Fotoğrafı aç, gereksiz kenarları kırp', en: 'Open the photo and crop the extra edges', tools: ['open', 'crop'], hint: 'Kırp: fazlalığı kes',
          note: 'Fotoğrafı programda açarız. Kırp aracıyla kenardaki gereksiz kısımları keseriz.' },
        { tr: 'Parlaklığı artır, fotoğraf aydınlansın', en: 'Raise the brightness to light up the photo', tool: 'bright', hint: 'Ayarlar → Parlaklık',
          note: 'Fotoğraf karanlık kaldıysa parlaklık ayarını artırırız.' },
        { tr: 'Görselin üstüne bir başlık yaz', en: 'Write a title on the picture', tool: 'text', hint: 'Yazı aracı → "GEZİMİZ"',
          note: 'Yazı aracıyla görselin üstüne bir başlık ekleyebiliriz: Gezimiz.' },
        { tr: 'Boyutu küçült ve kaydet', en: 'Make it smaller and save it', tools: ['resize', 'save'], hint: '4000 → 1200 piksel',
          note: 'Paylaşmadan önce görselin boyutunu küçültürüz; dosya daha az yer kaplar. Sonra anlamlı bir adla kaydederiz: gezimiz.png.' },
      ] },
    { type: 'judge', name: 'Doğru seçim mi?', en: 'A good choice?', desc: 'Program seçimleri kullanım alanı ve verimlilik açısından değerlendirilir.', out: 'ç', labels: { ok: 'verimli', no: 'verimsiz' },
      beats: [
        { tr: 'Küçük bir kırpma için 3B programı açmak', en: 'Opening a 3D program for a small crop',
          note: 'Bir fotoğrafı kırpmak için büyük bir üç boyutlu tasarım programı açmak zaman kaybıdır. Verimsiz.',
          row: { icon: 'printer3d', text: 'Fotoğrafı kırpmak için 3B tasarım programını açıyorum', ok: false, why: 'Basit bir fotoğraf aracı yeter' } },
        { tr: 'Logoyu vektörel programda çizmek', en: 'Drawing a logo in a vector program',
          note: 'Logoyu vektörel programda çizersek afişte de, rozette de büyütünce net kalır. Verimli.',
          row: { icon: 'vector', text: 'Sınıf logomuzu vektörel çizim programında çiziyorum', ok: true, why: 'Her boyutta net kalır' } },
        { tr: 'Yapay zekâ görselini kontrol etmeden kullanmak', en: 'Using an AI image without checking it',
          note: 'Yapay zekâ araçları hızlıdır ama hata yapabilir. Ürettiği görseli kontrol etmeden kullanmak doğru değil. Verimsiz.',
          row: { icon: 'ai', text: 'Yapay zekânın ürettiği görseli hiç bakmadan kullanıyorum', ok: false, why: 'Önce kontrol etmeliyim' } },
      ] },
    { type: 'summary',
      lines: [
        { icon: 'pixels', c: 'turkuaz', text: 'Bitmap piksellerden, vektörel şekillerden oluşur' },
        { icon: 'palette', c: 'safran', text: 'İşe uygun programı seç' },
        { icon: 'photo', c: 'kobalt', text: 'Aç, kırp, ayarla, yaz, küçült, kaydet' },
      ],
      beats: [
        { tr: 'Aklında kalsın: işe uygun programı seç', en: 'Remember: choose the right program for the job',
          note: 'Aklında kalsın: fotoğraf piksellerden, logo çoğu zaman şekillerden oluşur. Yapacağın işe uygun programı seç.' },
        { tr: 'Birkaç araçla görselin güzelleşir!', en: 'A few tools make your picture shine!',
          note: 'Kırpma, parlaklık, yazı ve boyut araçlarıyla görsellerini kolayca güzelleştirebilirsin.' },
      ] },
  ],
});
