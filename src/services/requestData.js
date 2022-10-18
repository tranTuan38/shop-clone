import { handlerGetDataWithRequest, handlerSelecedDataWithPath } from '~/handler';
import { getListBookServices } from './getListBookServices';

export const requestData = async (req, listRequest, location, listSelecter) => {
    const { setLoading, setListData } = req;
    setLoading(true);
    const data = handlerGetDataWithRequest({ listRequest, location, listSelecter });
    const result = await getListBookServices(data);
    const listDataSelect = handlerSelecedDataWithPath(result, listRequest, listSelecter, location);
    // console.log('data: ', data);
    // console.log('listDataSelect: ', listDataSelect);
    setListData(listDataSelect);
    setLoading(false);
};
