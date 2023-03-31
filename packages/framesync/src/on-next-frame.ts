/*
  Detect and load appropriate clock setting for the execution environment
 */

let prevTime = 0;

export const onNextFrame =
  typeof window !== 'undefined' && window.requestAnimationFrame !== undefined
    ? (callback: FrameRequestCallback) => {
        window.requestAnimationFrame(callback);
      }
    : (callback: Function) => {
        const timestamp = Date.now();
        const timeToCall = Math.max(0, 16.7 - (timestamp - prevTime));
        prevTime = timestamp + timeToCall;
        setTimeout(() => callback(prevTime), timeToCall);
      };

export const onNextXRFrame =
  typeof window !== 'undefined' && (<any>window).blippxrsession !== null
    ? (callback: FrameRequestCallback) => {
        (<any>window).blippxrsession.requestAnimationFrame(callback);
      }
    : (callback: Function) => {
        const timestamp = Date.now();
        const timeToCall = Math.max(0, 16.7 - (timestamp - prevTime));
        prevTime = timestamp + timeToCall;
        setTimeout(() => callback(prevTime), timeToCall);
      };
