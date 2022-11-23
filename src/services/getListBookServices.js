export const getListBookServices = (data, type, delay = 1000) => {
    return new Promise((resolve, reject) => {
        if (data.length || type) {
            setTimeout(() => resolve(data), delay);
        } else {
            reject(new Error(`Invalid data`));
        }
    });
};
