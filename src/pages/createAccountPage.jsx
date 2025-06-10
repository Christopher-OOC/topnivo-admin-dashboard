import { useState } from 'react';
import Features from '../components/Features';
import AboutSection from '../composite/AboutSection';
import { Eye, EyeOff } from 'lucide-react';
import Button from '../core/Button';
import { Link, useNavigate } from 'react-router-dom';
import { GiPadlock } from 'react-icons/gi';

export default function CreateAccountPage() {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setErrorMessage(''); // clear error on input
  };

  const handleNextStep = () => {
    const { firstName, lastName } = formData;
    if (!firstName.trim() || !lastName.trim()) {
      setErrorMessage('Please fill in both First Name and Last Name before proceeding.');
      return;
    }
    setStep(2);
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, username } = formData;
    if (!email.trim() || !username.trim()) {
      setErrorMessage('Please fill in both Email and Username to sign up.');
      return;
    }

    // Mock form submission
    console.log('Form submitted:', formData);
    setShowSuccess(true);
  };

  const handleLoginRedirect = () => {
    navigate('/');
  };

  return (
    <div className="flex min-h-screen bg-white pt-10 max-w-[100%] px-4">
      <div className="flex flex-col md:flex-row w-full mx-auto overflow-hidden bg-white max-w-[80%]">
        <div className="w-full md:w-1/2 order-2 md:order-1 mx-10">
          <AboutSection className='rounded-r-3xl' />
        </div>

        <div className="lg:w-1/2 lg:pl-8">
          <div className="bg-white rounded-lg p-4 mt-10">
            <h2 className="text-2xl font-bold mb-6">Create an account</h2>

            {!showSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {step === 1 && (
                  <>
                    <div>
                      <label className="block text-gray-500 mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        className="w-full p-3 border rounded"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-500 mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        className="w-full p-3 border rounded"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>

                    {errorMessage && (
                      <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                    )}

                    <Button onClick={handleNextStep} variant='real'>
                      Next Step
                    </Button>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div>
                      <label className="block text-gray-500 mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        className="w-full p-3 border rounded"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-500 mb-2">Username</label>
                      <input
                        type="text"
                        name="username"
                        className="w-full p-3 border rounded"
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={handleChange}
                      />
                    </div>

                    {errorMessage && (
                      <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                    )}

                    <Button variant="real" type="submit">
                      Sign Up
                    </Button>
                  </>
                )}
              </form>
            ) : (
              <div className="text-center mt-6 space-y-4">
                <p className="text-green-600 font-medium">Signup complete. Code sent to your email.</p>
                <p>
                  Please{' '}
                  <button
                    onClick={handleLoginRedirect}
                    className="text-yellow-500 font-bold underline"
                  >
                    login
                  </button>
                  .
                </p>
              </div>
            )}

            {!showSuccess && (
              <div className="text-center mt-4">
                Already have an account?
                <Link to="/" className="text-yellow-500 ml-1 hover:underline">Login</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
