import React, { Component } from 'react';
import { SchedulerSlot } from './components/scheduler'
import './App.css';


class App extends Component {

  render() {
    var player = { "id": 171877, "commonName": "", "firstName": "Marek", "lastName": "Hamšík", "name": "Hamšík", "leagueId": 31, "nationId": 43, "clubId": 48, "clubImageUrl": "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/48.png", "nationImageUrl": "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/flags/list/43.png", "imageUrl": "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/171877.png", "position": "CM", "playStyle": "Basic", "isIcon": false, "quality": "Rare gold", "isSpecialType": false, "baseId": 171877, "rating": 87 };
    return (
      <div className="App">
        <header className="App-header">
          Ok here we go
          {/* <PlayerCard {...player}></PlayerCard> */}
          <SchedulerSlot />
        </header>
      </div>
    );
  }
}

export default App;
