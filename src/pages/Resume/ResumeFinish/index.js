import { useEffect } from 'react'
import classes from "./resume-finish.module.scss"
import "./ComplateResume.scss"
import arrowLeft from "../../../assets/images/arrow-left.svg"
import logo from "../../../assets/images/Logo.svg"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { resumeSelect,resumeFinishPost, userRoles} from 'reduxToolkit/extraReducers'
import Resume1 from './complate-resume/resume-list/Resume1'
import Resume2 from './complate-resume/resume-list/Resume2'
import Resume3 from './complate-resume/resume-list/Resume3'
import Resume4 from './complate-resume/resume-list/Resume4'
import Resume5 from './complate-resume/resume-list/Resume5'
import Resume6 from './complate-resume/resume-list/Resume6'
import { activeDoteAction } from 'reduxToolkit/resumeControlsSlice/resumeControls'

const ReumeFinish = () => {
  const resumeDetails = useSelector(state => state.resume.resumeDetails)
  const loading = useSelector(state => state.resume.loading)
  const resumeOnSuccess = useSelector(state => state.login.resumeOnSuccess)
  const dispatch = useDispatch()
  const {resumeId} = useParams()

  const data = new FormData()
  data.append("resume", resumeId)

  useEffect(() => {
    dispatch(resumeSelect(data))
  },[])

  useEffect(() => {
    if(resumeOnSuccess) {
      dispatch(
        activeDoteAction([
          {id: 1,label: "Personal information"},
          {id: 1,label: "photo"}
        ])
      );
      dispatch(userRoles())
    }
  },[resumeOnSuccess])

  const routes = [
    {id:1, resumeId: 1, element: <Resume1 {...resumeDetails}/>},
    {id:2, resumeId: 2, element: <Resume2 {...resumeDetails}/>},
    {id:3, resumeId: 3, element: <Resume3 {...resumeDetails}/>},
    {id:4, resumeId: 4, element: <Resume4 {...resumeDetails}/>},
    {id:5, resumeId: 6, element: <Resume5 {...resumeDetails}/>},
    {id:6, resumeId: 5, element: <Resume6 {...resumeDetails}/>},
  ]


  const handleSubmit = () => {
    const data = new FormData()
    data.append("finish", true)
    dispatch(resumeFinishPost(data))

  }

  const handleClick = () => {
    dispatch(
			activeDoteAction([
				{id: 1,label: "Personal information"},
				{id: 1,label: "photo"}
			])
		);
  }

  return (
   <>
    {
      loading
      ?(
        <p>lading...</p>
      )
      :(
        <div className={classes.resume__finish}>
          <div className={classes.resume__finish_container}>
            <div className={classes.resume__finish_inner}>
              <div className={classes.resume__finish_header}>
                <div className={classes.resume__finish_logo}>
                  <a className={classes.logo} href="/">
                    <img src={logo} alt="NAPA automotive" />
                  </a> 
                </div>
                  <button className={classes.resume__finish_back} onClick={handleClick}>
                    <img src={arrowLeft} alt="Arrov left" />
                    <span>Back</span>
                  </button>
              </div>
              <div className={classes.resume__finish_main}>
                <h3 className={classes.resume__finish_title}>Your Resume is Done!</h3>
                <div className={classes.resume__finish_box}>
                  <ul className={classes.resume}>
                    {
                      routes.map(el => (
                        (el.resumeId === (resumeId * 1)) && <li key={el.id}>{el.element}</li>
                      ))
                    }
                  </ul>
                  <div className={classes.finish__box}>
                    <button className={classes.finish} onClick={handleSubmit}> 
                      Finish
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
   </>
   
  )
}

export default ReumeFinish