/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Container to hold information about a filter being applied in Test Plans Library.
 */
export type TestPlansLibraryWorkItemFilter = {
    /**
     * Work item field name on which the items are to be filtered.
     */
    fieldName?: string;
    /**
     * Work item field values corresponding to the field name.
     */
    fieldValues?: Array<string>;
    /**
     * Mode of the filter.
     */
    filterMode?: 'or' | 'and';
};

