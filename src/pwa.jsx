import React, { useEffect, useState } from "react";
import {Alert, Button} from "antd";


const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [installed, setInstalled] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

    const onClick = evt => {
      evt.preventDefault();
      if (!promptInstall) {
        return;
      }
      promptInstall.prompt();
    };

    if (!supportsPWA) {
      return null;
    }

    if (window.matchMedia('(display-mode: standalone)').matches) {
       setInstalled(true)
    }

  return (
      <>
        {!installed ?
              <Alert
                message="نصب PWA"
                className='m-2 fixed top-0 left-0 right-0'
                type="info"
                showIcon
                action={
                  <Button className='bg-amber-200' onClick={onClick} size="small" type="default">
                    نصب
                  </Button>
                }
                closable
            />
            : <></>}
      </>

  );
};

export default InstallPWA;
