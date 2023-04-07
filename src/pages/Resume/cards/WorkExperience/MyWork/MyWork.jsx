import React from "react";
import "./style.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { experiencePost, experienceEdit } from "reduxToolkit/extraReducers";

function MyWork({ removeModal, defaultData }) {
	const { companyName, job, currentWorking, descripeion, type, id } = defaultData
	const [experience, setExperience] = useState({ companyName, job, currentWorking, descripeion });

	const dispatch = useDispatch();

	let data = new FormData();
	data.append("companyName", experience.companyName);
	data.append("Job", experience.job);
	data.append("CurrentWorking", experience.currentWorking);
	data.append("Descripeion", experience.descripeion);

	console.log(defaultData);
	const handleClick = e => {
		e.preventDefault();
		if (type === "add") {
			console.log(data);
			dispatch(experiencePost(data));
			removeModal((prev) => ({ ...prev, experienceAdd: false }))
		} else {
			dispatch(experienceEdit({ data, id }));
			removeModal((prev) => ({ ...prev, experienceAdd: false }))
		}
	};

	const changePage = e => {
		e.preventDefault();
		removeModal(false)
	};

	return (
		<div className="mywork">
			<div className="mywork__inner">
				<form onSubmit={handleClick}>
					<h2 className="mywork__text">Work experience</h2>

					<div className="mywork__content">
						<input
							className="mywork__input"
							type="text"
							placeholder="Company name"
							value={experience.companyName}
							onChange={e => setExperience(prev => ({ ...prev, companyName: e.target.value }))}
						/>
					</div>

					<div className="mywork__content">
						<input
							className="mywork__input"
							type="text"
							placeholder="Job"
							value={experience.job}
							onChange={e => setExperience(prev => ({ ...prev, job: e.target.value }))}
						/>
					</div>

					<div className="mywork__checkbox">
						<input
							className="mywork__inputCheckbox"
							type="checkbox"
							id="checkbox"
							checked={experience.currentWorking}
							onChange={() => setExperience(prev => ({ ...prev, currentWorking: !prev.currentWorking }))}
						/>
						<label className="mywork__labelCheckbox" htmlFor="checkbox">
							I am currently working in this role
						</label>
					</div>

					<div className="mywork__wrapper">
						<div className="mywork__wrapperDate">
							<label className="mywork__label" htmlFor="data">
								Date from
							</label>
							<input className="mywork__inputDate"  type="date" id="data" />
						</div>

						<div className="mywork__wrapperDate">
							<label className="mywork__label" htmlFor="time">
								To
							</label>
							{experience.currentWorking
								? <input disabled={true} className="mywork__inputDate" type="date" id="time" />
								: <input disabled={false} className="mywork__inputDate" type="date" id="time" />
							}
						</div>
					</div>

					<div className="mywork__descriptionWrapper">
						<textarea
							className="mywork__description"
							type="text"
							placeholder="Description"
							value={experience.descripeion}
							onChange={e => setExperience(prev => ({ ...prev, descripeion: e.target.value }))}
						></textarea>
					</div>

					<div className="mywork__button">
						<button type="button" className="mywork__back"  onClick={changePage}>
							Cancel
						</button>
						<button type="submit" className="mywork__next">
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default MyWork;
