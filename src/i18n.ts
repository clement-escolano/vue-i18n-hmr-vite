import { createI18n } from 'vue-i18n';
import en from './locales/en.json';

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: { en },
});

if (import.meta.hot) {
    import.meta.hot.accept(['./locales/en.json'], () => {
        /* eslint-disable global-require */
        i18n.global.setLocaleMessage('en', require('./locales/en.json'));
        /* eslint-enable global-require */
    });
}

export default i18n;
