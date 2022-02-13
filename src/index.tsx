import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import "./globalStyles.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// InboxSDK.loadScript("https://unpkg.com/react@17/umd/react.development.js");
// InboxSDK.loadScript(
//   "https://unpkg.com/react-dom@17/umd/react-dom.development.js"
// );

// InboxSDK.load("1.0", "INBOX_SDK_APP_ID").then(function (sdk) {
//   sdk.Compose.registerComposeViewHandler(function (composeView) {
//     composeView.addButton({
//       title: "teste 1",
//       iconUrl: chrome.extension.getURL("icon.png"),
//       hasDropdown: true,
//       onClick: function (event) {
//         const container = document.createElement("div");
//         container.setAttribute("id", "root");

//         const dropdown = document.getElementsByClassName(
//           "inboxsdk__menuContent"
//         );

//         ReactDOM.render(
//           <React.StrictMode>
//             <App />
//           </React.StrictMode>,
//           container
//         );

//         dropdown[0].appendChild(container);
//       },
//     });
//   });
// });
