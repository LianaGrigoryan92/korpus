export const strapiLanguageAdapter = (locale: string) => {
    switch (locale) {
        case 'am':
            return 'hy';
        default:
            return locale;
    }
}
