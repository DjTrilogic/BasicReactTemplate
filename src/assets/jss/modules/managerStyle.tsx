import { Theme, StyleRules } from '@material-ui/core/styles';
import {
    drawerWidth,
    transition,
    container,
    shrinkedDrawerWidth
} from "..";

const managerStyle = (theme: Theme): StyleRules => ({
    wrapper: {
        position: "relative",
        top: "0",
        height: "100vh"
    },
    mainPanel: {
        width: `calc(100% - ${drawerWidth}px)`,
        overflow: "auto",
        position: "relative",
        float: "right",
        ...transition,
        maxHeight: "100%",
        overflowScrolling: "touch"
    },
    shrinkedMainPanel: {
        width: `calc(100% - ${shrinkedDrawerWidth}px)`,
    },
    content: {
        marginTop: "70px",
        padding: "30px 15px",
        minHeight: "calc(100vh - 123px)"
    },
    container,
    map: {
        marginTop: "70px"
    }
});

export default managerStyle;