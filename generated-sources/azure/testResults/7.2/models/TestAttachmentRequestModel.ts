/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Test attachment request model
 */
export type TestAttachmentRequestModel = {
    /**
     * Attachment type By Default it will be GeneralAttachment. It can be one of the following type. { GeneralAttachment, AfnStrip, BugFilingData, CodeCoverage, IntermediateCollectorData, RunConfig, TestImpactDetails, TmiTestRunDeploymentFiles, TmiTestRunReverseDeploymentFiles, TmiTestResultDetail, TmiTestRunSummary }
     */
    attachmentType?: string;
    /**
     * Comment associated with attachment
     */
    comment?: string;
    /**
     * Attachment filename
     */
    fileName?: string;
    /**
     * Base64 encoded file stream
     */
    stream?: string;
};

