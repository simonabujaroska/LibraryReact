import axios from "axios";

//spravuvanje so CORS error

const instance = axios.create({
    baseURL: 'http://localhost:9090/api',
    headers: {
        'Access-Control-Allow-Origin' : '*'

    }
})


//ovozmozhuva pristap do instancata od ostanatite delovi na React app
export default instance;