const requester = function () {
    const baseUrl = "https://baas.kinvey.com/";

    const appKey = "kid_rk9KMSEQS";
    const appSecret = "59c3df49471b4c5798ac13927b4136e8";

    const get = function (endpoint, module, type) {
        const headers = makeHeaders(type, 'GET');
        const url = `${baseUrl}${module}/${appKey}/${endpoint}`;

        return fetch(url, headers);
    };

    const post = function (endpoint, module, type, data) {
        const headers = makeHeaders(type, 'POST', data);
        const url = `${baseUrl}${module}/${appKey}/${endpoint}`;

        return fetch(url, headers);
    };

    const put = function (endpoint, module, type, data) {
        const headers = makeHeaders(type, 'PUT', data);
        const url = `${baseUrl}${module}/${appKey}/${endpoint}`;

        return fetch(url, headers);
    };

    const del = function (endpoint, module, type) {
        const headers = makeHeaders(type, 'DELETE');
        const url = `${baseUrl}${module}/${appKey}/${endpoint}`;

        return fetch(url, headers);
    };

    const makeAuth = (type) => {
        return type === 'Basic'
            ? 'Basic ' + btoa(appKey + ':' + appSecret)
            : 'Kinvey ' + sessionStorage.getItem('authtoken');
    }

    const makeHeaders = (type, httpMethod, data) => {
        const headers = {
            method: httpMethod,
            headers: {
                'Authorization': makeAuth(type),
                'Content-Type': 'application/json'
            }
        };

        if (httpMethod === 'POST' || httpMethod === 'PUT') {
            headers.body = JSON.stringify(data);
        }

        return headers;
    }

    return {
        get,
        post,
        del,
        put,
    }
}();