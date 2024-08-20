/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents Test Log Status object.
 */
export type TestLogStatus = {
    /**
     * Exception message
     */
    exception?: string;
    /**
     * Test Log Status code
     */
    status?: 'success' | 'failed' | 'fileAlreadyExists' | 'invalidInput' | 'invalidFileName' | 'invalidContainer' | 'transferFailed' | 'featureDisabled' | 'buildDoesNotExist' | 'runDoesNotExist' | 'containerNotCreated' | 'apiNotSupported' | 'fileSizeExceeds' | 'containerNotFound' | 'fileNotFound' | 'directoryNotFound' | 'storageCapacityExceeded';
    /**
     * Blob Transfer Error code
     */
    transferFailureType?: string;
};

