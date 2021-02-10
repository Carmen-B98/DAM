import axios from 'axios';

const STAGIU_API_BASE_URL = "http://localhost:8070/api/v1/stagiuri";

class StagiuService {

    getStagiuri(){
        return axios.get(STAGIU_API_BASE_URL);
    }

    createStagiu(stagiu){
        return axios.post(STAGIU_API_BASE_URL, stagiu);
    }

    getStagiuById(stagiuId){
        return axios.get(STAGIU_API_BASE_URL + '/' + stagiuId);
    }

    updateStagiu(stagiu, stagiuId){
        return axios.put(STAGIU_API_BASE_URL + '/' + stagiuId, stagiu);
    }

    deleteStagiu(stagiuId){
        return axios.delete(STAGIU_API_BASE_URL + '/' + stagiuId);
    }
    
}

export default new StagiuService()