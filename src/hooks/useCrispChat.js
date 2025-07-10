
import { useEffect } from 'react';

const useCrispChat = () => {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = process.env.REACT_APP_CRISP_WEBSITE_ID;

    (function () {
      var d = document;
      var s = d.createElement('script');

      s.src = 'https://client.crisp.chat/l.js';
      s.async = 1;
      d.getElementsByTagName('head')[0].appendChild(s);
    })();
  }, []);
};

export default useCrispChat;
