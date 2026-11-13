# Open Userscripts — Türkçe kılavuz

**Herkes için ücretsiz ve açık kaynak Tampermonkey scriptleri.** Scriptleri bağımsız olarak kurabilir, otomatik güncellemeleri alabilir ve projeye katkı sağlayabilirsin.

[Script kataloğu](../README.md) · [Katkı rehberi](../CONTRIBUTING.md) · [MIT lisansı](../LICENSE)

## Kurulum

1. [Tampermonkey](https://www.tampermonkey.net/) tarayıcı eklentisini yükle.
2. Tarayıcı istiyorsa **Allow user scripts** iznini etkinleştir.
3. [GitHub Review scriptini kur](https://raw.githubusercontent.com/bugrazdemir/tampermonkey-userscripts/main/scripts/github/github-review.user.js). Tampermonkey kurulum penceresinden izinleri kontrol edip onayla.
4. Script GitHub pull request sayfalarında çalışır. Tasarımı **Alt + Shift + M** ile açıp kapatabilirsin.

## Güncelleme

`@version`, `@updateURL` ve `@downloadURL` değerleriyle kurulu scriptler periyodik kontrol sonucunda güncellenebilir. Bu işlem anlık değildir; Tampermonkey güncelleme kontrol ve otomatik kurulum ayarlarının açık olması gerekir. **Yeni eklenen scriptler kendiliğinden kurulmaz.**

## Site bazlı dokümantasyon

Her script kendi `README.md` dosyasıyla özelliklerini, kurulumunu, kısayollarını ve değişiklik geçmişini açıklar. GitHub için: [GitHub Review Minimal UI](../scripts/github/README.md).

## Yeni script yayımlamak

Yeni bir site için `scripts/<site>/<script-adı>.user.js` dosyası ve yanında `README.md` oluştur. Dosyanın metadata alanlarını ve güncelleme bağlantılarını doldur. Kataloğa kurulum satırı ekle. Katkı göndermek için repository'yi fork'layıp pull request açabilirsin.

## Yayın öncesi ayarlar

Repository sahibi `YOUR_GITHUB_USERNAME` yer tutucularını kendi GitHub kullanıcı/organizasyon adıyla değiştirmeli. Repository adı farklı olacaksa URL'lerdeki `open-userscripts` kısmı da değiştirilmeli.

## Güvenlik

Public repository içeriği herkes tarafından okunabilir. Şirkete özel kodlar, kullanıcı verileri, erişim anahtarları veya token'lar yayımlama. Kurmadan önce kullanıcı scriptinin kodunu ve izinlerini incele.
