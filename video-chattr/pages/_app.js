import "../styles/Globals.css";
// import "../styles/Index.css";
import "../styles/Forms.scss";
import Layout from "../componenets/Layout";
import { store } from "../app/store";
import { Provider } from "react-redux"
import AppContext from "../states/AppContext";
import authObject from "../states/auth/authObject";
import 'react-toastify/dist/ReactToastify.css'


function MyApp({ Component, pageProps }) {
  
  
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
);

//Context API
  // const authorizationObject = authObject;   
  // return (
  //     <AppContext.Provider value={
  //       {
  //         state: {
  //           auth: authorizationObject,
  //         }
  //       }
  //     }>
  //       <Layout>
  //         <Component {...pageProps} />
  //       </Layout>
  //     </AppContext.Provider>
  // );
}

export default MyApp;
