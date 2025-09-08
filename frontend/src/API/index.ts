import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:4000/api', // Replace with your API base URL

    headers: {
        'Content-Type': 'application/json',
    },
});
export const getProjects = () => API.get("/projects");
