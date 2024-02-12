import axios from "axios";
const REST_API_BASED_URL = "http://localhost:8085/api/employees";

// export const listEmployees = () => {
//     return axios.get(REST_API_BASED_URL);
// }

export const listEmployees = () => axios.get(REST_API_BASED_URL);

export const createEmployee = (employee) => axios.post(REST_API_BASED_URL, employee);