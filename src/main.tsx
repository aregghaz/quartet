import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '@styles/index.scss'
import App from './App'
import {Provider} from "react-redux";
import {store} from "@store/store";
import {BrowserRouter} from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </StrictMode>,
)
