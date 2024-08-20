/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JsonBlobBlockHash } from './JsonBlobBlockHash';
/**
 * BlobIdentifier with block hashes formatted to be deserialzied for symbol service.
 */
export type JsonBlobIdentifierWithBlocks = {
    /**
     * List of blob block hashes.
     */
    blockHashes?: Array<JsonBlobBlockHash>;
    /**
     * Array of blobId bytes.
     */
    identifierValue?: Array<string>;
};

