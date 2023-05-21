export default interface TreatmentModel {
    id: string | undefined,
    code: string,
    patientId: string | undefined,
    patientCode: string,
    patientName: string,
    patientTypeId: string | undefined,
    treatmentTypeId: string | undefined,
    dob?: Date,
    year: number,
    age: number,
    ageType: number,
    genderId: string | undefined,
    genderCode?: string,
    genderName?: string,
    careerId?: string,
    careerCode?: string,
    careerName?: string,
    ethnicId?: string,
    ethnicCode?: string,
    ethnicName?: string,
    countryId?: string,
    countryCode?: string,
    countryName?: string,
    provinceId?: string,
    provinceCode?: string,
    provinceName?: string,
    districtId?: string,
    districtCode?: string,
    districtName?: string,
    wardId?: string,
    wardCode?: string,
    wardName?: string,
    address?: string,
    vir_address?: string,
    identificationNumber?: string,
    phoneNumber?: string,
    relativeName?: string,
    relativeAddress?: string,
    relativeIdentificationNumber?: string
    relativePhoneNumbar?: string,

    inTimeClinical: Date,
    inTime?: Date,
    outTime?: Date

}

export interface TreatmentFilterModel {
    inTimeClinicalFilter?: Date,
    inTimeFilter?: Date,
    outTime?: Date
}