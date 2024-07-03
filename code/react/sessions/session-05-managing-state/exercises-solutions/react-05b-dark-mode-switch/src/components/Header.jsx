import DarkModeSwitch from './DarkModeSwitch';

export default function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <header>
      <p>This is the Header</p>
      <DarkModeSwitch isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </header>
  );
}
