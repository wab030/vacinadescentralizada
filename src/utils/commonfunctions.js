export function formatName(string){
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatEmail(email){
    return email.toLowerCase();
}