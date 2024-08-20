/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SignResponseBase } from './SignResponseBase';
/**
 * The response returned by the sign status api.
 */
export type SignStatusResponse = (SignResponseBase & {
    /**
     * The pre-signed download url used to download the signed catalog file.
     */
    downloadUrl?: string;
});

