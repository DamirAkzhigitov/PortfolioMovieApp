import axios from 'axios';

// create a new axios instance
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGI5MWYxMjVjNzdiOWMyZWUxNTZkODNiNzg2NmNmYiIsInN1YiI6IjY1YWQ4ODNlNTI5NGU3MDBhZTIzNTY4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pMyddykhJi-6ssth2wla2BhVTR7bOgveYQcAM_SEcRw',
    }
});

// Add a response interceptor
instance.interceptors.response.use(
    response => {
        // if the request was successful then just return the response
        return response;
    },
    error => {
        if (error.response) {
            // server responded with a status other than 200 range
            console.error('Response error', error.response);
        } else if (error.request) {
            // if request was made but no response was received
            console.error('Request error', error.request);
        } else {
            // if there is an error in setting up the request
            console.error('Error', error.message);
        }

        // reject the promise/return the error back to the caller
        return Promise.reject(error);
    }
);

export default instance;