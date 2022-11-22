import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { name } from './name';
import initialState from '../../initialState';

export const getInfoCrypto = createAsyncThunk(
    `${name}/getInfoCrypto`,
    async () => {
        try {
            const response = await axios.get(`https://api.coingecko.com/api/v3/exchange_rates`);
            // console.log(response.data); 
            return response.data;
        } catch (error) {
            return error.data
        }
    },
);


const CryptoSLice = createSlice({
    name,
    initialState: initialState.one,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getInfoCrypto.pending, (state) => {
                state.posts = [];
                state.status = 'loading';
            })
            .addCase(getInfoCrypto.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.status = 'succeded';
                state.error = action.payload;
            })
            .addCase(getInfoCrypto.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
    }
});

//selectors

export const selectorCrypto = (state) => state.CRYPTO.posts; 
export const selectorLoadingCrypto = (state) => state.CRYPTO.status;  
export const selectorErrCrypto = (state) => state.CRYPTO.error;


export default CryptoSLice.reducer;