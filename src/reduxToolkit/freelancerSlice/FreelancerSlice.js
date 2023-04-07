import { createSlice } from "@reduxjs/toolkit";
import { getFreelancer } from '../extraReducers.js'

const initialState = {
	loading: false,
	error: "",
	data: [],
	sidePage: false
};

const FreelanceSlice = createSlice({
	name: "resume",
	initialState,
	reducers: {
		sidePage: state => {
			state.sidePage = true;
		}
	},
	extraReducers: build => {
	build.addCase(getFreelancer.pending , (state) => {
			state.loading = true
		} )
	build.addCase(getFreelancer.fulfilled, (state, {payload}) => {
			state.loading = false
			state.data = payload
		})
	build.addCase(getFreelancer.rejected, (state, action) => {
			state.loading = false
			state.error = action.error.message
		})

	}
});
export const { sidePage } = FreelanceSlice.actions; /*resumeSlice.actions*/
export default FreelanceSlice.reducer;