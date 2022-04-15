const getPrediction = async (url, payload) => {
    const response = await fetch(`${url}/predict`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: payload
    })

    return response.json()
}

export {getPrediction}