import { Observable } from "rxjs";
import { createReadStream } from "fs";
import { stderr } from "process";
export function callbackPattern(text) {
  // Coding with callbacks
  return setTimeout(() => toObserveData(), 0);
}
export function toObserveData() {
  // Reactive Programming
  const obs = new Observable((s) => s.next("tick"));
  obs.subscribe((c) => console.log(c));
  return obs;
}
export function toStreamWay() {
  //Coding with streams
  return createReadStream("./file.txt").pipe(stderr, { end: true });
}
