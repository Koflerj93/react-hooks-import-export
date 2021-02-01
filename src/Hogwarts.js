import React from "react";
import whoseHouse from "./houses/whoseHouse";
import HooflePoof from "./houses/Hufflepuff";

// these below all do the same thing
import * as GryffFunctions from "./houses/Gryffindor";
// import { colors, gryffMascot } from "./houses/Gryffindor"; // able to reference the variable imported by its previously declared name:
// import { colors, gryffMascot as mascot } from "./houses/Gryffindor"; //rename it inside of our import statement:

GryffFunctions.colors();
// => 'Scarlet and Gold'

GryffFunctions.gryffMascot();
// => 'The Lion'

GryffFunctions.values();
// => ReferenceError: values is not defined

export default function Hogwarts() {
  whoseHouse();

  return (
    <div>
      <HooflePoof />
      {/*
				Will render `NOBODY CARES ABOUT US`, even though we renamed `Hufflepuff`
				to `HooflePoof`
			*/}
    </div>
  );
}
