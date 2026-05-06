interface ApiResponse<T> {
  data: T;
  success: boolean;
}
const response: ApiResponse<string> = {
  data: "Mofassel Hosain",
  success: false,
};

// function generic type Generic with Multiple Types :
function pair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}
interface Box<T> {
  value: T;
}
const box1: Box<boolean> = {
  value: true,
};

interface Big {
  name: string;
}

interface Logger<T extends Big> {}
