const checkUrlValidation = (url) => {
    const urlPattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9-._~:?#@!$&'()*+,;=\/%]*)?$/g;
    
    return url.match(urlPattern);
}

export { checkUrlValidation }