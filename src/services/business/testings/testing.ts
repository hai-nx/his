import { PagedResultModel, ResultModel, ServiceRequestModel, ServiceRequestDetailModel, ServiceRequestRequestModel, ServiceRequestDetailResultModel } from '@/models'
import axiosClient from '@/utils/request'

const serviceRequestService = {
    getAll(input?: ServiceRequestRequestModel) {
        return axiosClient.get<PagedResultModel<ServiceRequestModel>>('api/Testing/GetAll', { params: input });
    },

    getServiceRequestDetailByServiceRequestId(serviceRequestId: string, genderType: number, isDetail: boolean) {
        return axiosClient.get<ResultModel<ServiceRequestDetailModel[]>>(`api/Testing/GetServiceRequestDetailRequesByServiceRequestId?serviceRequestId=${serviceRequestId}&genderType=${genderType}&isDetail=${isDetail}`);
    },

    getServiceRequestDetailResultByServiceRequestId(serviceRequestId: string, genderType: number) {
        return axiosClient.get<ResultModel<ServiceRequestDetailResultModel[]>>(`api/Testing/GetServiceRequestDetailResultByServiceRequestId?serviceRequestId=${serviceRequestId}&genderType=${genderType}`);
    },

    updateTestingStatus(serviceRequest: ServiceRequestModel) {
        return axiosClient.post<ResultModel<ServiceRequestModel>>('api/Testing/UpdateTestingStatus', serviceRequest);
    },

    updateTestingCancelStatus(serviceRequest: ServiceRequestModel) {
        return axiosClient.post<ResultModel<ServiceRequestModel>>('api/Testing/UpdateTestingCancelStatus', serviceRequest);
    }
};

export default serviceRequestService; 