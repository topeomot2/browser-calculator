# Browser Calculator

A Calculator totally hosted in the browser. Patterned after the calculator on an
Ubuntu system.

## Getting Started

This is a calculator totally written in javascript but with the added complexity 
that brackets are allowed. This brings in added complexity into the mix. It means
you need to be able to take inputs link the example below.

```
4 +(14 -(5+17)/(23-13))
```
## Note

This is not about the final calculation, It is about collecting correct inputs and recognizing malformed inputs. For the final calculation, eval is not used for obvious security reasons. But I used the excellent Math.js (http://mathjs.org/) as 
an eval replacement.