/* Importing JS Code in TS Projects */

// import {calculateTax} from "./tax";
//
// let tax = calculateTax(10_0000);
// console.log(tax);

/* Using Definitely Typed Declaration Files */
import * as _ from 'lodash';

const cloned = _.clone([1, 2, 3]);
console.log(cloned);