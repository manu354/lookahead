import { expect } from "chai";
import "mocha";
import moment = require("moment");
import SubjectClass from "../../subject-utils/SubjectClass";

describe("Subject Class", () => {
  let classA: SubjectClass;
  let classB: SubjectClass;
  beforeEach(() => {
    // constructor params
    const codeA = "MAST10006/U/1/SM2/P01/48";
    const codeB = "MAST10006/U/1/SM2/P01/49";
    const description = "Practical 1";
    const locationA = "PAR-David Caro-Podium 202";
    const locationB = "PAR-David Caro-Podium 205";
    const day = 0;
    const start = 17.25;
    const finish = 18.25;
    const weeks = [31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43];
    classA = new SubjectClass(
      null,
      codeA,
      description,
      day,
      start,
      finish,
      weeks,
      locationA
    );
    classB = new SubjectClass(
      null,
      codeB,
      description,
      day,
      start,
      finish,
      weeks,
      locationB
    );
  });

  it("initialising class with expected data", () => {
    expect(classA.toString()).to.equal(
      "MAST10006/U/1/SM2/P01/48: Monday 17:15 -> 18:15 at PAR-David Caro-Podium 202"
    );
  });

  it("merge a class", () => {
    // Merge two classes together, should concat code and location
    classA.mergeClass(classB);
    expect(classA.toString()).to.equal(
      // tslint:disable-next-line:max-line-length
      "MAST10006/U/1/SM2/P01/48, MAST10006/U/1/SM2/P01/49: Monday 17:15 -> 18:15 at PAR-David Caro-Podium 202, PAR-David Caro-Podium 205"
    );
  });
});
