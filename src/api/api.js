import axios from "axios"
export const authApi = {
    
    register(name, email, password){
       return axios.post("http://localhost:8080/api/",{
            name:name, email:email, password:password }).then(res => {
            console.log(res.data)
        })
    },

    login(email, password){
let data = JSON.stringify({
  "email": email,
  "password": password
});

let config = {
  method: 'post',
  url: 'http://localhost:8080/log/',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

return axios(config)

    },
}
export const tabletApi = {
    getTable() {
       return axios.get("http://localhost:8080/tablet")
    },
    updateTable(head = "", name=" ", volume=0, batch=0, date="1:1:2010", entity=0, expiration=" "){
        debugger
        return axios.put("http://localhost:8080/tablet", {head: head, name:name, volume: volume, batch: batch, date:date, entity: entity, expiration: expiration})
    }
}
