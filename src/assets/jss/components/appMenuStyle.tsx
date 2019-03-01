import { Theme, StyleRules, StyleRulesCallback } from '@material-ui/core/styles';
import { drawerWidth, blackColor, whiteColor, defaultFont, hexToRgb, grayColor, primaryColor, primaryBoxShadow, infoColor } from '..';


const appMenuStyles = (theme: Theme): StyleRules => ({
    root: {
        display: 'flex',
    },
    grow: {
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        background: infoColor[0],
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9 + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        zIndex: 4,
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    background: {
        position: "absolute",
        zIndex: 1,
        height: "100%",
        width: "100%",
        display: "block",
        top: "0",
        left: "0",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        "&:after": {
            position: "absolute",
            zIndex: 3,
            width: "100%",
            height: "100%",
            content: '""',
            display: "block",
            background: blackColor,
            opacity: 0.8
        }
    },
    list: {
        marginTop: "20px",
        paddingLeft: "0",
        paddingTop: "0",
        paddingBottom: "0",
        marginBottom: "0",
        listStyle: "none",
        position: "unset"
    },
    listOpen: {
        marginTop: "21px",
    },
    item: {
        position: "relative",
        display: "block",
        textDecoration: "none",
        "&:hover,&:focus,&:visited,&": {
            color: whiteColor
        }
    },
    itemLink: {
        width: "auto",
        transition: "all 300ms linear",
        margin: "10px 8px 0",
        borderRadius: "3px",
        position: "relative",
        display: "block",
        padding: "10px 15px",
        backgroundColor: "transparent",
        ...defaultFont
    },
    inlineItemLink: {
        display: "inline-block",
        width: 54,
    },
    itemIcon: {
        width: "24px",
        fontSize: "24px",
        lineHeight: "30px",
        float: "left",
        marginRight: "15px",
        textAlign: "center",
        verticalAlign: "middle",
        color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)"
    },
    itemText: {
        ...defaultFont,
        margin: "0",
        lineHeight: "30px",
        fontSize: "14px",
        color: whiteColor
    },
    foreground: {
        position: "relative",
        zIndex: 4,
    },
    purple: {
        backgroundColor: infoColor[0],
        boxShadow:
            "0 12px 20px -10px rgba(" +
            hexToRgb(infoColor[0]) +
            ",.28), 0 4px 20px 0 rgba(" +
            hexToRgb(blackColor) +
            ",.12), 0 7px 8px -5px rgba(" +
            hexToRgb(infoColor[0]) +
            ",.2)",
        "&:hover": {
            backgroundColor: infoColor[0],
            boxShadow:
                "0 12px 20px -10px rgba(" +
                hexToRgb(infoColor[0]) +
                ",.28), 0 4px 20px 0 rgba(" +
                hexToRgb(blackColor) +
                ",.12), 0 7px 8px -5px rgba(" +
                hexToRgb(infoColor[0]) +
                ",.2)"
        }
    },
});

export default appMenuStyles;