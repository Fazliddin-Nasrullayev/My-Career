import {
	configureStore
} from "@reduxjs/toolkit";
import LoginSlice from "./loginSlice/LoginSlice";
import resumeSlice from "./resumeSlice/ResumeSlice";
import FreelanceSlice from "./freelancerSlice/FreelancerSlice";
import lenguage from "./lenguageSlice/LenguageSlice"
import contract from "./contractSlice/contractSlice"
import resumeControle from "./resumeControlsSlice/resumeControls"
import companyRegister from "./companyRegister/companyRegister";
import JobsSlice from "./jobsSlice/JobsSlice";
import projectSlice from "./resumeSlice/projectSlice";

const store = configureStore({
	reducer: {
		login: LoginSlice,
		resume: resumeSlice,
		freelance: FreelanceSlice,
		lenguage,
		contract,
		resumeControle,
		companyRegister,

		jobs: JobsSlice,
		project: projectSlice
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false
		})
});

export default store;