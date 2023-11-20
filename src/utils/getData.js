//this method is for accessing the data the the uri
const proxy = 'https://people.rit.edu/~dsbics/proxy/http://ist.rit.edu/api/';

// endpoint is the uri I want to hit - example: 'about/'
async function getData(endpoint) {
    //go get the data with the base and the endpoint
    const result = await fetch(`${proxy}${endpoint}`);
    //return it but turn it to json first
    return await result.json();
}

export default getData;