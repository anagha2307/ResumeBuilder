import commonAPI from "./commonAPI"


//addResumeAPI - POST   called by Steps Component
const addResumeAPI = (resume) => {
    commonAPI("POST",`${BASEURL}/all-resume`,resume)
}
export default commonAPI