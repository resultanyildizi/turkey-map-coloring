function getTurkeyMap() {
  const adana = "Adana";
  const adiyaman = "Adıyaman";
  const afyon = "Afyon";
  const agri = "Ağrı";
  const amasya = "Amasya";
  const ankara = "Ankara";
  const antalya = "Antalya";
  const elazig = "Elazığ";
  const tunceli = "Tunceli";
  const malatya = "Malatya";
  const bingol = "Bingöl";
  const diyarbakir = "Diyarbakır";
  const erzincan = "Erzincan";
  const mus = "Muş";
  const sivas = "Sivas";
  const erzurum = "Erzurum";
  const sanliurfa = "Şanlıurfa";
  const kahramanmaras = "Kahramanmaraş";
  const ordu = "Ordu";
  const tokat = "Tokat";
  const yozgat = "Yozgat";
  const giresun = "Giresun";
  const kayseri = "Kayseri";
  const gumushane = "Gümüşhane";
  const bayburt = "Bayburt";
  const batman = "Batmans";
  const mardin = "Mardin";
  const osmaniye = "Osmaniye";
  const nigde = "Niğde";
  const mersin = "Mersin";
  const hatay = "Hatay";
  const gaziantep = "Gaziantep";
  const usak = "Uşak";
  const denizli = "Denizli";
  const burdur = "Burdur";
  const isparta = "Isparta";
  const konya = "Konya";
  const eskisehir = "Eskişehir";
  const kutahya = "Kütahya";
  const van = "Van";
  const bitlis = "Bitlis";
  const igdir = "Iğdır";
  const kars = "Kars";
  const samsun = "Samsun";
  const corum = "Çorum";
  const kirikkale = "Kırıkkale";
  const kirsehir = "Kırşehir";
  const aksaray = "Aksaray";
  const cankiri = "Çankırı";
  const bolu = "Bolu";
  const mugla = "Muğla";
  const karaman = "Karaman";
  const rize = "Rize";
  const ardahan = "Ardahan";
  const artvin = "Artvin";
  const istanbul = "İstanbul";
  const canakkale = "Çanakkale";
  const kirklareli = "Kırklareli";
  const edirne = "Edirne";
  const manisa = "Manisa";
  const bilecik = "Bilecik";
  const bursa = "Bursa";
  const duzce = "Düzce";
  const zonguldak = "Zonguldak";
  const sinop = "Sinop";
  const karabuk = "Karabük";
  const kilis = "Kilis";
  const hakkari = "Hakkari";
  const sirnak = "Şırnak";
  const siirt = "Siirt";
  const aydin = "Aydin";
  const izmir = "İzmir";
  const balikesir = "Balıkesir";
  const sakarya = "Sakarya";
  const bartin = "Bartın";
  const trabzon = "Trabzon";
  const nevsehir = "Nevşehir";
  const kastamonu = "Kastamonu";
  const kocaeli = "Kocaeli";
  const yalova = "Yalova";
  const tekirdag = "Tekirdağ";

  let Turkeymap = [
    {
      x: 797,
      y: 323,
      name: elazig,
      neighbors: [malatya, bingol, tunceli, diyarbakir, erzincan],
    },
    {
      x: 716,
      y: 327,
      name: malatya,
      neighbors: [sivas, erzincan, elazig, diyarbakir, adiyaman, kahramanmaras],
    },
    {
      x: 797,
      y: 284,
      name: tunceli,
      neighbors: [erzincan, bingol, elazig],
    },
    {
      x: 865,
      y: 292,
      name: bingol,
      neighbors: [erzincan, erzurum, mus, diyarbakir, elazig, tunceli],
    },

    {
      x: 771,
      y: 250,
      name: erzincan,
      neighbors: [
        sivas,
        giresun,
        gumushane,
        bayburt,
        erzurum,
        bingol,
        tunceli,
        elazig,
        malatya,
      ],
    },

    {
      x: 843,
      y: 359,
      name: diyarbakir,
      neighbors: [
        elazig,
        bingol,
        mus,
        batman,
        mardin,
        sanliurfa,
        adiyaman,
        malatya,
      ],
    },

    {
      x: 897,
      y: 377,
      name: batman,
      neighbors: [mardin, diyarbakir, mus, bitlis, siirt, sirnak],
    },

    {
      x: 940,
      y: 372,
      name: siirt,
      neighbors: [mardin, batman, bitlis, van, sirnak],
    },
    {
      x: 870,
      y: 408,
      name: mardin,
      neighbors: [sanliurfa, diyarbakir, batman, siirt, sirnak],
    },

    {
      x: 968,
      y: 402,
      name: sirnak,
      neighbors: [mardin, batman, siirt, van, hakkari],
    },

    {
      x: 958,
      y: 329,
      name: bitlis,
      neighbors: [batman, siirt, van, agri, mus],
    },

    {
      x: 1034,
      y: 340,
      name: van,
      neighbors: [hakkari, sirnak, siirt, bitlis, agri],
    },

    { x: 1048, y: 398, name: hakkari, neighbors: [sirnak, van] },

    {
      x: 924,
      y: 299,
      name: mus,
      neighbors: [bitlis, batman, diyarbakir, bingol, erzurum, agri],
    },

    {
      x: 998,
      y: 257,
      name: agri,
      neighbors: [erzurum, mus, bitlis, van, igdir, kars],
    },

    { x: 1046, y: 232, name: igdir, neighbors: [agri, kars] },

    { x: 996, y: 194, name: kars, neighbors: [igdir, agri, erzurum, ardahan] },

    { x: 978, y: 143, name: ardahan, neighbors: [artvin, erzurum, kars] },

    { x: 923, y: 136, name: artvin, neighbors: [rize, ardahan, erzurum] },

    {
      x: 916,
      y: 221,
      name: erzurum,
      neighbors: [
        agri,
        kars,
        ardahan,
        artvin,
        rize,
        bayburt,
        erzincan,
        bingol,
        mus,
      ],
    },

    {
      x: 876,
      y: 155,
      name: rize,
      neighbors: [trabzon, bayburt, erzurum, artvin],
    },

    {
      x: 841,
      y: 208,
      name: bayburt,
      neighbors: [gumushane, trabzon, rize, erzurum, erzincan],
    },

    {
      x: 820,
      y: 164,
      name: trabzon,
      neighbors: [rize, bayburt, gumushane, giresun],
    },

    {
      x: 796,
      y: 199,
      name: gumushane,
      neighbors: [giresun, trabzon, bayburt, erzincan],
    },

    {
      x: 743,
      y: 180,
      name: giresun,
      neighbors: [ordu, sivas, erzincan, gumushane, trabzon],
    },

    { x: 694, y: 168, name: ordu, neighbors: [samsun, tokat, sivas, giresun] },

    {
      x: 639,
      y: 192,
      name: tokat,
      neighbors: [amasya, samsun, ordu, sivas, yozgat],
    },

    {
      x: 688,
      y: 249,
      name: sivas,
      neighbors: [
        ordu,
        tokat,
        yozgat,
        giresun,
        erzincan,
        malatya,
        kahramanmaras,
        kayseri,
      ],
    },

    {
      x: 654,
      y: 360,
      name: kahramanmaras,
      neighbors: [
        osmaniye,
        adana,
        kayseri,
        sivas,
        malatya,
        adiyaman,
        gaziantep,
      ],
    },

    {
      x: 731,
      y: 377,
      name: adiyaman,
      neighbors: [malatya, kahramanmaras, diyarbakir, gaziantep, sanliurfa],
    },

    {
      x: 780,
      y: 420,
      name: sanliurfa,
      neighbors: [mardin, diyarbakir, adiyaman, gaziantep],
    },

    {
      x: 685,
      y: 430,
      name: gaziantep,
      neighbors: [kilis, hatay, osmaniye, kahramanmaras, adiyaman, sanliurfa],
    },

    { x: 670, y: 447, name: kilis, neighbors: [gaziantep] },

    { x: 622, y: 474, name: hatay, neighbors: [gaziantep, osmaniye, adana] },

    {
      x: 624,
      y: 420,
      name: osmaniye,
      neighbors: [hatay, gaziantep, kahramanmaras, adana],
    },

    {
      x: 577,
      y: 413,
      name: adana,
      neighbors: [osmaniye, hatay, kahramanmaras, kayseri, nigde, mersin],
    },

    {
      x: 598,
      y: 316,
      name: kayseri,
      neighbors: [adana, nigde, nevsehir, yozgat, sivas, kahramanmaras],
    },

    {
      x: 568,
      y: 245,
      name: yozgat,
      neighbors: [
        kayseri,
        nevsehir,
        kirsehir,
        kirikkale,
        corum,
        amasya,
        tokat,
        sivas,
      ],
    },

    {
      x: 536,
      y: 188,
      name: corum,
      neighbors: [yozgat, kirikkale, cankiri, kastamonu, sinop, samsun, amasya],
    },

    { x: 597, y: 176, name: amasya, neighbors: [samsun, corum, yozgat, tokat] },

    {
      x: 611,
      y: 132,
      name: samsun,
      neighbors: [sinop, corum, amasya, tokat, ordu],
    },

    { x: 552, y: 100, name: sinop, neighbors: [kastamonu, corum, samsun] },

    {
      x: 481,
      y: 110,
      name: kastamonu,
      neighbors: [bartin, karabuk, cankiri, corum, sinop],
    },

    {
      x: 467,
      y: 176,
      name: cankiri,
      neighbors: [kastamonu, karabuk, bolu, ankara, kirikkale, corum],
    },

    {
      x: 482,
      y: 235,
      name: kirikkale,
      neighbors: [cankiri, ankara, kirsehir, yozgat, corum],
    },
    {
      x: 505,
      y: 272,
      name: kirsehir,
      neighbors: [ankara, aksaray, nevsehir, yozgat, kirikkale],
    },

    {
      x: 538,
      y: 308,
      name: nevsehir,
      neighbors: [kirsehir, aksaray, nigde, kayseri, yozgat],
    },
    {
      x: 492,
      y: 333,
      name: aksaray,
      neighbors: [ankara, konya, nigde, nevsehir, kirsehir],
    },
    {
      x: 534,
      y: 372,
      name: nigde,
      neighbors: [aksaray, nevsehir, kayseri, adana, mersin, konya],
    },

    {
      x: 476,
      y: 450,
      name: mersin,
      neighbors: [antalya, karaman, konya, nigde, adana],
    },

    { x: 460, y: 420, name: karaman, neighbors: [antalya, konya, mersin] },

    {
      x: 403,
      y: 366,
      name: konya,
      neighbors: [
        antalya,
        isparta,
        afyon,
        eskisehir,
        ankara,
        aksaray,
        nigde,
        mersin,
        karaman,
      ],
    },

    {
      x: 417,
      y: 236,
      name: ankara,
      neighbors: [
        kirikkale,
        kirsehir,
        aksaray,
        konya,
        eskisehir,
        bolu,
        cankiri,
      ],
    },
    {
      x: 372,
      y: 182,
      name: bolu,
      neighbors: [
        ankara,
        cankiri,
        karabuk,
        zonguldak,
        duzce,
        sakarya,
        bilecik,
        eskisehir,
      ],
    },
    {
      x: 424,
      y: 142,
      name: karabuk,
      neighbors: [zonguldak, bartin, kastamonu, cankiri, bolu],
    },
    {
      x: 418,
      y: 108,
      name: bartin,
      neighbors: [zonguldak, karabuk, kastamonu],
    },
    {
      x: 381,
      y: 129,
      name: zonguldak,
      neighbors: [duzce, bolu, karabuk, bartin],
    },
    { x: 348, y: 159, name: duzce, neighbors: [sakarya, bolu, zonguldak] },

    {
      x: 311,
      y: 163,
      name: sakarya,
      neighbors: [kocaeli, bursa, bilecik, bolu, duzce],
    },

    {
      x: 288,
      y: 216,
      name: bilecik,
      neighbors: [bursa, kutahya, eskisehir, bolu, sakarya],
    },

    {
      x: 334,
      y: 253,
      name: eskisehir,
      neighbors: [bilecik, bolu, ankara, konya, afyon, kutahya],
    },

    {
      x: 318,
      y: 316,
      name: afyon,
      neighbors: [usak, denizli, burdur, isparta, konya, eskisehir, kutahya],
    },

    {
      x: 331,
      y: 368,
      name: isparta,
      neighbors: [afyon, konya, antalya, burdur],
    },

    {
      x: 335,
      y: 432,
      name: antalya,
      neighbors: [mugla, burdur, isparta, konya, karaman, mersin],
    },

    {
      x: 280,
      y: 398,
      name: burdur,
      neighbors: [afyon, isparta, antalya, mugla, denizli],
    },
    {
      x: 235,
      y: 384,
      name: denizli,
      neighbors: [mugla, burdur, afyon, usak, manisa, aydin],
    },
    {
      x: 244,
      y: 324,
      name: usak,
      neighbors: [manisa, kutahya, afyon, denizli],
    },
    {
      x: 260,
      y: 271,
      name: kutahya,
      neighbors: [bursa, bilecik, eskisehir, afyon, usak, manisa, balikesir],
    },
    {
      x: 236,
      y: 213,
      name: bursa,
      neighbors: [kocaeli, yalova, sakarya, bilecik, kutahya, balikesir],
    },
    { x: 240, y: 180, name: yalova, neighbors: [bursa, kocaeli] },
    {
      x: 277,
      y: 157,
      name: kocaeli,
      neighbors: [yalova, istanbul, sakarya, bursa],
    },
    { x: 224, y: 142, name: istanbul, neighbors: [kocaeli, tekirdag] },
    {
      x: 134,
      y: 148,
      name: tekirdag,
      neighbors: [edirne, kirklareli, istanbul],
    },
    { x: 98, y: 131, name: edirne, neighbors: [kirklareli, tekirdag] },

    { x: 140, y: 100, name: kirklareli, neighbors: [edirne, tekirdag] },
    {
      x: 169,
      y: 247,
      name: balikesir,
      neighbors: [canakkale, izmir, manisa, kutahya, bursa],
    },
    { x: 104, y: 221, name: canakkale, neighbors: [balikesir] },
    { x: 128, y: 348, name: izmir, neighbors: [balikesir, manisa, aydin] },
    {
      x: 174,
      y: 312,
      name: manisa,
      neighbors: [balikesir, kutahya, usak, denizli, aydin, izmir],
    },
    { x: 162, y: 385, name: aydin, neighbors: [mugla, denizli, manisa, izmir] },

    {
      x: 199,
      y: 432,
      name: mugla,
      neighbors: [aydin, denizli, burdur, antalya],
    },

    // --------------------------------------------------------
  ];

  Turkeymap.forEach((city) => (city.color = undefined));

  return Turkeymap;
}

function printArray() {
  console.log(map.length);
  let i = 0;
  console.log(
    JSON.stringify(
      points.map((point) => {
        i++;
        return {
          x: point.x,
          y: point.y,
          name: i,
        };
      })
    )
  );
}
