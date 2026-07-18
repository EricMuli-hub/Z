import React from 'react';

function App() {
  return (
    <div style={{ 
      background: '#0a0a0a', 
      color: 'white', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#4ade80', fontSize: '3rem' }}>💰 MULI OS</h1>
      <p style={{ color: '#aaa', fontSize: '1.2rem' }}>Your Financial Command Center</p>
      <div style={{ background: '#1a1a1a', padding: '30px', borderRadius: '16px', marginTop: '20px' }}>
        <p style={{ fontSize: '1.1rem' }}>💰 Budget: <strong style={{ color: '#4ade80' }}>$3,000</strong></p>
        <p style={{ fontSize: '1.1rem' }}>📊 Spent: <strong style={{ color: '#fbbf24' }}>$1,450</strong></p>
        <p style={{ fontSize: '1.1rem' }}>✅ Remaining: <strong style={{ color: '#4ade80' }}>$1,550</strong></p>
      </div>
      <button style={{ marginTop: '20px', padding: '14px 32px', background: '#4ade80', border: 'none', borderRadius: '10px', color: '#000', fontWeight: 'bold' }}>
        ➕ Add Expense
      </button>
    </div>
  );
}

export default App;