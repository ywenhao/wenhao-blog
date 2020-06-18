import App from 'next/app'
import 'antd/dist/antd.css'
import '../static/style/pages/comm.css'

import { Provider } from 'react-redux'
import configStore from '../store'

const store = configStore()


export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}
