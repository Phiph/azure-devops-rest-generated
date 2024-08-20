/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildProcess } from './BuildProcess';
import type { DesignerProcessTarget } from './DesignerProcessTarget';
import type { Phase } from './Phase';
/**
 * Represents a build process supported by the build definition designer.
 */
export type DesignerProcess = (BuildProcess & {
    phases?: Array<Phase>;
    /**
     * The target for the build process.
     */
    target?: DesignerProcessTarget;
});

