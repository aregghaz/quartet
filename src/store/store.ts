export type { AboutState }  from "./slices/aboutSlice"
export type { ButtonState } from "./slices/buttonSlice"
export type { MediaState }  from "./slices/mediaSlice"
export type { MenuState }   from "./slices/menuSlice"
export type { SocState }    from "./slices/socLinksSlice"

import { configureStore } from "@reduxjs/toolkit"
import aboutReducer        from "./slices/aboutSlice"
import buttonReducer       from "./slices/buttonSlice"
import mediaReducer        from "./slices/mediaSlice"
import menuReducer         from "./slices/menuSlice"
import socLinksReducer     from "./slices/socLinksSlice"

export const store = configureStore({
  reducer: {
    about:  aboutReducer,
    button: buttonReducer,
    media:  mediaReducer,
    menu:   menuReducer,
    soc:    socLinksReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
