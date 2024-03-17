export const humanClassificationResult = (classID) => {
    switch (classID) {
        case 0: return "aloevera"
        case 1: return "banana"
        case 2: return "bilimbi"
        case 3: return "cantaloupe"
        case 4: return "cassava"
        default: return "PALPALPAL"
    }
}

export const classifyImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    const response = await fetch("http://192.168.79.88:8080/api/upload-image", {
      method: "POST",
      body: formData,
    });
    const responseData = await response.json();

    return responseData.prediction
}