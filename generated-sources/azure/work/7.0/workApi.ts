/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { BacklogconfigurationService } from './services/BacklogconfigurationService';
import { BacklogsService } from './services/BacklogsService';
import { BoardcolumnsService } from './services/BoardcolumnsService';
import { BoardparentsService } from './services/BoardparentsService';
import { BoardrowsService } from './services/BoardrowsService';
import { BoardsService } from './services/BoardsService';
import { BoardusersettingsService } from './services/BoardusersettingsService';
import { CapacitiesService } from './services/CapacitiesService';
import { CardrulesettingsService } from './services/CardrulesettingsService';
import { CardsettingsService } from './services/CardsettingsService';
import { ChartimagesService } from './services/ChartimagesService';
import { ChartsService } from './services/ChartsService';
import { ColumnsService } from './services/ColumnsService';
import { DeliverytimelineService } from './services/DeliverytimelineService';
import { IterationcapacitiesService } from './services/IterationcapacitiesService';
import { IterationsService } from './services/IterationsService';
import { PlansService } from './services/PlansService';
import { ProcessconfigurationService } from './services/ProcessconfigurationService';
import { RowsService } from './services/RowsService';
import { TaskboardColumnsService } from './services/TaskboardColumnsService';
import { TaskboardWorkItemsService } from './services/TaskboardWorkItemsService';
import { TeamdaysoffService } from './services/TeamdaysoffService';
import { TeamfieldvaluesService } from './services/TeamfieldvaluesService';
import { TeamsettingsService } from './services/TeamsettingsService';
import { WorkitemsorderService } from './services/WorkitemsorderService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class workApi {
    public readonly backlogconfiguration: BacklogconfigurationService;
    public readonly backlogs: BacklogsService;
    public readonly boardcolumns: BoardcolumnsService;
    public readonly boardparents: BoardparentsService;
    public readonly boardrows: BoardrowsService;
    public readonly boards: BoardsService;
    public readonly boardusersettings: BoardusersettingsService;
    public readonly capacities: CapacitiesService;
    public readonly cardrulesettings: CardrulesettingsService;
    public readonly cardsettings: CardsettingsService;
    public readonly chartimages: ChartimagesService;
    public readonly charts: ChartsService;
    public readonly columns: ColumnsService;
    public readonly deliverytimeline: DeliverytimelineService;
    public readonly iterationcapacities: IterationcapacitiesService;
    public readonly iterations: IterationsService;
    public readonly plans: PlansService;
    public readonly processconfiguration: ProcessconfigurationService;
    public readonly rows: RowsService;
    public readonly taskboardColumns: TaskboardColumnsService;
    public readonly taskboardWorkItems: TaskboardWorkItemsService;
    public readonly teamdaysoff: TeamdaysoffService;
    public readonly teamfieldvalues: TeamfieldvaluesService;
    public readonly teamsettings: TeamsettingsService;
    public readonly workitemsorder: WorkitemsorderService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://dev.azure.com',
            VERSION: config?.VERSION ?? '7.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.backlogconfiguration = new BacklogconfigurationService(this.request);
        this.backlogs = new BacklogsService(this.request);
        this.boardcolumns = new BoardcolumnsService(this.request);
        this.boardparents = new BoardparentsService(this.request);
        this.boardrows = new BoardrowsService(this.request);
        this.boards = new BoardsService(this.request);
        this.boardusersettings = new BoardusersettingsService(this.request);
        this.capacities = new CapacitiesService(this.request);
        this.cardrulesettings = new CardrulesettingsService(this.request);
        this.cardsettings = new CardsettingsService(this.request);
        this.chartimages = new ChartimagesService(this.request);
        this.charts = new ChartsService(this.request);
        this.columns = new ColumnsService(this.request);
        this.deliverytimeline = new DeliverytimelineService(this.request);
        this.iterationcapacities = new IterationcapacitiesService(this.request);
        this.iterations = new IterationsService(this.request);
        this.plans = new PlansService(this.request);
        this.processconfiguration = new ProcessconfigurationService(this.request);
        this.rows = new RowsService(this.request);
        this.taskboardColumns = new TaskboardColumnsService(this.request);
        this.taskboardWorkItems = new TaskboardWorkItemsService(this.request);
        this.teamdaysoff = new TeamdaysoffService(this.request);
        this.teamfieldvalues = new TeamfieldvaluesService(this.request);
        this.teamsettings = new TeamsettingsService(this.request);
        this.workitemsorder = new WorkitemsorderService(this.request);
    }
}

