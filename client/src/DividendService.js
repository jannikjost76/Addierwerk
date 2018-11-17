const axios = require('axios');

const url = 'http://localhost:5000/api/dividends';

class DividendService {
    static getDividends() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url.concat('/all'));
                const data = res.data;
                resolve(data);
            } catch (err) {
                reject(err);
            }
        })
    }

    static updateDatabase() {

    }
}

export default DividendService;
