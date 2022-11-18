import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

export default function ThemeSwitchIcon() {
  const [themeDesc, setThemeDesc] = useState('');
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  function switchTheme() {
    if (theme === 'system' && systemTheme === 'light') {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else if (theme === 'system' && systemTheme === 'dark') {
      setTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
    } else if (theme === 'light') {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  useEffect(() => {
    // set the html theme on initial load
    if (theme === 'system') {
      console.log('syst theme', systemTheme);
      document.documentElement.setAttribute('data-theme', systemTheme);
    } else {
      console.log('theme', systemTheme);

      document.documentElement.setAttribute('data-theme', theme);
    }
    // set the theme name display for switch
    if (theme === 'light') {
      setThemeDesc('Dark');
    } else if (theme === 'dark') {
      setThemeDesc('Light');
    } else if (theme === 'system') {
      if (systemTheme === 'light') {
        setThemeDesc('Dark');
      } else if (systemTheme === 'dark') {
        setThemeDesc('Light');
      }
    } else {
      setThemeDesc('');
    }
    setMounted(true);
  }, [systemTheme, theme]);
  let renderThemeChanger = () => {
    if (!mounted) return;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <div
          className=" text-textColor1Dark mr-auto grid w-fit  "
          role="button"
          // onClick={() => setTheme('light')}
        >
          <FontAwesomeIcon className="w-5 h-5" icon={faSun} />
        </div>
      );
    } else {
      return (
        <div
          className=" text-textColor1 ml-auto grid w-fit"
          role="button"
          // onClick={() => setTheme('dark')}
        >
          <FontAwesomeIcon className="w-5 h-5" icon={faMoon} />
        </div>
      );
    }
  };

  return (
    <>
      <div
        className="opacity-60 hover:opacity-100  p-1 grid grid-flow-col gap-2 cursor-pointer"
        onClick={() => switchTheme()}
      >
        <div className="my-auto">{renderThemeChanger()}</div>{' '}
        <div className="lg:hidden my-auto">{themeDesc} Theme</div>
      </div>
    </>
  );
}
