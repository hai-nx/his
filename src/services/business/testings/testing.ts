import { PagedResultModel, ResultModel, ServiceRequestModel, ServiceRequestDataModel, ServiceRequestRequestModel } from '@/models'
import axiosClient from '@/utils/request'

const serviceRequestService = {
    getAll(input?: ServiceRequestRequestModel) {
        return axiosClient.get<PagedResultModel<ServiceRequestModel>>('api/Testing/GetAll', { params: input });
    },

    getServiceRequestDataByServiceRequestId(serviceRequestId: string, genderType: number, isDetail: boolean) {
        return axiosClient.get<ResultModel<ServiceRequestDataModel[]>>(`api/Testing/GetServiceRequestDataByServiceRequestId?serviceRequestId=${serviceRequestId}&genderType=${genderType}&isDetail=${isDetail}`);
    },

    getServiceResultDataByServiceRequestId(serviceRequestId: string, genderType: number) {
        return axiosClient.get<ResultModel<ServiceRequestDataModel[]>>(`api/Testing/GetServiceResultDataByServiceRequestId?serviceRequestId=${serviceRequestId}&genderType=${genderType}`);
    }
};

export default serviceRequestService; 