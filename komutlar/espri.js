const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("Roliz | Espri yükleniyor.").then(message => {

    var FwhyCode = [
 
      "Seni görünce; \ngözlerim dolar, \nkulaklarım euro.",
      "Kar üzerinde yürüyen adama ne denir. Karabasan.",
      "Yıkanan Ton’a ne denir? Washington!",
      "Gidenin arkasına bakmayın yoksa geleni göremezsiniz.",
      "+Oğlum canlılara örnek ver. \n-Kedi, köpek. \n+Cansızlara örnek ver. \n-Ölü kedi, ölü köpek.",
      "+Kanka ben banyoya 3 kişi giriyom. \n-Oha nasıl? \n+Hacı, Şakir ve ben. \n-Defol lan!",
      "+Kocanızla ortak özelliğiniz ne? \n-Aynı gün evlendik.",
      "+Evladım ödevini neden yapmadın? \n-Bilgisayarım uyku modundaydı, uyandırmaya kıyamadım.",
      "+Bizim arkadaş ortamında paranın lafı bile olmaz. \n-Niye ki? \n+Çünkü hiç birimizin parası yok.",
      "Annemin bahsettiği elalem diye bir örgüt var illuminatiden daha tehlikeli yemin ederim.",
      "+Acıkan var mı ya? \n-Yok bizde tatlı kan var.",
      "Yılanlardan korkma, yılmayanlardan kork.",
      "+Baykuşlar vedalaşırken ne der? \n-Bay bay baykuş.",
      "Beni Ayda bir sinemaya götürme, Marsta bir sinemaya götür.",
      "Aaa siz çok terlemişsiniz durun size terlik getireyim.",
      "Aklımı kaçırdım, 100.000 TL fidye istiyorum.",
      "- İnsanların seni ezmesine izin verme; Ehliyet al, sen onları ez...",
"- İlahi Azrail ... Sen adamı öldürürsün!",
"- Mafya babası olmak için oğlumun adını “Mafya” koydum.",
"- Kim vurduya gittim birazdan gelecem...",
"- Zenginler et, fakirler hayalet yer.",
"- Bugünlerde gözüm çok KIZarıyor.- Benimde arıyor ya!",
"- Hava korsanı uçağı kaçıracaktı ama yapamadı çünkü uçağı kaçırdı.",
"- GİT’Arı’ getir de biraz şarkı söyleyelim. -Abi arı sokmasın!",
"- Sana bir kıllık yapayım, kıllarını koyarsın.",
"- Seven unutmaz oğlum, eight unutur.",
"- Cem Uzan, üstünü örteyim.",
"- Geçenlerde izdivaç programında adam evim, arabam, param var dedi üç hatun aynı anda elektrik aldı. Adam bildiğin üçlü priz çıktı.",
"- Haydi Unkapanı’na gidip birkaç kapan kuralım. Belki un yakalarız",
"- Saçını sarıya boyatıp kaşlarını zift karası bırakınca doğal sarışın olmuyorsun tatlım. Borussia Dortmund deplasman forması gibi oluyon.",
"- Sonuçta çubuk krakerle sigara içme taklidi yapan çocuklardık biz. Hangi ara bu kadar cool olduk.",
"- Adamın biri güneşte yanmış, ay da düz.",
"- Ben Yedigün içiyorum sen Onbeşgün iç.",
"- Sinemada on dakika ara dedi, aradım aradım açmadı.",
"- Röntgen Filmi çektirdik, yakında sinemalarda.",
"- Adamın Biri Notebook Almış, DELLenmiş.",
"- Geçen gün taksi çevirdim hala dönüyor.",
"- Ben hikâye yazarım Ebru Destan.",
"- Geçen gün geçmiş günlerimi aradım ama meşguldü.",
"- Tebrikler kazandınız, şimdi tencere oldunuz!",
"- Kaba kuvvet uygulama, kap kırılabilir.",
"- Türkiye’nin en yeni şehri – Nevşehir",
"- Ayna'nın karşısında süslenme, manga'nın karşısında süslen.",
"- Geçen ‘fil’e çorap aldım, zürafaya almadım.",
"- Yılanlardan korkma, yılmayanlardan kork.",
"- Ben kahve içiyorum, Nurgül Yeşilçay.",
"- Bak şu karşıdaki uçak PİSTİ, ama bir türlü temizlemediler.",
"- Geçen gün geçmiş günlerimi aradım ama meşguldü.",
"- Tekel'in nesi var, İki elin sesi var.",
"- Top ağlarda, ben ağlamaz mıyım? ",
"- Esra Erol ile - İs The Watch.",
"- Burger King, bende Vezir.",
"- Adamın biri gülmüş, bahçeye dikmişler.",
"- Ben yürüyelim diyorum Gerard Depardieu.",
"- Ahmet Saz çaldı. Polis tutukladı.",
"- Beni ayda bir sinemaya götürme, Marsta bir sinemaya götür.",
"- Sevgilisi olmayanlar bul-aşık makinası alsınlar.",
"- Ben ekmek yedim Will Smith.",
"- Aaaaa siz çok terlemişsiniz durun size terlik getiriyim.",
"- Temel bir gün Fransa’ya gitmiş:”Aaa burayı da mı Sabancı aldı.” demiş.",
"- Geçen gün arkadaşlarla fırında patates yiyorduk, fırın sıcak geldi bahçeye çıktı.",
"- İngilizcem yok, tanıdığım bütün Cem'ler Türk.",
"- Sarımsağı havanda dövmüşsün, Ha Muş'ta.",
"- Dondurmayı ben yalamam, himalayalar.",
"- Kalbinin sesini dinle güzelse kaset yap",
"- Bağırsaklarda yaşayan tenya kurtları bağırsakta yaşarlar bağırmasak da yaşar.",
"- Çiçeğin biri solmuş diğeri de sağ.",
"- Aklımı kaçırdım, 100.000 TL fidye istiyorum.",
"- Altılıda 1. ayakta yattım. Yarış bitmiş uyanamadım.",
"- Ayakkabıcı sıkıyorsa alma dedi, bende korktum aldım",
"- Balık ekmek 3 liraymış, hadi balık ekelim.",
"- Bekarlık sultanlıktır, fakat er ya da geç demokrasiye geçilir",
"- Adamın kafasına buda heykeli düşmüş, başıma ''buda mı gelecekti'' demiş.",
"- Doktor bu ilAÇ dedi bizde yardım topladık.",
"- Bir sınıftaki öğrencilerin hepsinin kilosu eşitmiş,- Çünkü EŞİT AĞIRLIK sınıfıymış.",
"- Gün gelir devran döner, et döner, tavuk döner.",
"- Eti tadında ama sebzesi tadında değil.",
"- Adama evli misiniz diye sormuşlar, Adam : -hayır arsalıyım demiş.",
"- Ben ağlarım Filip-inler",
"- Lütfen sessiz olun telefon faturasını yeni yatırdım uyuyo şimdi uyanmasın",
"- Erikli su aldım, içinde Erik yoktu !",
"- Nuri ölünce Çin'e gömsünler, nuriçinde yatsın.",
"- 3 Japon sırayla uçaktan atlamış. Japonlar ölmüş, sıra ise kırılmış!",
"- Yarasa yararlı bir hayvandır. Yararlı bir hayvan olmasaydı yaramasa derlerdi.",
"- Limon-Ata, muz maymuna verilir.",
"- Adam 7 gün boyunca nezle olmuş. Sıkılmış bugün de Petek’le olayım demiş.",
"- Taşımasuyla neden değirmen dönmez, çünkü taşımasu küçük bir japon kız çocuğudur.",
"- Kelebekler, köstebekler ama ben beklemem.",
"- Karar verdim 14 Şubatta bizim asansöre hediye alacağım. 10 yıldır çıkıyoruz daha birbirimiz hiç kırmadık.",
"- Bütün umutlarım suya düştü. Âmâ boğulmadılar. Çünkü onlara yüzme öğretmiştim",
"- İyi günler, Aslıyla görüşebilir miyim? Aslı evde yok! Fotokopisi var!",
"- Bu gece seni kınıyorum, çünkü kına gecesi.",
"- İzne çıkacam ama çok yüksek merdiven lazım.",
"- Sinirlenince telefonu yavaşça yere bırakıp kendimi son sürat duvara fırlatıyorum.",
"- Geçen gün bir espri patlattım 1 ölü, 2 si ağır yaralı arkadaşı hastaneye kaldırdık. ",
"- Hapis yatmışım, ha temiz.. ne fark eder.",
"- Basamakta durmayın otomatik kapı çarpar, böler, karekökünü alır.",
"- Hayırlı olsun Araba almışsın. Evet aldık. Niye Araba aldın ki kendine alsaydın.",
"- Çok Makbule geçti şimdi de Fatma geçiyor.",
" Yerin kulağı vardır benim de kulağım var.",
"O zaman ben yer miyim? Yemem.",
"- -Alinin selamı var. Hanggi Ali?; Şehirler Arası Otobüs Termin**Ali**",
"- -Abi sana Sıla'nın selamı var.\nHangi Sıla?\nGayri Safi Milli HaSıla"

    ];

    var FwhyCode = FwhyCode[Math.floor(Math.random() * FwhyCode.length)];

    message.edit(`${FwhyCode}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["espiri", "espri-yap", "yap-espri", "yapbi-espri"],
  permLevel: 0
};

exports.help = {
  name: "espri",
  description: "Espri yapar.",
  usage: "espri"
};