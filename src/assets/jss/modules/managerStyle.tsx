import { Theme } from '@material-ui/core/styles';
import {
    drawerWidth,
    transition,
    container,
    shrinkedDrawerWidth
} from "..";

const appStyle = (theme: Theme): any => ({
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

export default appStyle;