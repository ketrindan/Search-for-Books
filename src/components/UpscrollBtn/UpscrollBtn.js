import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import upScrollBtnStyles from './UpscrollBtn.module.css';

function UpScrollBtn() {
  const [isVisible, setVisible] = useState(false);

  function setVisibility() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 300 ? setVisible(true) : setVisible(false);
    });
  }

  setVisibility();

  return (
    <HashLink smooth to="#top" id="up-btn" 
      className={`${upScrollBtnStyles.up_btn} ${isVisible ? `${upScrollBtnStyles.up_btn_visible}` : ''}`}
    ></HashLink>
  );
}

export default UpScrollBtn;