import { IForm } from '@/common/ui/form-ui/form.interface';

export const Form = ({ children, handleSubmit, ...props }: IForm) => {
  return (
    <form
      {...props}
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit?.();
      }}
    >
      {children}
    </form>
  );
};
