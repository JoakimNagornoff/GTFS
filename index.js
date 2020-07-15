/**
 * @format
 */
import './shim';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

/*const tripUpdateOption = {
  url: 'https://opendata.samtrafiken.se/gtfs-rt/sl/TripUpdates.pb?key=',
  headers: {Authorization: 'a9c8b11553a14750a9c06776027a2717'},
};
const modes = ['metro', 'buses', 'ferries'];

const getRealTimeTripUpdate = async (mode, FeedMessage) => {
  const res = await (() =>
    axios.get(`${tripUpdateOption.url}/${mode}`, {
      headers: requestSettings.headers,
      responseType: 'arraybuffer',
    }));
  const data = new Uint8Array(res.data);
  const feed = FeedMessage.decode(data);
  return feed;
};
const start = async () => {
  // const root = await protobuf.load('gtfs-realtime-bindings');
  //const FeedMessage = root.lookupType('transit_realtime.FeedMessage');
  const root = await protobuf.load('tfnsw-gtfs-realtime.proto');
  const FeedMessage = root.lookupType('transit_realtime.FeedMessage');

  const FeedHeader = feed.getHeader();
  for (const mode of modes) {
    const tripUpdate = await getRealTimeTripUpdate(mode, FeedMessage);
    console.log(tripUpdate.entity[0]);
  }
};*/

/*(async () => {
  await start();
})();*/

AppRegistry.registerComponent(appName, () => App);
