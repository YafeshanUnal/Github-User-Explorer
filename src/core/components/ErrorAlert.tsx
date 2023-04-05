interface ErrorAlertProps {
  message: string;
}

export const ErrorAlert = ({ message }: ErrorAlertProps) => {
  return (
    <div className="error-alert">
      <h1>{message}</h1>
    </div>
  );
};

export default ErrorAlert;
