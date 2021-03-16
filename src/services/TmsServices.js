import axios from 'axios';

const   TMS_API_BASE_URL ="http://localhost:8080";

class TmsServices{
    viewTaskList(ownerId){
        return axios.get(TMS_API_BASE_URL+'/viewTask?ownerId'+ownerId)
    }
}

export default new TmsServices();