
interface ErrorMessageProps {
  message: string;
  color: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, color }) => {
  return (
    <div className={`text-xs ${color}`} role="alert">
      {message}
    </div>
  );
};

export default ErrorMessage;