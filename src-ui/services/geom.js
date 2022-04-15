const getGeom = async (url, payload) => {
    const response = await fetch(`${url}/render`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: payload
    })

    return response.json()
}

export {getGeom}
