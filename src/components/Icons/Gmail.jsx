const Gmail = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="52"
      viewBox="52 42 88 66"
    >
      <path
        fill={props.active ? "#4285f4" : "#444"}
        d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"
        style="transition: all 500ms"
      />
      <path
        fill={props.active ? "#34a853" : "#909090"}
        d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"
        style="transition: all 500ms"
      />
      <path
        fill={props.active ? "#fbbc04" : "#C1C1C1"}
        d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"
        style="transition: all 500ms"
      />
      <path
        fill={props.active ? "#ea4335" : "#6C6C6C"}
        d="M72 74V48l24 18 24-18v26L96 92"
        style="transition: all 500ms"
      />
      <path
        fill={props.active ? "#c5221f" : "#000"}
        d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"
        style="transition: all 500ms"
      />
    </svg>
  );
};
export default Gmail;
