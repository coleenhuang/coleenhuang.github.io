import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import styles from './LanguageMenu.module.css'

const LanguageMenu = (props) => {
  const { t, i18n } = useTranslation()
  const [lang, setLang] = useState('en');

  function changeLang(lang) {
    i18n.changeLanguage(lang)

    setLang(lang);
  }

  return(
    <nav className={styles.wrapper}>
      <ul className={styles.langNav}>
        <li onClick={() => changeLang('en')}>
          en
        </li>
        <li onClick={() => changeLang('zh')}>
          zh
        </li>
      </ul>
    </nav>
  )
}

export default LanguageMenu
