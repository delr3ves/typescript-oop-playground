const PI = 3.1416;

export interface Shape2D {
  area(): number;
  numberOfSides(): number;
  perimeter(): number;
}

export interface Shape3D extends Shape2D {
  volume(): number;
}

function sumAreas(shape1: Shape2D, shape2: Shape2D) {
  return shape1.area() + shape2.area();
}

export class Rectangle implements Shape2D {
  private height: number;
  private width: number;

  constructor(h: number, w: number) {
    this.height = h;
    this.width = w;
  }
  public area(): number {
    return this.height * this.width;
  }

  public numberOfSides(): number {
    return 4;
  }

  public perimeter() {
    return 2 * this.height + 2 * this.width;
  }
}

export class Square extends Rectangle {
  constructor(side: number) {
    super(side, side);
  }
}

export class Circle implements Shape2D {

  private radious: number;

  constructor(radious: number) {
    this.radious = radious;
  }
  public area(): number {
    return PI * this.radious * this.radious;
  }

  public numberOfSides(): number {
    return 1;
  }

  public perimeter(): number {
    return 2 * PI * this.radious;
  }
}
