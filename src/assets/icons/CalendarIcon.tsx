type IconProps = {
  color?: string;
};

const CalendarIcon = ({ color = "#ebecf0" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12.25"
    height="14"
    viewBox="0 0 448 512"
  >
    <path
      fill={color}
      d="M96 32v32H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48h-48V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32m352 160H0v272c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48z"
    ></path>
  </svg>
);

export default CalendarIcon;
