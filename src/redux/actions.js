export const FETCH_TOKEN_BEGIN = "FETCH_TOKEN_BEGIN";
export const FETCH_TOKEN_SUCCESS = "FETCH_TOKEN_SUCCESS";
export const FETCH_TOKEN_FAILURE = "FETCH_TOKEN_FAILURE";

export const fetchTokenBegin = () => ({
    type: FETCH_TOKEN_BEGIN
});

export const fetchTokenSuccess = (token) => ({
    type: FETCH_TOKEN_SUCCESS,
    payload: { token }
});

export const fetchTokenFailure = (error) => ({
    type: FETCH_TOKEN_FAILURE,
    payload: { error }
});

const handleErrors = (response) => {
    if(!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchToken = () => {
    return dispatch => {
        dispatch(fetchTokenBegin());
        return fetch("http://localhost:5000/jwt-login", {
            method: 'POST',        
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                clientSecret: "YtdUuIlaY0vozIBsbUVtXKMZnyjzMQkGNTbCgvpgLQzXoEjo9Y",
                clientId: "areezvisram.com"
            })
        })
        .then(handleErrors)
        .then((res) => res.json())
        .then((json) => {            
            dispatch(fetchTokenSuccess(json.jwtToken));
            return json.token;
        })
        .catch((error) => dispatch(fetchTokenFailure(error)));
    }
}