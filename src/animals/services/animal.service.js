import axios from "axios";

const http = axios.create({
    baseURL: "https://freetestapi.com/",
});

export class AnimalService {
    getAllAnimals(){
        return http.get("api/v1/animals?limit=10");
    }
}