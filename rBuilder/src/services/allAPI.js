import commonAPI from "./commonAPI"
import BASEURL from "./baseUrl";


//addResumeAPI - POST   called by Steps Component
export const addResumeAPI = (resume) => {
    commonAPI("POST",`${BASEURL}/all-resume`,resume)
}
//editResumeAPI -PUT
//AddHistoryAPI -POST
export const addDownloadHistoryAPI = (result) => {
    commonAPI("POST",`${BASEURL}/history`,result)
}
