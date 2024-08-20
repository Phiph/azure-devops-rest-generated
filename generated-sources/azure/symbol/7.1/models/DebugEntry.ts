/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IDomainId } from './IDomainId';
import type { JsonBlobIdentifier } from './JsonBlobIdentifier';
import type { JsonBlobIdentifierWithBlocks } from './JsonBlobIdentifierWithBlocks';
import type { ResourceBase } from './ResourceBase';
/**
 * A dual-purpose data object, the debug entry is used by the client to publish the symbol file (with file's blob identifier, which can be calculated from VSTS hashing algorithm) or query the file (with a client key). Since the symbol server tries to return a matched symbol file with the richest information level, it may not always point to the same symbol file for different queries with same client key.
 */
export type DebugEntry = (ResourceBase & {
    /**
     * Details of the blob formatted to be deserialized for symbol service.
     */
    blobDetails?: JsonBlobIdentifierWithBlocks;
    /**
     * A blob identifier of the symbol file to upload to this debug entry. This property is mostly used during creation of debug entry (a.k.a. symbol publishing) to allow the server to query the existence of the blob.
     */
    blobIdentifier?: JsonBlobIdentifier;
    /**
     * The URI to get the symbol file. Provided by the server, the URI contains authentication information and is readily accessible by plain HTTP GET request. The client is recommended to retrieve the file as soon as it can since the URI will expire in a short period.
     */
    blobUri?: string;
    /**
     * A key the client (debugger, for example) uses to find the debug entry. Note it is not unique for each different symbol file as it does not distinguish between those which only differ by information level.
     */
    clientKey?: string;
    /**
     * The Domain Id where this debugEntry lives. This property should not be null.
     */
    domainId?: IDomainId;
    /**
     * The information level this debug entry contains.
     */
    informationLevel?: 'none' | 'binary' | 'publics' | 'traceFormatPresent' | 'typeInfo' | 'lineNumbers' | 'globalSymbols' | 'private' | 'sourceIndexed';
    /**
     * The identifier of symbol request to which this debug entry belongs.
     */
    requestId?: string;
    /**
     * The size for the debug entry.
     */
    size?: number;
    /**
     * The status of debug entry.
     */
    status?: 'none' | 'created' | 'blobMissing';
});

