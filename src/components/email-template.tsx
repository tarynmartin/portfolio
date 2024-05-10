import * as React from 'react';

interface EmailTemplateProps {
  message: string;
  email: string;
  name: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message, email, name
}) => (
  <div>
    <p><strong>Name of Person:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Message:</strong> {message}</p>
  </div>
);