
import React from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { activeDoteAction } from "reduxToolkit/resumeControlsSlice/resumeControls";
import { educationDelete, educationGet } from "reduxToolkit/extraReducers";
import { useState } from "react";
import { ReactComponent as Trash } from '../../../../../assets/images/icons/trash.svg'
import { ReactComponent as Edit } from '../../../../../assets/images/icons/edit.svg'
import AddEducations from "../AddEducations/AddEducations";

const defaultData = {
	schoolName: "",
	educationDegree: "",
	typeStudy: "",
	location: "",
	currentStudy: false
}

function Educations() {
	const [isMoadalActive, setMoadalActive] = useState({educationAdd: false, educationEdit: false })
	const [editData, setEditData] = useState({})
	const dispatch = useDispatch();
	const  {educationPostIsSuccess,educationList,loading}  = useSelector(state => state.resume);
	useEffect(() => {
		if(educationPostIsSuccess) {
			dispatch(educationGet());
		}
	}, [dispatch,educationPostIsSuccess]);

	const deletEducation = id => {
		dispatch(educationDelete(id));
		dispatch(educationGet());
	};

	const changeEducation = (value) => {
		setEditData(value.data);
		setMoadalActive(prev => ({...prev, educationEdit: value.modal}));
	};

	const changePage = e => {
		e.preventDefault();
		dispatch(
			activeDoteAction([
				{ id: 5, label: "Experience" },
				{ id: 5, type: "workexperience" }
			])
		);
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(
			activeDoteAction([
				{ id: 7, label: "Contacts" },
				{ id: 7, type: "media" }
			])
		);
	};

	const [ trashHover, setTrashHover ] = useState(false)
	const [ editHover, setEditHover ] = useState(false)

	const TrashFunc = (int) => {
		setTrashHover(int)
	}

	const EditFunc = (int) => {
		setEditHover(int)
	}

	if(loading) {
		return <b>Loading...</b>
	}
	return (
		<>
			<div className="educations">
				<div className="educations__inner">
					<form onSubmit={handleSubmit}>
						<h2 className="educations__title">Educations</h2>
						<p className="educations__text">
							<span className="educations__textSpan">Freelancers who add their experience are twice as likely to win work.</span>
							<span className="educations__textSpan">But if you're just starting out, you can still create a greatprofile.</span>
							<span className="educations__textSpan">Just head on to the next page.</span>
						</p>
						<div className="educations__box">
							{educationList.map((el, int) => (
								<div className="educations__content" key={el.id}>
									<div className="educations__texts">
										<span className="educations__subtitle">{el.schoolName}</span>
										<div className="educations__study">
											<span className="educations__span">{el.typeStudy}</span>
											<span className="educations__telecommunication">{el.educationDegree}</span>
										</div>
									</div>

									<div className="educations__icons">
										<span className="educations__icon--create" type="button" onClick={() => changeEducation({data:el, modal:true})}>
											<Edit name="create-outline" className={`${ editHover === int ? "experience__box__hovering" : null }`}
												onMouseOver={()=>EditFunc(int)} 
      											onMouseOut={()=>EditFunc(false)}
											/>
										</span>

										<span className="educations__icon--delete" onClick={() => deletEducation(el.id)}>
											<Trash name="trash-outline"   className={`${ trashHover === int ? "experience__box__hoveringT" : null }`}
											      onMouseOver={()=>TrashFunc(int)} 
      											  onMouseOut={()=>TrashFunc(false)}
											/>
										</span>
									</div>
								</div>
							))}
						</div>

						<div className="educations__wrapper">
							<button
								style={{ cursor: "pointer" }}
								type="button"
								className="educations__buttonAdd"
								onClick={() => setMoadalActive(prev => ({...prev, educationAdd: true}))}
							>
								+ Add new
							</button>
						</div>

						<div className="educations__button">
							<button className="educations__back" type="button" onClick={changePage}>
								Back
							</button>
							<button className="educations__next" type="submit">
								Next
							</button>
						</div>
					</form>
				</div>
			</div>
			{
				isMoadalActive.educationAdd && <AddEducations removeModal={setMoadalActive} defaultInputData = {{...defaultData, type:"add"}}/>
			}
			{
				isMoadalActive.educationEdit && <AddEducations removeModal={setMoadalActive} defaultInputData = {{...editData, type:"edit"}}/>
			}

		</>
	);
}

export default Educations;