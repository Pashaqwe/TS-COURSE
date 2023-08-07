type Status = "ok" | "loading" | "error";

const staticX: Status = "loading";

function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

function welcome(persone: [string, string] | string): number | string {
  if (Array.isArray(persone)) {
    console.log("Hello", persone.join(" "));
    return 1;
  } else {
    console.log("Hello", persone);
    return persone;
  }
}
