/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SummaryMailSection = {
    /**
     * Html content of summary mail.
     */
    htmlContent?: string;
    /**
     * Rank of the summary mail.
     */
    rank?: number;
    /**
     * Summary mail section type. MailSectionType has section types.
     */
    sectionType?: 'details' | 'environments' | 'issues' | 'testResults' | 'workItems' | 'releaseInfo';
    /**
     * Title of the summary mail.
     */
    title?: string;
};

