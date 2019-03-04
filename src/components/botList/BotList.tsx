import React, { useState, useEffect, useCallback } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { BotViewModel, BotManagerApi } from '../../api/runtime';
import { State } from '../../store/config/configureStore';
import { useMappedState } from 'redux-react-hook';
import { Link } from 'react-router-dom';


export function BotListRaw(props: { bots: BotViewModel[] }) {
    const { bots } = props;
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Username</TableCell>
                    <TableCell>State</TableCell>
                    <TableCell>LastActivity</TableCell>
                    <TableCell>Coins</TableCell>
                    <TableCell>Requests Count</TableCell>
                    <TableCell>Schedule</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    bots.map((bot) => (
                        <TableRow>
                            <TableCell><Link to={"/manager/bots/" + bot.settings.guid}>{bot.settings.username}</Link></TableCell>
                            <TableCell>{bot.state}</TableCell>
                            <TableCell>{bot.lastActivityTime}</TableCell>
                            <TableCell>{bot.coins}</TableCell>
                            <TableCell>{bot.requestCount}</TableCell>
                            <TableCell>{bot.settings.useSchedule}</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    );
}