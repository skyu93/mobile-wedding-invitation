export const isAndroid = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('android') > -1;
};
export const isIOS = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('ipod') > -1;
};
class NaverMap {
  constructor(
    private lat: number,
    private lon: number,
  ) {}
  getDeepLink() {
    if (isAndroid()) {
      return `intent://place?lat=${this.lat}&lng=${this.lon}&name=Seoul#Intent;scheme=nmap;package=com.nhn.android.nmap;end`;
    }

    return `nmap://place?lat=${this.lat}&lng=${this.lon}&name=Seoul`;
  }

  getInstallLink() {
    if (isAndroid()) {
      return 'https://play.google.com/store/apps/details?id=com.nhn.android.nmap';
    }

    return 'https://apps.apple.com/kr/app/id311867728';
  }
}

interface NavigationApp {
  getDeepLink(): string;
  getInstallLink(): string;
}
class KakaoMap {
  constructor(
    private lat: number,
    private lon: number,
  ) {}
  getDeepLink() {
    if (isAndroid()) {
      return `intent://search?query=Seoul&center=${this.lat},${this.lon}#Intent;scheme=kakaomap;package=net.daum.android.map;end`;
    }

    return `kakaomap://search?query=Seoul&center=${lat},${lon}`;
  }

  getInstallLink() {
    if (isAndroid()) {
      return 'https://play.google.com/store/apps/details?id=net.daum.android.map';
    }

    return 'https://apps.apple.com/kr/app/id304608425';
  }
}

class TMap {
  constructor(
    private lat: number,
    private lon: number,
  ) {}
  getDeepLink() {
    if (isAndroid()) {
      return `intent://search?name=Seoul&lat=${this.lat}&lon=${this.lon}#Intent;scheme=tmap;package=com.skt.tmap.ku;end`;
    }

    return `tmap://search?name=Seoul&lat=${this.lat}&lon=${this.lon}`;
  }

  getInstallLink() {
    if (isAndroid()) {
      return 'https://play.google.com/store/apps/details?id=com.skt.tmap.ku';
    }

    return 'https://apps.apple.com/kr/app/id431589174';
  }
}

const openNavigationApp = (app: NavigationApp) => {
  return () => {
    let isInstalled = false;
    window.location.href = app.getDeepLink();
    isInstalled = true;
    setTimeout(function () {
      if (!isInstalled) {
        window.location.href = app.getInstallLink();
      }
    }, 500);
  };
};

const lat = 37.5218332;
const lon = 126.9270875;
const openNaverMap = openNavigationApp(new NaverMap(lat, lon));
const openKakaoMap = openNavigationApp(new KakaoMap(lat, lon));
const openTMap = openNavigationApp(new TMap(lat, lon));

export { openNaverMap, openKakaoMap, openTMap };
