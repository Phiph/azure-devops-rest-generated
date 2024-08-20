/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Collection } from './Collection';
import type { Hit } from './Hit';
import type { Project } from './Project';
import type { Repository } from './Repository';
import type { Version } from './Version';
/**
 * Defines the code result containing information of the searched files and its metadata.
 */
export type CodeResult = {
    /**
     * Collection of the result file.
     */
    collection?: Collection;
    /**
     * ContentId of the result file.
     */
    contentId?: string;
    /**
     * Name of the result file.
     */
    fileName?: string;
    /**
     * Dictionary of field to hit offsets in the result file. Key identifies the area in which hits were found, for ex: file content/file name etc.
     */
    matches?: Record<string, Array<Hit>>;
    /**
     * Path at which result file is present.
     */
    path?: string;
    /**
     * Project of the result file.
     */
    project?: Project;
    /**
     * Repository of the result file.
     */
    repository?: Repository;
    /**
     * Versions of the result file.
     */
    versions?: Array<Version>;
};

