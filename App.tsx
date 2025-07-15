import { useState } from 'react';
import Alert from './components/Alert';
import ListGroup from './components/ListGroup';
import Button from './components/Button';

function App() {
  const cities = ['New York', 'Tokyo', 'Paris'];
  const [alertVisible, setAlertVisible] = useState(false); // ✅ manage alert state

  return (
    <div className="container mt-3">
      {/* ✅ Show alert only if alertVisible is true */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          <strong>Hello!</strong> This is an alert message.
        </Alert>
      )}

      <ListGroup
        items={cities}
        heading="City List"
        onSelectItem={(item) => console.log('Selected:', item)}
      />

      {/* ✅ Show button to trigger alert */}
      <div className="mt-3">
        <Button color="danger" onClick={() => setAlertVisible(true)}>
          Show Alert
        </Button>
      </div>
    </div>
  );
}

export default App;
