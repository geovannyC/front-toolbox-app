import Alert from 'react-bootstrap/Alert'
import React from "react";

export function Error_status() {
  const ErrorComponent = () => {
    return (
        <Alert variant="warning">
        <Alert.Heading >error file no found...</Alert.Heading>
      </Alert>
    
    );
  };

  return <ErrorComponent />;
}
