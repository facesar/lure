import { combineReducers } from "redux";
import CryptoSLice from "../features/crypto/CryptoSlice";

const reducers = combineReducers({
    CRYPTO: CryptoSLice,
});

export default reducers;