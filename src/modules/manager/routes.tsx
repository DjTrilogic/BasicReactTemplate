import React from 'react'
import Dashboard from "@material-ui/icons/Dashboard";
import Ballot from "@material-ui/icons/Ballot";
import Mail from "@material-ui/icons/Mail";
import { ModuleRoute } from "..";
import { BotListRaw } from '../../components/botList/BotList';
import { BotPage } from '../../pages/bot';

const routes: ModuleRoute[] = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: Dashboard,
        component: () => (<div>DASHBOARD</div>)
    },
    {
        path: "/bots",
        name: "Bots",
        icon: Ballot,
        component: () => (<BotPage />)
    },
    {
        path: "/accounts",
        name: "Accounts",
        icon: Mail,
        component: () => (<div>Accounts</div>)
    },
];

export default routes;