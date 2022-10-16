import { BodyTemperature, HeartRate, Wear } from '@zos/sensor'
import { MIN_HR, WEARING } from './constants';

export function assets(type) {
  return (path) => type + '/' + path
}

export function is_alive(callback, args) {
  const hr = new HeartRate();
  const wearing = new Wear();

  return () => {
    hr.onCurrentChange(() => {
      let curr_hr = hr.getCurrent();
      if (curr_hr < MIN_HR && wearing.getCurrent() == WEARING) {
        callback(args);
      }  
    })
  }
}
