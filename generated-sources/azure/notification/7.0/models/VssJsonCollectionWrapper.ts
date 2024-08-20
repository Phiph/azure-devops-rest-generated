/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VssJsonCollectionWrapperBase } from './VssJsonCollectionWrapperBase';
/**
 * This class is used to serialized collections as a single JSON object on the wire, to avoid serializing JSON arrays directly to the client, which can be a security hole
 */
export type VssJsonCollectionWrapper = (VssJsonCollectionWrapperBase & {
    value?: string;
});

