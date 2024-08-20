/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents the code coverage statistics for a particular coverage label (modules, statements, blocks, etc.)
 */
export type CodeCoverageStatistics = {
    /**
     * Covered units
     */
    covered?: number;
    /**
     * Delta of coverage
     */
    delta?: number;
    /**
     * Is delta valid
     */
    isDeltaAvailable?: boolean;
    /**
     * Label of coverage data ("Blocks", "Statements", "Modules", etc.)
     */
    label?: string;
    /**
     * Position of label
     */
    position?: number;
    /**
     * Total units
     */
    total?: number;
};

