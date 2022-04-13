import Alert from 'react-bootstrap/Alert'
import React from "react";

export function Loading_status() {
  const LoadingComponent = () => {
    return (
        <Alert variant="info">
        <Alert.Heading >Loading...</Alert.Heading>
      </Alert>
    
    );
  };

  return <LoadingComponent />;
}
