export const updateObjectInArray = (items, itemId, objPropNAme, newObjProps) => {
    return items.map(u => {
        if (u[objPropNAme] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}