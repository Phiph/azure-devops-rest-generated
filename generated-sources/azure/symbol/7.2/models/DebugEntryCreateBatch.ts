/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DebugEntry } from './DebugEntry';
/**
 * A batch of debug entry to create.
 */
export type DebugEntryCreateBatch = {
    /**
     * Defines what to do when a debug entry in the batch already exists.
     */
    createBehavior?: 'throwIfExists' | 'skipIfExists' | 'overwriteIfExists';
    /**
     * The debug entries.
     */
    debugEntries?: Array<DebugEntry>;
    /**
     * Serialized Proof nodes, used to verify uploads on server side for Chunk Dedup DebugEntry
     */
    proofNodes?: Array<string>;
};

