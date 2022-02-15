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
  };

  const onSave = () => {
    handleSubmit(subject, message);
    onClean();
    onClose();
  };

  return (
    <div className="form">
      <input
        placeholder="subject"
        type="subject"
        value={subject}
        onChange={handleSubject}
      />
      <textarea
        rows={4}
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
