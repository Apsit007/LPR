type ImageFileExtension = "jpg" | "jpeg" | "svg" | "png";
declare type ImagePath = `${string}.${
  | ImageFileExtension
  | Uppercase<ImageFileExtension>}`;
