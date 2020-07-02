import React, { Component } from 'react';
import i18next from './config';
import { I18nextProvider, withTranslation } from 'react-i18next';

//Wraps the Layout component with withTranslation
//injects the t function and i18n instance into the Layout with props

export function withTrans(WrappedComponent) {
    WrappedComponent = withTranslation()(WrappedComponent);

    return class extends Component {
      render() {
        return (
          <I18nextProvider i18n={i18next}>
            <WrappedComponent {...this.props} language={i18next.language} />
          </I18nextProvider>
        );
      }
    }
}
