 import { readline, rl } from 'readline.js';
 import { ArithmeticCalculator } from 'arithmetic.js';
 import { GeometricCalculator } from 'geometric.js';
 import { AdvancedCalculatior } from 'advanced.js';

 var geometric = new GeometricCalculator();
 var arithmetic = new ArithmeticCalculator();
 var advanced = new AdvancedCalculatior();

 export function Calculator() {
     WelcomePage();

     function WelcomePage() {
         rl.question(`
                                  Welcome to Calculator:

    - a: for Arithmetic Calculations

                +: for addition,
                -: for substraction,
                /: for division,
                *: for multiplication
                
                b: to go back to Calculator
                q: to quit Calculator
    --------------------------------------------------
    - g: for Geometric Calculations
                r: Area and Perimeter of the Rectangle,
                c: Circle
                e: Ellipse
                t: Triangle

                b: to go back to Calculator
                q: to quit Calculator
   ----------------------------------------------------
   - m: for more advanced Calculations 
                f: Factorial   
                n: Fibonacci Numbers

       : `, function(answer) {
             if (answer == 'a') {
                 return Arithmetic();
             } else if (answer == 'q') {
                 rl.close();
             } else if (answer == 'g') {
                 return Geometric();
             } else if (answer == 'm') {
                 return AdvancedCalculations();
             } else {
                 return WelcomePage();
             }
         });
     }

     function Arithmetic() {

         var result = 0;

         function startOperations() {
             rl.question('Enter a number: ', function(number) {
                 if (isNaN(+number)) {
                     return startOperations();
                 }
                 result = +number;


                 rl.question(`Choose an operation: `, function(answer) {
                     if (answer == 'b') {
                         return WelcomePage();
                     }
                     return arithmetics(answer);

                 });


             });
         }
         startOperations();

         function arithmetics(answer) {

             rl.question('Enter a number: ', function(number) {
                 if (isNaN(+number)) {
                     return startOperations();
                 }
                 switch (answer) {
                     case '+':
                         {
                             result = arithmetic.add(result, +number);
                             console.log('The result is: ', result);
                             break;
                         }
                     case '-':
                         {
                             result = arithmetic.substract(result, +number);
                             console.log('The result is: ', result);
                             break;
                         }
                     case '/':
                         {
                             result = arithmetic.divide(result, +number);
                             console.log('The result is: ', result);
                             break;
                         }
                     case '*':
                         {
                             result = arithmetic.multiply(result, +number);
                             console.log('The result is: ', result);
                             break;
                         }
                     case 'o':
                         {
                             return Arithmetic();
                         }
                     case 'q':
                         {
                             rl.close();
                         }
                     default:
                         {
                             return WelcomePage();
                         }
                 }

                 function answers() {
                     rl.question(`Enter an operation: `, function(answer) {
                         if (answer == '+' || answer == '-' || answer == '*' || answer == '/') {
                             arithmetics(answer);
                         }
                         if (answer == 'b') {
                             return WelcomePage();
                         }

                         return answers();
                     });
                 }
                 answers();
             });
         }
     }

     function Geometric() {

         function startGeometrics() {
             rl.question('Choose a shape: \n : ', function(answer) {
                 return geometrics(answer);
             });
         }
         startGeometrics();

         function geometrics(answer) {
             switch (answer) {
                 case 'c':
                     {
                         return circle();

                     }
                 case 'r':
                     {
                         return rectangle();

                     }
                 case 'e':
                     {
                         return ellipse();

                     }
                 case 't':
                     {
                         return triangle();

                     }
                 case 'b':
                     {
                         return WelcomePage();

                     }

                 case 'q':
                     {
                         rl.close();

                     }
                 default:
                     return WelcomePage();

             }
         }

         function circle() {
             rl.question(`Enter the radius: `, function(radius) {
                 if (isNaN(+radius)) {
                     return circle();
                 }
                 geometric.getCircleArea(+radius);
                 console.log(`The area of the Circle is: `, geometric.getCircleResult());
                 rl.question('c: try again \nb: go back \n ', function(answer) {
                     if (answer == 'c') {
                         return circle();
                     } else {
                         return startGeometrics();
                     }
                 });
             });
         }

         function rectangle() {

             rl.question('\n Area or Perimeter of a rectangle: \n a: Area, \n p: Perimeter \n : ', function(answer) {
                 if (answer == 'a') {
                     return area();
                 } else if (answer == 'p') {
                     return perimeter();
                 } else if (answer == 'b') {
                     return WelcomePage();
                 } else {
                     return rectangle();
                 }

                 function area() {
                     rl.question(`Enter the width: `, function(width) {
                         if (isNaN(+width)) {
                             return area();
                         }
                         rl.question(`Enter the height: `, function(height) {
                             if (isNaN(+height)) {
                                 return area();
                             }
                             geometric.getRectArea(+width, +height);
                             console.log(`The area of the rectangle is: `, geometric.getRectAreaResult());
                             rl.question('a: try again \nb: go back \n ', function(answer) {
                                 if (answer == 'a') {
                                     return area();
                                 } else {
                                     return startGeometrics();
                                 }
                             });

                         });
                     });
                 }



                 function perimeter() {

                     rl.question(`Enter the width: `, function(width) {
                         if (isNaN(+width)) {
                             return area();
                         }
                         rl.question(`Enter the height: `, function(height) {
                             if (isNaN(+height)) {
                                 return area();
                             }
                             geometric.getRectPerimeter(+width, +height);
                             console.log(`The perimeter of the rectangle is: `, geometric.getPerimeterResult());
                             rl.question('p: try again \nb: go back \n ', function(answer) {
                                 if (answer == 'a') {
                                     return perimeter();
                                 } else {
                                     return startGeometrics();
                                 }
                             });
                         });
                     });
                 }


             });
         }

         function ellipse() {
             rl.question(`Enter point A: `, function(pointA) {
                 if (isNaN(+pointA)) {
                     return ellipse();
                 }
                 rl.question(`Enter point B: `, function(pointB) {
                     if (isNaN(+pointB)) {
                         return ellipse();
                     }

                     geometric.getEllipseArea(+pointA, +pointB);
                     console.log(`The area of the Ellipse is: `, geometric.getEllipseResult());
                     rl.question('e: try again \nb: go back \n ', function(answer) {
                         if (answer == 'e') {
                             return ellipse();
                         } else {
                             return startGeometrics();
                         }
                     });
                 });
             });
         }

         function triangle() {
             rl.question(`Enter point Base: `, function(base) {
                 if (isNaN(+base)) {
                     return triangle();
                 }
                 rl.question(`Enter point Height: `, function(height) {
                     if (isNaN(+height)) {
                         return triangle();
                     }

                     geometric.getTriangleArea(+base, +height);
                     console.log(`The area of the Triangle is: `, geometric.getTriangleResult());
                     rl.question('t: try again \nb: go back \n ', function(answer) {
                         if (answer == 't') {
                             return triangle();
                         } else {
                             return startGeometrics();
                         }
                     });
                 });
             });
         }
     }

     function AdvancedCalculations() {
         function startAdvanced() {
             rl.question('Choose an Operation: \n : ', function(answer) {
                 return plusCalculator(answer);
             });
         }
         startAdvanced();

         function plusCalculator(answer) {
             switch (answer) {
                 case 'f':
                     {
                         return factorial();

                     }
                 case 'n':
                     {
                         return fibonacci();

                     }
                 case 'q':
                     {
                         rl.close();

                     }
                 default:
                     return WelcomePage();

             }
         }

         function factorial() {
             rl.question(`Enter a Number: `, function(number) {
                 if (isNaN(+number)) {
                     return factorial();
                 }

                 console.log(`The Factorial is: `, advanced.factorial(+number));
                 rl.question('f: try again \nb: go back \n ', function(answer) {
                     if (answer == 'f') {
                         return factorial();
                     } else {
                         return AdvancedCalculations();
                     }
                 });

             });
         }

         function fibonacci() {
             rl.question(`Enter a Number: `, function(number) {
                 if (isNaN(+number)) {
                     return fibonacci();
                 }

                 console.log(`Number ${number} is the ${advanced.fibonacciNumbers(+number)}'th number`);
                 rl.question('n: try again \nb: go back \n ', function(answer) {
                     if (answer == 'n') {
                         return fibonacci();
                     } else {
                         return AdvancedCalculations();
                     }
                 });

             });
         }

     }
 }