function Village(value: string | number) {
  if (typeof value === "string") {
    console.log("String: ", value.toUpperCase());
  } else {
    console.log("Number:", value.toFixed(1));
  }
}
Village("Austragram");
Village(500);
