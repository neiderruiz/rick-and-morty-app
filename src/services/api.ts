const URL_API = process.env.REACT_APP_URL_API;

export const get = async (endpoint: string) => {
    if (!URL_API) return console.log('no tienes una url de api');
    const consult = await fetch(`${URL_API}${endpoint}`);
    try {
        const data = await consult.json();
        return data;
    } catch (error) {
        return error;
    }
}