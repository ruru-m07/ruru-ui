#!/usr/bin/env node

async function main(): Promise<void> {
  switch (process.argv[2]) {
    case "init":
      if (process.argv[3] === "-h") {
        console.log("Usage: initalize Ruru-ui. ");
        return;
      }
      await import("./commands/init").then((mod) => mod.init());
      break;
    case "add":
      await import("./commands/add").then((mod) => mod.add());
      break;
    default:
      console.log("Usage: . <command>");
      break;
  }
}

main().catch((e: unknown) => {
  console.error(e);
  throw e;
});
