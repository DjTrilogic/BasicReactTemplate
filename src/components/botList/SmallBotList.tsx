import React, { useState, useEffect, useCallback } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Drawer, withStyles, Theme, Paper } from '@material-ui/core';
import { BotViewModel, BotManagerApi } from '../../api/runtime';
import { State } from '../../store/config/configureStore';
import { useMappedState } from 'redux-react-hook';
import { Link } from 'react-router-dom';
import { StyleRules } from '@material-ui/core/styles';

const styles = (theme: Theme): StyleRules => ({
    drawer: {
        width: '200px',
        display: 'block',
        float: "left",
    },
});

export function SmallBotListRaw(props: { bots: BotViewModel[], classes?: any }) {
    const { bots, classes } = props;
    return (
        <main className={classes.drawer}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Username</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        bots.map((bot) => (
                            <TableRow>
                                <TableCell><Link to={"/manager/bots/" + bot.settings.guid}>{bot.settings.username}</Link></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </main>
    );
}

export const SmallBotList = withStyles(styles)(SmallBotListRaw);