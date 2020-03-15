import React from 'react';
import { mount } from 'enzyme';
import { VerificationCode } from 'pages/Login/VerificationCode';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const store = configureStore()({});
store.dispatch = jest.fn();

describe('Components [VerificationCOde]', () => {
  let component: any;

  const props: VerificationCode = {
    location: {
      search: '?code=asd23jad'
    }
  };

  beforeEach(() => {
    component = mount(
      <Provider store={store}>
        <VerificationCode {...props} />
      </Provider>
    );
  });

  it('Should render', () => {
    expect(component).toHaveLength(1);
  });

  it('Should dispatch action with correct code', () => {
    expect(store.dispatch).toHaveBeenCalledWith({
      code: 'asd23jad',
      type: '@@SUBMIT_VERIFICATION_CODE'
    });
  });
});
