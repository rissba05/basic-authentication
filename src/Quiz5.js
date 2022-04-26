import React
    , { useEffect } from 'react';

import { Auth } from 'aws-amplify';
import Container from './Container';
​
// Functional component implemented as a const with a multi statement lambda.
const Protected = (props) => {
    // React hook to run code when our component is 'ready'.
    useEffect(
        () => {
            Auth.currentAuthenticatedUser()
                .catch (
                    () => {
                        // Redirect to the profile page
                        props.history.push('/profile');
                    }
                );
            }
            , []
        );
    // Return the JSX 
    return (
        <Container>
            <h1>
                Protected route
            </h1>
        </Container>
    );

};
​
export default Protected;