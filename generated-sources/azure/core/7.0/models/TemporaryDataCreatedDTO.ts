/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TemporaryDataDTO } from './TemporaryDataDTO';
/**
 * A data transfer object that stores the metadata associated with the creation of temporary data.
 */
export type TemporaryDataCreatedDTO = (TemporaryDataDTO & {
    expirationDate?: string;
    id?: string;
    url?: string;
});

