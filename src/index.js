import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'mobx-react'
import apple from './stores/appleStore'

ReactDOM.render(
    <Provider apple={apple}>
        <App />
    </Provider>,
    document.getElementById('root')
)