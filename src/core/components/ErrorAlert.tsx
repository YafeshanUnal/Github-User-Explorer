interface ErrorAlertProps {
  message: string;
}

export const ErrorAlert = ({ message }: ErrorAlertProps) => {
  return (
    <div className="bg-red-500 h-16 w-full flex items-center justify-center absolute">
      <h1 className="text-2xl font-normal text-white">{message}</h1>
    </div>
  );
};

export default ErrorAlert;
