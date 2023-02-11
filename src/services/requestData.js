import { handlerGetDataWithRequest, handlerSelecedDataWithPath, handlerSetDataWithKeyword } from '~/handler';
import { getListBookServices } from './getListBookServices';

export const requestData = async (req, listRequest, location, listSelecter, keyword) => {
    const { dataList, type, delay, setLoading, setListData } = req;
    setLoading(true);
    if (!dataList) {
        const data = handlerGetDataWithRequest({ listRequest, location, listSelecter });
        let result = await getListBookServices(data);
        if (keyword) {
            result = handlerSetDataWithKeyword(result, keyword);
        }
        const listDataSelect = handlerSelecedDataWithPath(result, listRequest, listSelecter, location);
        setListData(listDataSelect);
    } else {
        const result = await getListBookServices(dataList, type, delay);
        setListData(result);
    }
    // console.log('data: ', data);
    // console.log('listDataSelect: ', listDataSelect);
    setLoading(false);
};
