import { Button } from '../button/button.component';
import { useState } from 'react';
import './style.scss';

interface FormProps {
  handleSubmit(subject: string, message: string): void;
  onClose(): void;
}

export const Form = ({ handleSubmit, onClose }: FormProps) => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSubject = (event: any) => {
    setSubject(event.target.value);
  };

  const handleMessage = (event: any) => {
    setMessage(event.target.value);
  };

  const onClean = () => {
    setSubject('');
    setMessage('');
  };

  const onCloseButton = () => {
    onClean();
    onClose();
    setError(false);
  };

  const onSave = () => {
    if (subject && message) {
      handleSubmit(subject, message);
      onClean();
      onClose();
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="form">
      {error && <span className="error">all required fields</span>}
      <input
        placeholder="subject"
        type="subject"
        value={subject}
        onChange={handleSubject}
      />
      <textarea
        rows={3}
        placeholder="message"
        value={message}
        onChange={handleMessage}
      />
      <div className="form__buttons">
        <Button className="back" onClick={() => onCloseButton()}>
          go back
        </Button>
        <Button className="save" onClick={() => onSave()}>
          save
        </Button>
      </div>
    </div>
  );
};
