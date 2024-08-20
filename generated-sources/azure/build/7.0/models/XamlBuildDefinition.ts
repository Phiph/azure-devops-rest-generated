/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildController } from './BuildController';
import type { BuildRepository } from './BuildRepository';
import type { DefinitionReference } from './DefinitionReference';
import type { ReferenceLinks } from './ReferenceLinks';
import type { XamlBuildReference } from './XamlBuildReference';
export type XamlBuildDefinition = (DefinitionReference & {
    _links?: ReferenceLinks;
    /**
     * Batch size of the definition
     */
    batchSize?: number;
    buildArgs?: string;
    /**
     * The continuous integration quiet period
     */
    continuousIntegrationQuietPeriod?: number;
    /**
     * The build controller
     */
    controller?: BuildController;
    /**
     * The date this definition was created
     */
    createdOn?: string;
    /**
     * Default drop location for builds from this definition
     */
    defaultDropLocation?: string;
    /**
     * Description of the definition
     */
    description?: string;
    /**
     * The last build on this definition
     */
    lastBuild?: XamlBuildReference;
    /**
     * The repository
     */
    repository?: BuildRepository;
    /**
     * The reasons supported by the template
     */
    supportedReasons?: 'none' | 'manual' | 'individualCI' | 'batchedCI' | 'schedule' | 'scheduleForced' | 'userCreated' | 'validateShelveset' | 'checkInShelveset' | 'pullRequest' | 'buildCompletion' | 'resourceTrigger' | 'triggered' | 'all';
    /**
     * How builds are triggered from this definition
     */
    triggerType?: 'none' | 'continuousIntegration' | 'batchedContinuousIntegration' | 'schedule' | 'gatedCheckIn' | 'batchedGatedCheckIn' | 'pullRequest' | 'buildCompletion' | 'all';
});

