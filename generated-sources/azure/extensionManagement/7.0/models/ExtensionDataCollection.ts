/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JObject } from './JObject';
/**
 * Represents a single collection for extension data documents
 */
export type ExtensionDataCollection = {
    /**
     * The name of the collection
     */
    collectionName?: string;
    /**
     * A list of documents belonging to the collection
     */
    documents?: Array<JObject>;
    /**
     * The type of the collection's scope, such as Default or User
     */
    scopeType?: string;
    /**
     * The value of the collection's scope, such as Current or Me
     */
    scopeValue?: string;
};

