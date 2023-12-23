import { PagedResultModel, ServiceRequestModel } from '@/models'
import axiosClient from '@/utils/request'

const serviceRequestService = {
    getAll(params: any = null) {
        return axiosClient.get<PagedResultModel<ServiceRequestModel>>('api/Testing/GetAll', params);
    },
};

export default serviceRequestService; 