// To import SVGs in TS
declare module '*.svg' {
  const content: string;
  export default content;
}
