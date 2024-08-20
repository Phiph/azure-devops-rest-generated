/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Data representation of an information node associated with a build
 */
export type InformationNode = {
    /**
     * Fields of the information node
     */
    fields?: Record<string, string>;
    /**
     * Process or person that last modified this node
     */
    lastModifiedBy?: string;
    /**
     * Date this node was last modified
     */
    lastModifiedDate?: string;
    /**
     * Node Id of this information node
     */
    nodeId?: number;
    /**
     * Id of parent node (xml tree)
     */
    parentId?: number;
    /**
     * The type of the information node
     */
    type?: string;
};

