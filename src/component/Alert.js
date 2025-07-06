import React, { useState, useEffect } from 'react';

export default function Alert({ alert, onClose }) {
    const [visible, setVisible] = useState(!!alert);

    useEffect(() => {
        if (alert) {
            setVisible(true);
        }
    }, [alert, onClose]);

    if (!visible || !alert) return null;

    const style = {
        position: 'relative',
        padding: '12px 20px',
        width: '100%',
        fontSize: '16px',
        fontWeight: '500',
        textAlign: 'center',
        color: '#fff',
        backgroundColor: alert.type === 'success' ? '#22c55e' : '#ef4444',
        transition: 'all 0.3s ease',
    };

    return (
        <div style={style}>
            {alert.msg}
        </div>
    );
}
