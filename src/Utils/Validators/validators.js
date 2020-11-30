export  const required = value => {
    if (value) return undefined ;
    return "Suda pishi obyaz, field is required";
};

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `max length is ${maxLength}, mnogo karoch` ;
    return undefined;
}

