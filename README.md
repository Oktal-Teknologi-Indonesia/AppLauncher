**Riset Membuka Mobile App dari App Lain**

1. Aplikasi Target
   1. Kebutuan plugin

      Plugin customurlscheme diperlukan untuk membuat scheme unik bagi aplikasi pembuka.

      cordova plugin add cordova-plugin-customurlscheme –variable URL\_SCHEME=tgt

      tgt adalah nama scheme untuk apliksi target sehingga bisa memiliki scheme / uri seperti tgt://\*

   1. Modifikasi config.xml, tambahkan baris berikut

      <allow-intent href="tgt://\*/\*" />

1. Mondifikasi file config.xml

   // Tambahkan baris tercetak tebal

   <widget id="id.oktal.target" version="1.0.0"

   `        `xmlns="http://www.w3.org/ns/widgets"

   `        `xmlns:cdv="http://cordova.apache.org/ns/1.0"

   `        `**xmlns:android="<http://schemas.android.com/apk/res/android>"**>

   // tambahkan blok berikut

   <platform name="android">    

   `        `<!-- export the MainActivity -->

   `        `<edit-config file="AndroidManifest.xml" mode="merge" target="/manifest/application/activity[@android:name='MainActivity']">

   `            `<activity android:name="MainActivity" android:exported="true" />

   `        `</edit-config>

   `    `</platform>

1. Skrip untuk menangani permintaan membuka url

   document.addEventListener('deviceReady', onDeviceReady, false);

   function onDeviceReady() {

   `    `handleOpenURL(window.location.href);

   }

   function handleOpenURL(url) {

   `    `// tampilkan informasi url di div ber-id info

   `    `document.getElementById('info').innerHTML = url;

   `    `// arahkan ke halaman promo.html jika url request adalah tgt://promo.html

   `    `if(url == 'tgt://promo.html'){

   `        `window.location.href = 'https://localhost/promo.html';

   `    `}

   }

1. Lakukan prepare sebelum build

   cordova prepare && cordova build android

1. Aplikasi pembidik
   1. Kebutuhan plugin

      Plugin app launcher dibutuhkan untuk mengirim request ke aplkasi lain

      cordova plugin add https://github.com/nchutchind/cordova-plugin-app-launcher.git

   1. Tambahkan platform

      cordova platform add android@latest

1. Modifikasi file config.xml, tambakan blok berikut

   <feature name="Launcher">

   `    `<param name="android-package" value="com.hutchind.cordova.plugins.launcher.Launcher" />

   </feature>

1. Modifikasi file platforms/android/app/src/main/AndroidManifest.xml, tambahkan baris berikut di antara blok <manifest ....> </manifest>

   <queries>

   `    `<package android:name="id.oktal.target" />

   </queries>

1. Salin kebutuhan file

   mkdir -p platforms/android/src/com/hutchind/cordova/plugins

   cp plugins/cordova-plugin-app-launcher/src/android/Launcher.java platforms/android/src/com/hutchind/cordova/plugins/

1. Skrip pemicu

   // memubuka index aplikasi target berdasarkan package name

   document.getElementById('btn1').addEventListener('click', () => {

   `    `console.log('Buka Index App Target');

   `    `window.plugins.launcher.launch({

   `        `packageName: 'id.oktal.target'

   `    `},function(data) {

   `        `console.log('Successfully launched app target');

   `    `}, function(err) {

   `        `console.error('Error launching app target: ' + err);

   `    `});

   })

   // Membuka halaman promo.html di id.oktal.target dengan scheme tgt

   document.getElementById('btn2').addEventListener('click', () => {

   `    `// cek apakah uri tgt dikenali dan bisa dibuka

   `    `window.plugins.launcher.canLaunch(

   `        `{uri:"tgt://"},

   `        `function(){

   `            `console.log("URI tgt dikenali");

            

   `		    `// kirim request membuka halaman promo di app target

   `		    `window.plugins.launcher.launch(

   `                `{

   `                    `uri: "tgt://promo.html"

   `                `},

   `                `function(){

   `                    `console.log("Membuka tgt://promo.html")

   `                `},

   `                `function(errMsg){

   `                    `console.log("tidak bisa membuka tgt://promo.html.",errMsg);

   `                `}

   `            `)

   `        `},

   `        `function(errMsg){

   `            `console.log("URI tgt tidak dikenali",errMsg);

   `        `}

   `    `);

   })

1. Untuk membuka applikasi target malalui url di web browser yang dibuka pada perangkat android, gunakan contoh hyperlink pada file intent.php