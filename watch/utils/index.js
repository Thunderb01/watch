import { BodyTemperature, HeartRate, Wear } from '@zos/sensor'
import { MIN_HR, WEARING } from './constants';

export function assets(type) {
  return (path) => type + '/' + path
}

export function is_alive(messageBuilder) {
  const hr = new HeartRate();
  const wearing = new Wear();

  const cb1 = () => {
    alive = (alive && hr.getCurrent() < MIN_HR && wearing.getCurrent() == WEARING)
    console.log('living status: %s', alive);
    messageBuilder.send(alive)
  }
  
  hr.onChange(cb1);
  hr.offChange(()=>{});
}
