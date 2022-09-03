import axios from "../client/HttpClient"
import QueryModel from "../model/Query.model";


const getReport = (text, keyword) => {

    return axios.post('/lookup/report', null, { params: new QueryModel(text, keyword) });
}
const reporter = { getReport: getReport }


export default reporter;
