import React from 'react';
import {View, Text, Button} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
var GtfsRealtimeBindings = require('gtfs-realtime-bindings');
var request = require('request');
zlib = require('zlib');

var apiKey = 'a9c8b11553a14750a9c06776027a2717';

const getData = () =>
  RNFetchBlob.fetch(
    'GET',
    'https://opendata.samtrafiken.se/gtfs-rt/sl/TripUpdates.pb?key=' + apiKey,
    {},
  )
    .then(res => {
      let status = res.info().status;
      console.log('StatusCode', status);
      if (status == 200) {
        console.log('base64');
        let base64Str = res.base64();
        console.log('buffer');
        const buffer = Buffer.from(base64Str, 'base64');
        console.log('feed');
        const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
          buffer,
        );
        console.log(feed);
      } else {
      }
    })
    // Something went wrong:
    .catch((errorMessage, statusCode) => {
      console.log('Error', errorMessage);
      console.log(statusCode);
    });

const App = () => {
  return (
    <View>
      <Text>GTFS</Text>
      <Button onPress={() => getData()} title="Get the Data" />
    </View>
  );
};

export default App;
