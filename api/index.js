const axios = require('axios').default;
const request = require('request');
const requestify = require('requestify');

const url = "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15";

const fetchDataAxios = async () => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const fetchDataRequest = async () => {
    const proimse = new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                resolve(JSON.parse(body));
            }
        });
    });
    return await proimse;
}


const fetchDataRequestify = async () => {
    const proimse = new Promise((resolve, reject) => {
        requestify.get(url).then((response) => {
            resolve(response.getBody());
        }
        ).catch((error) => {
            reject(error);
        })
    });
    return await proimse;


}


fetchDataAxios().then(data => console.log(data));
fetchDataRequest().then(data => console.log(data));
fetchDataRequestify().then(data => console.log(data));