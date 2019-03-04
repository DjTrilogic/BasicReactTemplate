import React, { useState, useCallback, useEffect } from 'react';
import { BotViewModel, BotManagerApi } from '../../api/runtime';
import { State } from '../../store/config/configureStore';
import { useMappedState } from 'redux-react-hook';
import { BotListRaw } from '../../components/botList/BotList';
import { SmallBotListRaw, SmallBotList } from '../../components/botList/SmallBotList';
import { Paper } from '@material-ui/core';

function extractBotGuid(pathname: string): string {
    var regex = /\/manager\/bots\/([0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}).*/g
    var match = regex.exec(pathname);
    if (!match || match.length < 1) {
        return null;
    }
    return match[1];
}

export function BotPage() {
    const [bots, setBots] = useState<BotViewModel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const mapStateToProps = useCallback((state: State) => (
        {
            apiKey: state.account.loginResponse.token_type + " " + state.account.loginResponse.access_token,
            url: state.account.loginResponse.serverInfo.runtimeUrl,
            botGuid: extractBotGuid(state.router.location.pathname),
        }),
        [],
    )
    const { apiKey, url, botGuid } = useMappedState(mapStateToProps);
    const api = new BotManagerApi({ apiKey }, url);
    useEffect(() => {
        setIsLoading(true);
        api.getBots()
            .then((bots) => {
                setBots(bots);
            })
            .catch((reason) => {
                console.log(reason);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [])
    return (
        <Paper>
            {botGuid ?
                <SmallBotList bots={bots} />
                :
                <BotListRaw bots={bots} />
            }
        </Paper>
    )
}