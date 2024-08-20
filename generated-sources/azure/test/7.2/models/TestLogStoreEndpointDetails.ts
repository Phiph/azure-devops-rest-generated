/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents Test Log store endpoint details.
 */
export type TestLogStoreEndpointDetails = {
    /**
     * Test log store connection Uri.
     */
    endpointSASUri?: string;
    /**
     * Test log store endpoint type.
     */
    endpointType?: 'root' | 'file';
    /**
     * Test log store status code
     */
    status?: 'success' | 'failed' | 'fileAlreadyExists' | 'invalidInput' | 'invalidFileName' | 'invalidContainer' | 'transferFailed' | 'featureDisabled' | 'buildDoesNotExist' | 'runDoesNotExist' | 'containerNotCreated' | 'apiNotSupported' | 'fileSizeExceeds' | 'containerNotFound' | 'fileNotFound' | 'directoryNotFound' | 'storageCapacityExceeded';
};

