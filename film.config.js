/* ─────────────────────────────────────────────────────────────
   FİLM KİMLİĞİ / Film identity — scripts/build.mjs ile scenes/film.js'ten üretilir.
   Süreler altyazı uzunluğundan hesaplanır (okuma hızı: ~10 harf/sn).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const META = {
    "slug": "gorsel-atolyesi",
    "title": "Görsel Atölyesi",
    "titleEn": "The Picture Workshop",
    "grade": 5,
    "theme": "Dijital Ürün Tasarımı ve Geliştirme",
    "code": "BTY.5.2.1",
    "outcome": "Görsel düzenleme programlarından yararlanabilme",
    "outcomeEn": "Making use of image editing programs",
    "duration": 133,
    "tempo": 1
  };
  const SCENES = [
    {
      "id": "s0",
      "t0": 0,
      "t1": 14.8,
      "name": "",
      "en": "",
      "concept": "",
      "noHeader": true
    },
    {
      "id": "s1",
      "t0": 14.8,
      "t1": 45.1,
      "name": "Görselin özellikleri",
      "en": "Features of images",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s2",
      "t0": 45.1,
      "t1": 67.2,
      "name": "Uygun program",
      "en": "The right program",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s3",
      "t0": 67.2,
      "t1": 95.3,
      "name": "Arayüzü kullanalım",
      "en": "Using the interface",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s4",
      "t0": 95.3,
      "t1": 117.9,
      "name": "Doğru seçim mi?",
      "en": "A good choice?",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s5",
      "t0": 117.9,
      "t1": 133,
      "name": "Aklında kalsın",
      "en": "Remember",
      "concept": "",
      "noHeader": false
    }
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = { META, SCENES };
  else { root.BF = root.BF || {}; root.BF.META = META; root.BF.SCENES = SCENES; }
})(typeof window !== 'undefined' ? window : globalThis);
