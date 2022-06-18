import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { ToastProvider } from 'react-toast-notifications';

import { radioApi } from './redux/radioApi';
import App from './App';
import Global from 'UI/globalStyles';

ReactDOM.render(
  <ApiProvider api={radioApi}>
    <BrowserRouter>
      <Global />
      <ToastProvider
        autoDismiss
        autoDismissTimeout={3000}
        placement="bottom-center"
      >
        <App />
      </ToastProvider>
    </BrowserRouter>
  </ApiProvider>,
  document.getElementById('root')
);
