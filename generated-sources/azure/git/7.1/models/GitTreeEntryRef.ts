/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GitTreeEntryRef = {
    /**
     * Blob or tree
     */
    gitObjectType?: 'bad' | 'commit' | 'tree' | 'blob' | 'tag' | 'ext2' | 'ofsDelta' | 'refDelta';
    /**
     * Mode represented as octal string
     */
    mode?: string;
    /**
     * SHA1 hash of git object
     */
    objectId?: string;
    /**
     * Path relative to parent tree object
     */
    relativePath?: string;
    /**
     * Size of content
     */
    size?: number;
    /**
     * url to retrieve tree or blob
     */
    url?: string;
};

