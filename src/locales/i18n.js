import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getAvailableLanguages } from '../utils/getAvailableLanguages'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

getAvailableLanguages()
  .then((res) => init118(res))
  .catch((err) => console.log(err))

// const resources = {
//   en: {
//     translation: {
//       'Header main title': 'We do everything',
//     },
//   },
//   uk: {
//     translation: {
//       'Header main title': 'Ми робимо все',
//     },
//   },
//   en: {
//     translation: {
//       1: 'some content',
//     },
//   },
// }

function init118(res) {
  console.log(res, 'my res')
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: res,
      lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
      // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
      // if you're using a language detector, do not define the lng option

      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    })
}
init118()

export default i18n
