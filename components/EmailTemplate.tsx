import * as React from 'react';

interface EmailTemplateProps {
  formType: string;
  data: { [key: string]: string };
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  formType,
  data,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
    <h1 style={{ color: '#dc2626' }}>New {formType} Submission</h1>
    <p>You have received a new form submission from the SKIF-USA website.</p>
    
    <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} style={{ marginBottom: '10px' }}>
          <strong style={{ textTransform: 'uppercase', fontSize: '12px', color: '#666' }}>
            {key}:
          </strong>
          <div style={{ fontSize: '16px', marginTop: '4px' }}>
            {value}
          </div>
        </div>
      ))}
    </div>
  </div>
);