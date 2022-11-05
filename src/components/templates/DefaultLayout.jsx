import Header from "../molecules/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DefautLayout = (props) => {
  const { children } = props;
  return (
    <>
     <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeonClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
        <Header title="Event" />
        {children}
      <ToastContainer />
    </>
  );
};
