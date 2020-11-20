function validateName(name) {
    if (name === undefined || name === "") {
        throw TypeError('Name cannot be blank');
    }
}

function create(name) {
    return {
        id: cuid(),
        name: name,
        checked: false
    }
}

export default { validateName, create };