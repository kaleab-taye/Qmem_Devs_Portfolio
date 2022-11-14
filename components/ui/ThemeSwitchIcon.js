import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

export default function ThemeSwitchIcon() {
  const { systemTheme, theme, setTheme } = useTheme('light');
  const [mounted, setMounted] = useState(false);

  function switchTheme (){
    console.log('switch')
    if(theme === 'light'){
      setTheme('dark')
    }else{
      setTheme('light')

    }
  }

  useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <div
          className=" text-textColor1Dark mr-auto grid w-fit "
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

  function handleClick(item) {
    console.log(item);
    localStorage.theme = item;
    document.documentElement.classList.add('dark');

    console.log(document.documentElement.classList.add('dark'));
  }

  return (
    <>
      <div className="  p-1 grid grid-flow-col gap-2 cursor-pointer" onClick={()=>switchTheme()}>
        <div className="my-auto">{renderThemeChanger()}</div>{' '}
        <div className="lg:hidden my-auto">Theme</div>
      </div>
    </>
  );
}
