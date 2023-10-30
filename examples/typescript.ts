
// Example -----------------------------

import { readFileSync } from 'node:fs';

readFileSync('test.txt', { encoding: 'utf-8' })

@test()
class Greeter {
  @test() greeting: string;
  constructor(message: string) {
    this.greeting = message
  }
  @test()
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

function test1(asd: number, bcd: number) {
  console.log(asd, bcd);
}

export const test1a = {
  alongside: 1,
  biography: 2
}

function test1(asd: number, bcd: number) {
  console.log(asd, bcd);
}

const testnum = {
  a: 1
} as const

function isTest(n: unknown | null): n is typeof testnum {
  return testnum.a === 1;
}

type test = {
  a: number
}

export type ConvertObject<T extends string[], P = {}> = T extends [infer F, ...infer R]
  ? F extends `${infer A}.${infer B}`
  ? ConvertObject<Extract<R, string[]>, P & Partial<{ [K in A]: Partial<{ [P in B]: string }> }>>
  : ConvertObject<Extract<R, string[]>, P & Partial<{ [K in Extract<F, string>]: string }>>
  : P

export const test1 = {
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
export function get<T extends string>(url: T): Promise<string> {
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

new Greeter("hello, world").showGreeting()