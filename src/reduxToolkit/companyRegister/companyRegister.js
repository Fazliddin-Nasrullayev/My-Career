import {
    createSlice
} from "@reduxjs/toolkit"
import { addCompanyContacts, addCompanyInformation, addCompanyLocation, createCompanyUserPost } from "reduxToolkit/extraReducers"


const initialState = {
    activeDote: {
        id: 1,
        label: "Company Information"
    },
    activeCard: {
        id: 1,
        label: "information"
    },
    loading: false,
    error: null,
    contactsIsSuccess: ''
}


const companyRegister = createSlice({
    name: "companyRegister",
    initialState,
    reducers: {
        activeDoteAction: (state, {
            payload
        }) => {
            state.activeDote = payload[0]
            state.activeCard = payload[1]
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createCompanyUserPost.pending, (state) => {
            state.loading = true;
        }).addCase(createCompanyUserPost.fulfilled, (state, { payload }) => {
            state.loading = false;
        }).addCase(createCompanyUserPost.rejected, (state, action) => {
            state.error = action.error.message;
        })
        builder.addCase(addCompanyInformation.pending, (state) => {
            state.loading = false;
        }).addCase(addCompanyInformation.fulfilled, (state, action) => {
            state.loading = false;
        }).addCase(addCompanyInformation.rejected, (state, action) => {
            state.error = action.error.message;
        })
        builder.addCase(addCompanyLocation.pending, (state) => {
            state.loading = false;
        }).addCase(addCompanyLocation.fulfilled, (state, action) => {
            state.loading = false;
        }).addCase(addCompanyLocation.rejected, (state, action) => {
            state.error = action.error.message;
        })
        builder.addCase(addCompanyContacts.pending, (state) => {
            state.loading = true;
            state.contactsIsSuccess = false
        }).addCase(addCompanyContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.contactsIsSuccess = true
        }).addCase(addCompanyContacts.rejected, (state, action) => {
            state.error = action.error.message;
        })
    }
})

export const {
    activeDoteAction,
    activeCardAction
} = companyRegister.actions

export default companyRegister.reducer