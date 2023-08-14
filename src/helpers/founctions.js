export const shotern = (title) => {
    const splited = title.split(" ");
    return `${splited[0]} ${splited[1]}`
}

export const isInCart = (state, id) => {
    return !!state.selectedItem.find(item => item.id === id);
}

export const quantityCounter = (state , id) => {
    const item = state.selectedItem.find(item => item.id === id);
    if(!item){
        return false;
    } else{
        return item.quantity;
    }
}