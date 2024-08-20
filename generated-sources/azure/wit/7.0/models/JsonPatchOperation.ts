/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The JSON model for a JSON Patch operation
 */
export type JsonPatchOperation = {
    /**
     * The path to copy from for the Move/Copy operation.
     */
    from?: string;
    /**
     * The patch operation
     */
    op?: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test';
    /**
     * The path for the operation. In the case of an array, a zero based index can be used to specify the position in the array (e.g. /biscuits/0/name). The "-" character can be used instead of an index to insert at the end of the array (e.g. /biscuits/-).
     */
    path?: string;
    /**
     * The value for the operation. This is either a primitive or a JToken.
     */
    value?: any;
};

