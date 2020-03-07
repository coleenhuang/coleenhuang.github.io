import React, { useState } from "react"
import { useTranslation } from "react-i18next"


const LanguageMenu = (props) => {
  const { t, i18n } = useTranslation()
  const [lang, setLang] = useState('en');

  function changeLang(lang) {
    i18n.changeLanguage(lang)

    setLang(lang);
  }

  return(
    <div style={{
      color: `white`,
      textDecoration: `none`,
    }}>
      <p onClick={() => changeLang('en')}>en</p>/
      <p onClick={() => changeLang('zh')}>zh</p>
    </div>
  )
}

export default LanguageMenu
