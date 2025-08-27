import commonAPI from "./commonAPI"
import BASEURL from "./baseUrl";

//addResumeAPI - POST   called by Steps Component
export const addResumeAPI = async(resume) => {
   return await commonAPI("POST",`${BASEURL}/all-resumes`,resume)
}
//editResumeAPI -PUT

//AddHistoryAPI -POST
export const addDownloadHistoryAPI = async(resume) => {
  return await  commonAPI("POST",`${BASEURL}/history`,resume)
}
//getHistoryAPI - GET called by history when it loads in browser(useEffect)
export const getHistoryAPI = async() => {
  return await  commonAPI("GET",`${BASEURL}/history`,{})
}
//deleteHistoryAPI - DELETE
export const deleteHistoryAPI = async(id) => {
  return await  commonAPI("DELETE",`${BASEURL}/history/${id}`,{})
}
//getResumeAPI = GET called by edit component when its open in  browser(useeffect)
export const getResumeAPI = async(id) => {
  return await  commonAPI("GET",`${BASEURL}/all-resumes/${id}`,{})
}