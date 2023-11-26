export const OpisBtn = (props) => {
  const { color, pokaz, setPokaz } = props;
  console.log(pokaz);
  return (
    <button
      style={{ backgroundColor: color }}
      value={pokaz}
      onClick={() => setPokaz((prev) => !prev)}
    >
      {pokaz ? "Schowaj" : "Pokaż"} opis
    </button>
  );
};
