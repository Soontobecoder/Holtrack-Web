interface Prop {
  data: Array<string>;
}

export const Points: React.FC<Prop> = ({ data }) => {
  return (
    <ul className="flex flex-col gap-5">
      {data.map((item, index) => {
        // Split the item (string) into two parts: the bold part and the rest
        const [boldPart, ...rest] = item.split(/:(.+)/); // Splitting the string to 2 parts, boldPart (before ':') amd rest (after ':') after the first colon only
        return (
          <li key={index} className="pl-5">
            <strong>
              {boldPart}
              {rest.length > 0 && ":"}{" "}
              {/* Print colon if there is a rest part and rest.length > 0 */}
            </strong>
            {rest.length > 0 && <span> {rest[0]}</span>}
          </li>
        );
      })}
    </ul>
  );
};
