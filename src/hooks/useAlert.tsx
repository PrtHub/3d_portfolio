import { useState } from 'react';

type AlertType = 'success' | 'info' | 'warning' | 'danger';

interface AlertState {
  show: boolean;
  text: string;
  type: AlertType;
}

interface ShowAlertOptions {
  text: string;
  type?: AlertType;
}

const useAlert = () => {
  const [alert, setAlert] = useState<AlertState>({ 
    show: false, 
    text: '', 
    type: 'danger' 
  });

  const showAlert = ({ text, type = 'danger' }: ShowAlertOptions): void => 
    setAlert({ show: true, text, type });

  const hideAlert = (): void => 
    setAlert({ show: false, text: '', type: 'danger' });

  return { alert, showAlert, hideAlert };
};

export default useAlert;