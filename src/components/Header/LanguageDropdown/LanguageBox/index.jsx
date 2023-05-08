import React from 'react';
import LanguageOne from './LanguageOne';
import './style.scss';
export default function LanguageBox() {
  return (
    <div className="languagebox">
      <LanguageOne languagekey="English" />
      <LanguageOne languagekey="Ελληνικά" />
      <LanguageOne languagekey="Latviešu" />
      <LanguageOne languagekey="Nederlands" />
      <LanguageOne languagekey="Español" />
      <LanguageOne languagekey="Česky" />
      <LanguageOne languagekey="Slovenčina" />
      <LanguageOne languagekey="Türkçe" />
    </div>
  );
}
