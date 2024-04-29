import { getByTestId, render } from "@testing-library/react";
import Ideologies from "./Ideologies";

describe(Ideologies, () =>{

  it("Centrism", (x, y) =>{
    const {} = render(<Ideologies />);
    const ideologyValue = getByTestId("DisplayIdeology").textContent
  })

});