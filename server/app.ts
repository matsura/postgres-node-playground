import * as express from "express";
import { json, urlencoded } from "body-parser";
import * as http from "http";
import * as path from "path";
import "reflect-metadata";

import { APIDocsRouter } from "./routes/swagger";
import { DatabaseService } from './services/database/database.service';
import { BimModelCategoryRouter } from './routes/bim-model/category.router';
import { BimModelObjectRouter } from './routes/bim-model/object.router';
import { BimModelObjectTypeRouter } from './routes/bim-model/object-type.router';
import { BimModelPropertyRouter } from './routes/bim-model/property.router';
import { BimModelPropertyTypeRouter } from './routes/bim-model/property-type.router';
import { BimModelPropertyValueTypeRouter } from './routes/bim-model/property-value-type.router';
import { BimModelPropertyValueUnitRouter } from './routes/bim-model/property-value-unit.router';
import { ParameterRouter } from './routes/parameter/parameter.router';
import { ParameterTypeRouter } from './routes/parameter/type.router';
import { ParameterPropertyRouter } from './routes/parameter/property.router';
import { ProjectWorkTableObjectRouter } from './routes/project-worktable/object.router';
import { ProjectWorkTableObjectParameterPropertyRouter } from './routes/project-worktable/object-parameter.router';

const app: express.Application = express();

app.use(json());
app.use(urlencoded({
    extended: true,
}));

DatabaseService.initializeAsync()
  .then(() => {

    app.use("/api", new BimModelCategoryRouter().getRouter());
    app.use("/api", new BimModelObjectRouter().getRouter());
    app.use("/api", new BimModelObjectTypeRouter().getRouter());
    app.use("/api", new BimModelPropertyRouter().getRouter());
    app.use("/api", new BimModelPropertyTypeRouter().getRouter());
    app.use("/api", new BimModelPropertyValueTypeRouter().getRouter());
    app.use("/api", new BimModelPropertyValueUnitRouter().getRouter());
    app.use("/api", new ParameterRouter().getRouter());
    app.use("/api", new ParameterTypeRouter().getRouter());
    app.use("/api", new ParameterPropertyRouter().getRouter());
    app.use("/api", new ProjectWorkTableObjectRouter().getRouter());
    app.use("/api", new ProjectWorkTableObjectParameterPropertyRouter().getRouter());
  });

app.get("/", (request: express.Request, response: express.Response) => {
    response.json({
        name: "Express application",
    });
});

app.use((err: Error & { status: number }, request: express.Request, response: express.Response, next: express.NextFunction): void => {

    response.status(err.status || 500);
    response.json({
        error: "Server error",
    });
});

app.use("/api/swagger", new APIDocsRouter().getRouter());
app.use("/docs", express.static(path.join(__dirname, './assets/swagger')));

const server: http.Server = app.listen(process.env.PORT || 3000);

export { server };
