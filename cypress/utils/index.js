//Random Email function is the function for random email
export const randomEmail = () => {
    return (
        Math.random()
        .toString(36)
        .substr(2, 7) + '@vivifyacademy.com'
    );
    
}
export const randomTitle = () => {
    return (
        Letters.random('ABCDEFGHIJKLMNPQRSTUVWXTZabcdefghiklmnpqrstuvwxyz')
        .toString(36)
        .substr(2, 7)
    );
}
export const randomFirstName = () => {
    return (
        Math.random()
        .toString(36)
        .substr(2, 7)
    );
}