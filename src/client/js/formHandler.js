const handleSubmit = async (event) => {
    event.preventDefault()
    const serverUrl = `http://localhost:3000`;
    let userInput = document.getElementById('name').value;

    if (!!Client.checkUrlValidation(userInput)) {
        console.log("::: Form Submitted :::");

        const response = await postData(`${serverUrl}/nlp`, { url: userInput });
        prepareDataToView(response);

    } else {
        alert('Invalid URL, please enter a valid URL');
    }
}

const postData = async (url = '', data = {}) => {
    const response = await fetch(`${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();

        return newData;
    } catch (error) {
        throw error;
    }
}

const prepareDataToView = (data) => {
    document.getElementById('polarity').innerHTML = `Polarity: ${Client.checkPolarity(data.score_tag)}`;
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.subjectivity?.toLowerCase()}`;
    document.getElementById("confidence").innerHTML = `Confidence: ${parseInt(data.confidence)}`;
    document.getElementById("text").innerHTML = `Confidence: ${data?.sentence_list[0]?.text}`;
}

export { handleSubmit }
