export const getListBookServices = (data) => {
    return new Promise((resolve, reject) => {
        if (data.length) {
            setTimeout(() => resolve(data), 1000);
        } else {
            reject(new Error(`Invalid data`));
        }
    });
};
