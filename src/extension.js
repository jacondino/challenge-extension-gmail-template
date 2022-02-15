import React from 'react';
import ReactDOM from 'react-dom';
import { Snippets } from './pages';
import './globalStyles.scss';

window.InboxSDK.loadScript(
  'https://unpkg.com/react@17/umd/react.development.js'
);
window.InboxSDK.loadScript(
  'https://unpkg.com/react-dom@17/umd/react-dom.development.js'
);

window.InboxSDK.load(1, 'INBOX_SDK_APP_ID').then(function (sdk) {
  sdk.Compose.registerComposeViewHandler(function (composeView) {
    window.addEventListener(
      'message',
      function (event) {
        if (event.data.key === 'setTemplate') {
          composeView.setSubject(event.data.value.subject);
          composeView.setBodyText(event.data.value.message);
        }
      },
      false
    );

    composeView.addButton({
      title: 'imodelmail',
      iconUrl: window.chrome.extension.getURL('icon.png'),
      hasDropdown: true,
      onClick: function (event) {
        const container = document.createElement('div');
        container.setAttribute('id', 'root');

        const dropdown = document.getElementsByClassName(
          'inboxsdk__menuContent'
        );

        ReactDOM.render(
          <React.StrictMode>
            <Snippets />
          </React.StrictMode>,
          container
        );

        dropdown[0].appendChild(container);
      },
    });
  });
});
