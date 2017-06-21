"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component"); //import home components
var about_component_1 = require("./about/about.component"); //import about component
var list_component_1 = require("./list/list.component"); //import list component
var have_component_1 = require("./details/have/have.component");
var need_component_1 = require("./details/need/need.component");
var pg_component_1 = require("./details/pg/pg.component");
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'list', component: list_component_1.ListComponent },
    { path: 'have', component: have_component_1.HaveComponent },
    { path: 'need', component: need_component_1.NeedComponent },
    { path: 'pg', component: pg_component_1.PgComponent },
    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' } // redirect to home page on load
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map