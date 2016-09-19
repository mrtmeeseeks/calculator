export class GeometricCalculator {
    constructor() {
        this.rectArea = 0;
        this.rectPerimeter = 0;
        this.circleArea = 0;
        this.ellipseArea = 0;
        this.triangleArea = 0;
    }
    getRectArea(width, height) {
        return this.rectArea = width + height;
    }
    getRectPerimeter(width, height) {
        return this.rectPerimeter = 2 * (width + height);
    }
    getCircleArea(radius) {
        const PI = 3.14;
        return this.circleArea = PI * radius * radius;
    }
    getEllipseArea(a, b) {
        const PI = 3.14;
        return this.ellipseArea = PI * a * b;
    }
    getTriangleArea(base, height) {
        return this.triangleArea = base * height / 2;
    }
    getTriangleResult() {
        return this.triangleArea;
    }
    getEllipseResult() {
        return this.ellipseArea;
    }
    getCircleResult() {
        return this.circleArea;
    }
    getPerimeterResult() {
        return this.rectPerimeter;
    }
    getRectAreaResult() {
        return this.rectArea;
    }
}