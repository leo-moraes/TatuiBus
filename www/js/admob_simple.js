var admobid = {};

// TODO: replace the following ad units with your own
if (/(android)/i.test(navigator.userAgent)) {
    admobid = { // for Android
        banner: 'ca-app-pub-6156369201406016/5230574884',
        interstitial: 'ca-app-pub-6156369201406016/6707308087'
    };
} else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-6156369201406016/3474640082',
        interstitial: 'ca-app-pub-6156369201406016/4951373281'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-6869992474017983/8878394753',
        interstitial: 'ca-app-pub-6869992474017983/1355127956'
    };
}

function initApp() {
    if (!AdMob) { alert('admob plugin not ready'); return; }

    // cria o banner assim que o aplicativo iniciar
    AdMob.createBanner({
        adId: admobid.banner,
        position: AdMob.AD_POSITION.BOTTOM_CENTER,
        //isTesting: true, // TODO: remover esta linha antes do release
        overlap: false,
        offsetTopBar: false,
        bgColor: 'black'
    });

    // isso inicia o banner em tela cheia assim que o app iniciar
    AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        //isTesting: true, // TODO: remover esta linha antes do release
        autoShow: true
    });
}

if ((/(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent))) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}