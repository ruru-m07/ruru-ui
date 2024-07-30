import React from "react";
import { Tab, Tabs } from "ruru-ui/components/tabs";

const Tabspreview = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-4">
        <Tabs defaultIndex={2} items={["Javascript", "Rust", "Typescript"]}>
          <Tab value="Javascript">
            <div>
              <h3>Javascript</h3>
              <p>
                JavaScript is a programming language that conforms to the
                ECMAScript specification. JavaScript is high-level, often
                just-in-time compiled, and multi-paradigm. It has curly-bracket
                syntax, dynamic typing, prototype-based object-orientation, and
                first-class functions.
              </p>
            </div>
          </Tab>
          <Tab value="Rust">
            <div>
              <h3>Rust</h3>
              <p>
                Rust is a multi-paradigm systems programming language focused on
                safety, especially safe concurrency. Rust is syntactically
                similar to C++, but can guarantee memory safety by using a
                borrow checker to validate references.
              </p>
            </div>
          </Tab>
          <Tab value="Typescript">
            <div>
              <h3>Typescript</h3>
              <p>
                TypeScript is a programming language developed and maintained by
                Microsoft. It is a strict syntactical superset of JavaScript and
                adds optional static typing to the language.
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Tabspreview;
