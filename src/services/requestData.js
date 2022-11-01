import { handlerGetDataWithRequest, handlerSelecedDataWithPath } from '~/handler';
import { getListBookServices } from './getListBookServices';

export const requestData = async (req, listRequest, location, listSelecter) => {
    const { dataList, type, setLoading, setListData } = req;
    setLoading(true);
    if (!dataList) {
        const data = handlerGetDataWithRequest({ listRequest, location, listSelecter });
        const result = await getListBookServices(data);
        const listDataSelect = handlerSelecedDataWithPath(result, listRequest, listSelecter, location);
        setListData(listDataSelect);
    } else {
        const result = await getListBookServices(dataList, type);
        setListData(result);
    }
    // console.log('data: ', data);
    // console.log('listDataSelect: ', listDataSelect);
    setLoading(false);
};
