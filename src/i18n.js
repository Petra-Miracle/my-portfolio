import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  id: {
    translation: {
      "nav.home": "Beranda",
      "nav.price": "Harga",
      "nav.contact": "Kontak",
      "common.orderNow": "Pesan Sekarang",
    },
  },
  en: {
    translation: {
      "nav.home": "Home",
      "nav.price": "Pricing",
      "nav.contact": "Contact",
      "common.orderNow": "Order Now",
    },
  },
  ja: {
    translation: {
      "nav.home": "ホーム",
      "nav.price": "価格",
      "nav.contact": "お問い合わせ",
      "common.orderNow": "今すぐ注文",
    },
  },
  zh: {
    translation: {
      "nav.home": "首页",
      "nav.price": "价格",
      "nav.contact": "联系我们",
      "common.orderNow": "现在下单",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "id", // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
