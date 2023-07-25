import { Observable } from "rxjs";
import { createReadStream } from "fs";
import { stderr } from "process";
import { Stream } from "stream";

export function callbackPattern(text: string): NodeJS.Timer {
  // Coding with callbacks
  return setTimeout(() => toObserveData(), 0);
}

export function toObserveData(): Observable<unknown> {
  // Reactive Programming
  const obs = new Observable((s) => s.next("tick"));
  obs.subscribe((c) => console.log(c));
  return obs;
}

export function toStreamWay(): Stream {
  //Coding with streams
  return createReadStream("./file.txt").pipe(stderr, { end: true });
}
