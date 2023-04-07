import React from "react";
import "./Photo.scss";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { activeDoteAction } from "reduxToolkit/resumeControlsSlice/resumeControls";
import { countryList, photoUpload } from "reduxToolkit/extraReducers";
import InputMask from 'react-input-mask';

function Photo() {
	const [uploaded, setUploaded] = useState("");
	const hiddenFileInput = useRef(null);
	const firstName = useRef("");
	const lastName = useRef("");
	const email = useRef("");
	const phoneNumber = useRef("");
	const dispatch = useDispatch();

	const handleClick = event => {
		hiddenFileInput.current.click();
	};

	const handleChange = event => {
		console.log(event.target.files);
		setUploaded(event.target.files[0]);
	};
	// console.log(uploaded);
	const handleSubmit = event => {
		event.preventDefault();

		console.log("Number", phoneNumber);

		let formdatas = new FormData();
		formdatas.append("FirstName", firstName.current.value);
		formdatas.append("LastName", lastName.current.value);
		formdatas.append("Email", email.current.value);
		formdatas.append("Phone", phoneNumber.current.value);
		formdatas.append("Image", uploaded);
		if(phoneNumber.current.value.length > 12){
			dispatch(countryList());
			dispatch(photoUpload(formdatas));
			dispatch(
				activeDoteAction([
					{ id: 2, label: "Address" },
					{ id: 2, type: "country" }
				])
			);
		}

		console.log(formdatas);
	};

	return (
		<div className="photoCard">
			{!uploaded && (
				<div onClick={handleClick} className="imageUpload">
					<div className="imageUp"></div>
					<h3 className="title">Add your profile photo</h3>
				</div>
			)}
			{uploaded && (
				<div onClick={handleClick} className="imageUpload">
					<div className="imageUp">
						<img className="uploadedImage" src={URL.createObjectURL(uploaded)} alt="uploaded images" />
					</div>
					<h3 className="title">Change your profile photo</h3>
				</div>
			)}
			<input type="file" accept=".png, .jpg, .jpeg" ref={hiddenFileInput} onChange={handleChange} style={{ display: "none" }} />
			<form onSubmit={handleSubmit} method="post">
				<div className="inputBox">
					<div>
						<h5>Firstname*</h5>
						<input ref={firstName} type="text" placeholder="Write in your first name" required />
					</div>
					<div>
						<h5>Lastname*</h5>
						<input ref={lastName} type="text" placeholder="Write in your last name" required />
					</div>
					<div>
						<h5>E-mail*</h5>
						<input ref={email} type="email" placeholder="Abcdefg1234@inbox.com" required />
					</div>
					<div>
						<h5>Phone Number*</h5>
				
						    <InputMask ref={phoneNumber}  mask='+998 (99)-999-99-99'  placeholder="+XXX (XX) XXX-XX-XX"></InputMask>
					
					</div>
				</div>
				<button type="submit" className="next_btn_photoCart" >Next</button>
			</form>
		</div>
	);
}

export default Photo;
