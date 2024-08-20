/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JobReference } from './JobReference';
import type { PhaseReference } from './PhaseReference';
import type { StageReference } from './StageReference';
/**
 * Pipeline reference
 */
export type PipelineReference = {
    /**
     * Reference of the job
     */
    jobReference?: JobReference;
    /**
     * Reference of the phase.
     */
    phaseReference?: PhaseReference;
    /**
     * Reference of the pipeline with which this pipeline instance is related.
     */
    pipelineId?: number;
    /**
     * Reference of the stage.
     */
    stageReference?: StageReference;
};

