import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState({});

  const VALID_CREDENTIALS = {
    email: 'admin@example.com',
    password: 'password123',
  };

  const validateEmail = (email) => {
    if (!email) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return '';
  };

  const validatePassword = (password) => {
    if (!password) return 'Password is required';
    if (password.length < 6) return 'Password must be at least 6 characters';
    return '';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const updatedErrors = { ...errors };
      if (name === 'email') {
        const err = validateEmail(value);
        if (err) updatedErrors.email = err;
        else delete updatedErrors.email;
      }
      if (name === 'password') {
        const err = validatePassword(value);
        if (err) updatedErrors.password = err;
        else delete updatedErrors.password;
      }
      setErrors(updatedErrors);
    }

    if (success) setSuccess('');
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldError =
      name === 'email'
        ? validateEmail(formData.email)
        : validatePassword(formData.password);

    setErrors((prev) => ({
      ...prev,
      [name]: fieldError || undefined,
    }));
  };

  const validateForm = () => {
    const emailErr = validateEmail(formData.email);
    const passwordErr = validatePassword(formData.password);
    const newErrors = {};
    if (emailErr) newErrors.email = emailErr;
    if (passwordErr) newErrors.password = passwordErr;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });

    if (!validateForm()) return;

    setLoading(true);
    setTimeout(() => {
      if (
        formData.email === VALID_CREDENTIALS.email &&
        formData.password === VALID_CREDENTIALS.password
      ) {
        localStorage.setItem('authToken', 'mock.token');
        localStorage.setItem('user', JSON.stringify({ email: formData.email }));

        setSuccess('Login successful!');
        setFormData({ email: '', password: '' });
        setTouched({});

        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      } else {
        setErrors({ general: 'Invalid email or password' });
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ backgroundColor: '#f9f8fe', minHeight: '100vh' }} className="d-flex flex-column align-items-center justify-content-center py-5">
      <Card style={{ width: '440px',height: '320px', borderRadius: '8px', border: '1px solid #eaeaea' }}>
        <Card.Body className="p-4">
          <h4 className="text-center fw-bold mb-4">Log in</h4>

          {errors.general && (
            <Alert variant="danger" className="py-2 small">
              {errors.general}
            </Alert>
          )}

          {success && (
            <Alert variant="success" className="py-2 small">
              {success}
            </Alert>
          )}

          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-3">
              <Form.Label className="small mb-1">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`py-2 ${touched.email && errors.email ? 'is-invalid' : ''}`}
              />
              {touched.email && errors.email && (
                <div className="invalid-feedback d-block small">{errors.email}</div>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <Form.Label className="small mb-0">Password</Form.Label>
                <Button
                  variant="link"
                  className="p-0 text-decoration-none small"
                  style={{ color: '#6c3fcf' }}
                  onClick={() => alert('Forgot password clicked')}
                >
                  Forgot password?
                </Button>
              </div>
              <div className="position-relative">
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`py-2 pe-5 ${touched.password && errors.password ? 'is-invalid' : ''}`}
                />
                <Button
                  type="button"
                  variant="link"
                  onClick={() => setShowPassword(!showPassword)}
                  className="position-absolute end-0 top-50 translate-middle-y p-0 me-3"
                  style={{ border: 'none', background: 'none', color: '#adb5bd' }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </Button>
              </div>
              {touched.password && errors.password && (
                <div className="invalid-feedback d-block small">{errors.password}</div>
              )}
            </Form.Group>

            <Button
              type="submit"
              className="w-100 py-2 fw-medium border-0 mt-3"
              style={{
                backgroundColor: '#5b43f1',
                color: '#ffffff',
                fontSize: '15px',
              }}
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Log in'}
            </Button>
          </Form>
        </Card.Body>
      </Card>

     
      <div className="text-center mt-3">
        <span className="small">Don’t have an account? </span>
        <Button
          variant="link"
          className="p-0 text-decoration-none small fw-medium"
          style={{ color: '#6c3fcf' }}
        >
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default Login;
