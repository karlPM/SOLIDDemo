import React from 'react';


// D = Dependency injection Principle treadted here
  const withPremiumFeature = BaseUserComponent => props => {
    return (
        <BaseUserComponent userData={props.userData}>
          <div>I am a very special user</div>
          {props.children}
        </BaseUserComponent>
    );
  };

export default withPremiumFeature;