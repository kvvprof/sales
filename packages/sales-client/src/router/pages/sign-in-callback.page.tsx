import { useParams } from 'react-router-dom';

import { SingInCallback } from '@/components/auth/sign-in-callback/sign-in-callback.ui';

const SignInCallbackPage = () => {
  const { token } = useParams();

  return <SingInCallback token={token} />;
};

export default SignInCallbackPage;
