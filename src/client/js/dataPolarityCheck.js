const checkPolarity = (polarity) => {
    let display;

    switch (polarity) {
        case 'P+':
            display = 'strong positive';
            break;

        case 'P':
            display = 'positive';
            break;

        case 'NEU':
            display = 'neutral';
            break;

        case 'N':
            display = 'negative';
            break;

        case 'N+':
            display = 'strong negative';
            break;

        case 'NONE':
            display = 'without polarity';
    }

    return display;
}


export { checkPolarity }