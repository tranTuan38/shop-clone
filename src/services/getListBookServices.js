export const getListBookServices = (data, type) => {
    return new Promise((resolve, reject) => {
        if (data.length || type) {
            setTimeout(() => resolve(data), 1000);
        } else {
            reject(new Error(`Invalid data`));
        }
    });
};
