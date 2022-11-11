import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeSwitchIcon() {
  const [themeState, setThemeState] = useState('light');
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() =>{
    setMounted(true);
  },[])
  const renderThemeChanger = () => {
    if(!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <div
          className="w-10 h-10 text-yellow-500 "
          role="button"
          onClick={() => setTheme('light')}
        >
          sun
        </div>
      );
    } else {
      return (
        <div
          className="w-10 h-10 text-gray-900 "
          role="button"
          onClick={() => setTheme('dark')}
        >
          dark
        </div>
      );
    }
  };

  function handleClick(item) {
    console.log(item);
    localStorage.theme = item;
    document.documentElement.classList.add('dark');

    console.log(document.documentElement.classList.add('dark'));
  }

  return <div className="absolute top-0">{renderThemeChanger()}</div>;
}
