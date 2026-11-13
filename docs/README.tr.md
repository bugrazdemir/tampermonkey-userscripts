Open Userscripts — Türkçe Kılavuz
Herkes için ücretsiz ve açık kaynak tarayıcı özelleştirmeleri. Farklı web siteleri için hazırlanan Tampermonkey scriptlerini keşfet, kur, güncelle ve geliştirilmesine katkıda bulun.

[English README](../README.md) · [Katkı rehberi](../CONTRIBUTING.md) · [Güvenlik politikası](../SECURITY.md) · MIT Lisansı
Script kataloğu
Her script bağımsızdır. İstediğini kurabilir, etkinleştirebilir, devre dışı bırakabilir veya güncelleyebilirsin.
Web sitesi	Script	Ne işe yarar?	Sürüm	Dokümantasyon	Kurulum
GitHub	GitHub Review Minimal UI	Pull request tartışmalarını sadeleştirir; duyarlı iki sütunlu inceleme düzeni ve klavye kısayolu ekler	1.6.2	[Detaylar](../scripts/github/README.md)	Scripti kur


Yeni web siteleri ve scriptler yayımlandıkça bu kataloğa eklenecek.
Kurulum
1. Tarayıcına Tampermonkey eklentisini yükle.
2. Tarayıcın gerektiriyorsa Allow user scripts (Kullanıcı scriptlerine izin ver) ayarını etkinleştir.
3. Katalogdaki Scripti kur bağlantısına tıkla. Tampermonkey kurulum ekranı açılmalıdır. Alternatif olarak Tampermonkey Dashboard → Utilities → Import from URL alanına kurulum adresini yapıştırabilirsin.
4. Kurmadan önce kaynak kodu, çalışacağı adresleri ve izinleri kontrol et.
5. Scriptin desteklediği sayfaya git. GitHub Review Minimal UI için bir GitHub pull request sayfasında Alt + Shift + M ile özel tasarımı açıp kapatabilirsin.
Not: Scripti her tarayıcı profiline bir kez kurman yeterlidir. Kataloğa yeni eklenen scriptler mevcut kullanıcılara kendiliğinden kurulmaz.
Otomatik güncellemeler
Scriptler Tampermonkey'in sürüm denetimiyle yönetilir:
- @version: Scriptin yayımlanan sürümü.
- @updateURL: Yeni sürümlerin kontrol edildiği adres.
- @downloadURL: Yeni kodun indirildiği adres.
Güncellemeler Tampermonkey ayarlarına göre belirli aralıklarla kontrol edilir; anlık değildir. Güncellemeyi elle test etmek için Tampermonkey Dashboard → Check for userscript updates seçeneğini kullanabilir, ardından ilgili sayfayı yenileyebilirsin. Otomatik kurulum davranışı eklenti ayarlarına bağlıdır.
Proje yöneticileri için
Mevcut bir scripti güncelleme
1. scripts/ altındaki ilgili .user.js dosyasını düzenle.
2. @version değerini artır (örneğin 1.6.2 → 1.6.3).
3. Scriptin README dosyasını, sürüm bilgisini ve değişiklik geçmişini güncelle.
4. Değişiklikleri main branch'ine commit veya merge et.
5. Raw script bağlantısında yeni sürümü doğrula ve Tampermonkey güncelleme kontrolünü test et.
@updateURL ve @downloadURL, ilgili scriptin bu repository içindeki sabit ve herkese açık Raw adresini göstermelidir. Daha önce yayımlanan .user.js dosyalarını bir geçiş planı olmadan taşıma veya yeniden adlandırma; mevcut kurulumlar eski adresi kontrol etmeye devam edebilir. Çift kurulum oluşmaması için @name ve @namespace değerlerini sabit tut.
Yeni web sitesi veya script ekleme
1. [Userscript şablonunu](../templates/userscript-template.user.js.example) temel alarak scripts/<web-sitesi>/<script-adi>.user.js dosyasını oluştur.
2. [README şablonundan](../templates/README.template.md) yararlanarak aynı klasöre README.md ekle.
3. Şablondaki örnek alan adlarını, klasör ve dosya adlarını değiştir; dar kapsamlı @match kuralları ve benzersiz @name / @namespace değerleri belirle.
4. Güncelleme bağlantılarını yeni scriptin gerçek Raw adresiyle doldur.
5. Özellikleri, izinleri, kullanımı, sınırlamaları ve değişiklik geçmişini belgeleyip yukarıdaki kataloğa kurulum bağlantısı ekle.
6. Kurulum ve güncelleme sürecini Tampermonkey'de test et.
Katkıda bulunma kuralları için [CONTRIBUTING.md](../CONTRIBUTING.md) dosyasına bakabilirsin. Fork ve pull request yoluyla katkılar kabul edilir.
Güvenlik ve gizlilik
Userscriptler eşleştikleri web sayfalarının içeriğine erişebilir. Kurulumdan önce kodu incele. Repository herkese açıktır; erişim anahtarları, token'lar, şirket içi özel kodlar, müşteri verileri veya dahili servis adresleri paylaşma. @match kapsamını dar tut; yalnızca gerekli izinleri kullan. Harici kütüphaneleri ve ağ isteklerini dikkatle değerlendir.

Güvenlik açığı bildirimi için [SECURITY.md](../SECURITY.md) dosyasını kullan. Public issue veya ekran görüntülerinde özel repository bilgilerini paylaşma.
Lisans ve bağımsızlık
Proje MIT Lisansı ile dağıtılır. Web sitesi isimleri ve ticari markalar ilgili sahiplerine aittir. Proje GitHub, Tampermonkey veya özelleştirilen web sitelerinin resmî ürünü değildir.
Faydalı bağlantılar
- Tampermonkey dokümantasyonu
- Tampermonkey sık sorulan sorular
- Hata bildirimi ve özellik önerileri