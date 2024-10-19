import React, { ReactNode } from "react";
import { Stack } from "ruru-ui/components/stack";

const StackPlayground = () => {
  return (
    <div className="space-y-5">
      <H1>direction</H1>
      <P>
        Defines the layout direction of the stack. It can be either "row" or
        "column". Supports responsive breakpoints.
      </P>
      <Stack direction={{ sm: "column", lg: "row" }}>
        <div className="bg-gray-200 h-12 w-12 rounded-md" />
        <div className="bg-gray-300 h-12 w-12 rounded-md" />
      </Stack>

      <H1>gap</H1>
      <P>
        Defines the space between the child elements. Accepts numbers or
        responsive breakpoints.
      </P>
      <Stack gap={{ sm: 4, md: 8, lg: 16 }}>
        <div className="bg-blue-300 h-12 w-12 rounded-md" />
        <div className="bg-blue-400 h-12 w-12 rounded-md" />
      </Stack>

      <H1>align</H1>
      <P>
        Controls how child elements are aligned along the cross axis (vertical
        in a row layout, horizontal in a column layout).
      </P>
      <Stack align={{ sm: "start", md: "center" }}>
        <div className="bg-red-300 h-12 w-12 rounded-md" />
        <div className="bg-red-400 h-12 w-12 rounded-md" />
      </Stack>

      <H1>justify</H1>
      <P>Determines how the elements are distributed along the main axis.</P>
      <Stack justify={{ sm: "center", lg: "space-between" }}>
        <div className="bg-green-300 h-12 w-12 rounded-md" />
        <div className="bg-green-400 h-12 w-12 rounded-md" />
      </Stack>

      <H1>wrap</H1>
      <P>Allows child elements to wrap onto multiple lines.</P>
      <Stack wrap="wrap">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="bg-yellow-200 h-12 w-12 m-2 rounded-md" />
          ))}
      </Stack>

      <H1>padding</H1>
      <P>
        Defines the padding around the stack. Supports fixed and responsive
        values.
      </P>
      <Stack padding={{ sm: 10, lg: 20 }} className="bg-gray-100">
        <div className="bg-blue-400 h-12 w-12 rounded-md" />
      </Stack>

      <H1>margin</H1>
      <P>
        Applies margin to the stack element. Supports fixed and responsive
        values.
      </P>
      <Stack margin={{ sm: "5px", lg: "20px" }}>
        <div className="bg-purple-300 h-12 w-12 rounded-md" />
      </Stack>

      <H1>grow</H1>
      <P>Determines how much the stack should grow relative to its siblings.</P>
      <div className="flex h-40">
        <Stack grow={1} className="bg-green-200" />
        <Stack grow={2} className="bg-green-400" />
      </div>

      <H1>zIndex</H1>
      <P>Controls the stack's stacking order on the page.</P>
      <Stack zIndex={10} className="relative">
        <div className="bg-indigo-500 h-12 w-12 rounded-md" />
      </Stack>

      <H1>visibility</H1>
      <P>
        Sets the visibility of the stack. Can be "visible", "hidden", or
        "collapse".
      </P>
      <Stack visibility={{ sm: "hidden", md: "visible" }}>
        <div className="bg-red-500 h-12 w-12 rounded-md" />
      </Stack>

      <H1>alignContent</H1>
      <P>
        Defines how multiple rows of content are aligned along the cross axis.
      </P>
      <Stack wrap="wrap" alignContent="center" height={200}>
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="bg-blue-200 h-12 w-12 m-2 rounded-md" />
          ))}
      </Stack>

      <H1>Example: Combining Multiple Props</H1>
      <P>Demonstrates the use of multiple props in a stack.</P>
      <Stack
        direction={{ sm: "column", lg: "row" }}
        gap={{ sm: 2, lg: 10 }}
        align="center"
        justify="space-between"
        padding={20}
        backgroundColor="#fafafa"
        border="1px solid #ddd"
        borderRadius="8px"
      >
        <div className="bg-blue-500 h-12 w-12 rounded-md" />
        <div className="bg-red-500 h-12 w-12 rounded-md" />
      </Stack>
    </div>
  );
};

export default StackPlayground;

const H1 = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight ">
      {children}
    </h1>
  );
};

const P = ({ children }: { children: ReactNode }) => {
  return <p className="leading-7">{children}</p>;
};
