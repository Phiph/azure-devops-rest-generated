/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TemporaryDataDTO } from './TemporaryDataDTO';
/**
 * A data transfer object that stores the metadata associated with the creation of temporary data.
 */
export type TemporaryDataCreatedDTO = (TemporaryDataDTO & {
    /**
     * Temporary data expiration date.
     */
    expirationDate?: string;
    /**
     * Temporary data id.
     */
    id?: string;
    /**
     * Rest url for the temporary data.
     */
    url?: string;
});

