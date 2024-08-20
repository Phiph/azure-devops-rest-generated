/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AfnStrip = {
    /**
     * Auxiliary Url to be consumed by MTM
     */
    auxiliaryUrl?: string;
    /**
     * Creation date of the AfnStrip
     */
    creationDate?: string;
    /**
     * File name of the attachment created
     */
    fileName?: string;
    /**
     * ID of AfnStrip. This is same as the attachment ID.
     */
    id?: number;
    /**
     * Project identifier which contains AfnStrip
     */
    project?: string;
    /**
     * Service in which this attachment is stored in
     */
    storedIn?: string;
    /**
     * Afn strip stream.
     */
    stream?: string;
    /**
     * ID of the testcase.
     */
    testCaseId?: number;
    /**
     * Backing test result id.
     */
    testResultId?: number;
    /**
     * Backing test run id.
     */
    testRunId?: number;
    /**
     * Byte stream (uncompressed) length of Afn strip.
     */
    unCompressedStreamLength?: number;
    /**
     * Url of the attachment created.
     */
    url?: string;
};

