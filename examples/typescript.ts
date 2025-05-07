
// Example -----------------------------

import { readFileSync } from 'node:fs';

readFileSync('test.txt', { encoding: 'utf-8' })

@log
class Greeter {
  @log greeting: string;
  constructor(message: string) {
    this.greeting = message
  }
  @log
  showGreeting() {
    console.log(this.greeting)
  }
}
window.AbortController
const myGreeter = new Greeter("hello, world");
myGreeter.greeting = "howdy";
myGreeter.showGreeting();

class SpecialGreeter extends Greeter {
  constructor() {
    super(`Very special\n greetings${myGreeter}`);
  }
}

const regex = /^hell\/o/;

// Tests -----------------------------

// https://github.com/xhongc/music-tag-web

declare namespace GreetingLib {
  interface LogOptions {
    verbose?: boolean;
  }
  interface AlertOptions {
    modal: boolean;
    title?: string;
    color?: string;
  }
}

function log(target: any, descriptor: DecoratorContext) {
}

export const test1a = {
  alongside: 1,
  biography: 2
}

function test3(asd: number, bcd: number) {
  console.log(asd, bcd);
}

const testnum = {
  a: 1
} as const

function isTest(n: unknown | null): n is typeof testnum {
  return testnum.a === 1;
}

function isUndefined(n: unknown | null): n is undefined {
  return testnum.a === 1;
}

export const base = {
  gray: 'hsl(0, 0%, 60%)',
  red: 'hsl(0, 45%, 53%)',
  orange: 'hsl(32, 64%, 44%)',
  yellow: 'hsl(50, 70%, 30%)',
  yellowLight: 'hsl(50, 60%, 40%)',
  greenLight: 'hsl(78, 80%, 30%)',
  green: 'hsl(110, 60%, 32%)',
  cyan: 'hsl(160, 70%, 30%)',
  sky: 'hsl(180, 50%, 40%)',
  blue: 'hsl(196, 80%, 35%)',
  purple: 'hsl(247, 30%, 55%)',
  pink: 'hsl(340, 46%, 57%)',
}
export type ConvertObject<T extends string[], P = {}> = T extends [infer F, ...infer R]
  ? F extends `${infer A}.${infer B}`
  ? ConvertObject<Extract<R, string[]>, P & Partial<{ [K in A]: Partial<{ [P in B]: string }> }>>
  : ConvertObject<Extract<R, string[]>, P & Partial<{ [K in Extract<F, string>]: string }>>
  : P

export const test2 = {
  a: 1,
  b: 'asd'
}
const a = 2
import https from "https";

/**
 * test
 * @param {string} url test
 * @returns test
 */
export function get<T extends string>(url: T): Promise<Pick<T, string>> {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let body = ''
      res.setEncoding('utf8')
      res.on('data', data => (body += data))
      res.on('end', () => resolve(body))
      res.on('error', reject)
    })
  })
}

console.log()

new Greeter("hello, world").showGreeting()

export const is = {
  null: (value: unknown): value is null => value === null,
  undefined: (value: unknown): value is undefined => value === undefined,
}