type HeaderProps = {
  onReset: () => void;
};

export const Header = ({ onReset }: HeaderProps) => {
  return (
    <header>
      <h2 onClick={onReset}>Just a table</h2>
    </header>
  );
};
