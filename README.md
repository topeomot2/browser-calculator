# Browser Calculator
[![Build Status](https://travis-ci.org/topeomot2/browser-calculator.svg?branch=master)](https://travis-ci.org/topeomot2/browser-calculator)

A Calculator totally hosted in the browser. Patterned after the calculator on an
Ubuntu system. The main aim is to validate correct inputs and disallow incorrect ones
no matter how complex the expression is before doing the final calculation

```
4 + -10 //correct
(-12 * 4) //correct
15 / -6 //correct
32(/16) //wrong
4 +(14 -(5+17)/(23-13)) //correct
(5 -(20-9/4) //incorrect
```

## Getting Started

This is a calculator totally written in javascript but with the added complexity 
that brackets are allowed. This brings in added complexity into the mix. It means
you need to be able to take inputs like the example below.

```
4 +(14 -(5+17)/(23-13))
```
## Note

This is not about the final calculation, It is about collecting correct inputs and recognizing malformed inputs. For the final calculation, eval is not used for obvious security reasons. But I used the excellent Math.js (http://mathjs.org/) as 
an eval replacement.